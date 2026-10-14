<?php

namespace Tests\Feature;

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Tests\TestCase;

class PayoutFailClosedTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        config([
            'services.payouts.enabled' => false,
            'services.payouts.paypal.client_id' => null,
            'services.payouts.paypal.client_secret' => null,
            'services.payouts.stripe.secret' => null,
            'services.payouts.razorpay.key' => null,
            'services.payouts.razorpay.secret' => null,
            'services.payouts.flutterwave.secret' => null,
        ]);
    }

    public function test_payout_rejects_malformed_base64_json_payload(): void
    {
        $response = (new UserController())->payToUser(
            Request::create('/pay-to-user', 'POST', ['data' => '%%%'])
        );

        $this->assertSame(422, $response->getStatusCode());
    }

    public function test_payout_is_unavailable_when_globally_disabled(): void
    {
        $response = (new UserController())->payToUser(
            $this->requestWithData([
                'method' => 'stripe',
                'payoutId' => 'dummy-payout-id',
                'amount' => '1.00',
                'user' => ['withdrawMethod' => ['stripe' => ['accountId' => 'acct_dummy']]],
                'settings' => ['stripeSecret' => 'dummy-not-a-credential'],
            ])
        );

        $this->assertSame(503, $response->getStatusCode());
        $this->assertStringContainsString('not configured or enabled', $response->getContent());
    }

    public function test_payout_is_unavailable_when_provider_credentials_are_missing(): void
    {
        config([
            'services.payouts.enabled' => true,
            'services.payouts.stripe.secret' => null,
        ]);

        $response = (new UserController())->payToUser(
            $this->requestWithData([
                'method' => 'stripe',
                'payoutId' => 'dummy-payout-id',
                'amount' => '1.00',
                'user' => ['withdrawMethod' => ['stripe' => ['accountId' => 'acct_dummy']]],
            ])
        );

        $this->assertSame(503, $response->getStatusCode());
    }

    public function test_status_check_is_unavailable_before_provider_call_when_disabled(): void
    {
        $response = (new UserController())->checkPayoutStatus(
            $this->requestWithData([
                'method' => 'paypal',
                'payoutDetail' => [
                    'payoutResponse' => [
                        'batch_header' => ['payout_batch_id' => 'dummy-batch-id'],
                    ],
                ],
            ])
        );

        $this->assertSame(503, $response->getStatusCode());
    }



    public function test_payout_stays_unavailable_even_if_enabled_and_dummy_credentials_are_present(): void
    {
        config([
            'services.payouts.enabled' => true,
            'services.payouts.stripe.secret' => 'sk_test_dummy_not_real',
        ]);

        $response = (new UserController())->payToUser(
            $this->requestWithData([
                'method' => 'stripe',
                'payoutId' => 'dummy-payout-id',
                'amount' => '1.00',
                'user' => ['withdrawMethod' => ['stripe' => ['accountId' => 'acct_dummy']]],
            ])
        );

        $this->assertSame(503, $response->getStatusCode());
    }

    public function test_unknown_provider_method_is_rejected(): void
    {
        $response = (new UserController())->payToUser(
            $this->requestWithData(['method' => 'unknown-provider'])
        );

        $this->assertSame(422, $response->getStatusCode());
    }

    private function requestWithData(array $data): Request
    {
        return Request::create('/pay-to-user', 'POST', [
            'data' => base64_encode(json_encode($data, JSON_THROW_ON_ERROR)),
        ]);
    }
}

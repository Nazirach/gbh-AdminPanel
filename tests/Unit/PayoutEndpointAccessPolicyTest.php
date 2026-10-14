<?php

namespace Tests\Unit;

use App\Support\PayoutEndpointAccessPolicy;
use PHPUnit\Framework\TestCase;

class PayoutEndpointAccessPolicyTest extends TestCase
{
    public function test_allows_a_matching_payout_permission_and_route_pair(): void
    {
        $this->assertTrue(PayoutEndpointAccessPolicy::allows([
            ['permission' => 'payout-request-vendor', 'routes' => 'payout-request.vendor'],
        ]));
    }

    public function test_rejects_a_permission_without_its_matching_route(): void
    {
        $this->assertFalse(PayoutEndpointAccessPolicy::allows([
            ['permission' => 'payout-request-vendor', 'routes' => 'payout-request.owner'],
        ]));
    }

    public function test_rejects_a_route_without_its_matching_permission(): void
    {
        $this->assertFalse(PayoutEndpointAccessPolicy::allows([
            ['permission' => 'payout-request-owner', 'routes' => 'payout-request.vendor'],
        ]));
    }

    public function test_rejects_unrelated_permissions_and_empty_rows(): void
    {
        $this->assertFalse(PayoutEndpointAccessPolicy::allows([
            ['permission' => 'users', 'routes' => 'users'],
        ]));
        $this->assertFalse(PayoutEndpointAccessPolicy::allows([]));
    }

    public function test_accepts_model_like_objects_as_permission_rows(): void
    {
        $row = (object) [
            'permission' => 'payout-request-driver',
            'routes' => 'payout-request.driver',
        ];

        $this->assertTrue(PayoutEndpointAccessPolicy::allows([$row]));
    }
}

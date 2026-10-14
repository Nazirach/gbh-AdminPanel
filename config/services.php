<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    
    // Server-side payout provider credentials. Never accept these from browser payloads.
    // Payout execution stays disabled until SEC-003 and atomicity/idempotency controls are verified.
    'payouts' => [
        'enabled' => env('PAYOUTS_ENABLED', false),
        'paypal' => [
            'client_id' => env('PAYOUT_PAYPAL_CLIENT_ID'),
            'client_secret' => env('PAYOUT_PAYPAL_CLIENT_SECRET'),
            'live' => env('PAYOUT_PAYPAL_LIVE', false),
        ],
        'stripe' => [
            'secret' => env('PAYOUT_STRIPE_SECRET'),
        ],
        'razorpay' => [
            'key' => env('PAYOUT_RAZORPAY_KEY'),
            'secret' => env('PAYOUT_RAZORPAY_SECRET'),
        ],
        'flutterwave' => [
            'secret' => env('PAYOUT_FLUTTERWAVE_SECRET'),
        ],
    ],
];

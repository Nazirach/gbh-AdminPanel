<?php

namespace App\Support;

/**
 * Authorization policy for the shared payout-provider endpoints.
 *
 * The request payload is deliberately not used to choose the required
 * permission. Payout-specific authorization must also validate the
 * authoritative payout record in the controller.
 */
final class PayoutEndpointAccessPolicy
{
    private const PERMISSION_ROUTE_PAIRS = [
        ['payout-request-driver', 'payout-request.driver'],
        ['payout-request-vendor', 'payout-request.vendor'],
        ['payout-request-owner', 'payout-request.owner'],
        ['payout-request-provider', 'payout-request.provider'],
    ];

    /**
     * @param iterable<array|object> $permissionRows
     */
    public static function allows(iterable $permissionRows): bool
    {
        foreach ($permissionRows as $row) {
            $permission = is_array($row)
                ? ($row['permission'] ?? null)
                : ($row->permission ?? null);
            $route = is_array($row)
                ? ($row['routes'] ?? null)
                : ($row->routes ?? null);

            foreach (self::PERMISSION_ROUTE_PAIRS as [$requiredPermission, $requiredRoute]) {
                if ($permission === $requiredPermission && $route === $requiredRoute) {
                    return true;
                }
            }
        }

        return false;
    }
}

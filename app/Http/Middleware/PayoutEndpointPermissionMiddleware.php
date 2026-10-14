<?php

namespace App\Http\Middleware;

use App\Models\Permission;
use App\Support\PayoutEndpointAccessPolicy;
use Closure;
use Illuminate\Http\Request;

class PayoutEndpointPermissionMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (!auth()->check()) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthenticated.',
            ], 401);
        }

        $user = auth()->user();
        $permissionRows = Permission::where('role_id', $user->role_id)
            ->get(['permission', 'routes']);

        if (!PayoutEndpointAccessPolicy::allows($permissionRows)) {
            abort(403, 'Unauthorized access.');
        }

        return $next($request);
    }
}

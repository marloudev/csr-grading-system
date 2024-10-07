<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class RedirectBasedOnRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $account = $request->user(); // Assuming user is authenticated and account information is available

        if ($account) {
            switch ($account->user_type) {
                case '1':
                    return Inertia::location(route('admin.dashboard'));
                case '2':
                    return Inertia::location(route('instructor.dashboard'));
                case '3':
                    return Inertia::location(route('student.dashboard'));
            }
        }


        return $next($request);
    }
}

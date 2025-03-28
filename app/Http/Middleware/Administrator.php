<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class Administrator
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $account = $request->user();
        if ($account->user_type =='2') {
            return Inertia::location(route('instructor.dashboard'));
        } else if ($account->user_type =='3') {
            return Inertia::location(route('student.enrollments'));
        }
        return $next($request);
    }
}

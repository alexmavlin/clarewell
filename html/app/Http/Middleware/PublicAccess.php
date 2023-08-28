<?php

namespace App\Http\Middleware;

use Closure;

class PublicAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return 11111;
        return $next($request);
    }
}

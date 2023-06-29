<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{

    public function index(){
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }
}

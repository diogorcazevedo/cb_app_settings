<?php

namespace App\Http\Controllers;


use Inertia\Inertia;


class DashBoardController extends Controller
{


    public function index(){

       // return redirect()->away('https://administracaodosistema.com.br/master/admin/ceo');

        return Inertia::render('Dashboard',[

        ]);
    
    }

    public function ceo(){

        return redirect()->away('https://administracaodosistema.com.br/master/admin/ceo');
    }
    public function supervisor_web(){

        return redirect()->away('https://administracaodosistema.com.br/online/');
    }
    public function sv(){

        return redirect()->away('https://administracaodosistema.com.br/sv/');
    }
    public function stores(){

        return redirect()->away('https://administracaodosistema.com.br/stores/');
    }

}

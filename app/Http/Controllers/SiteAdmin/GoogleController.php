<?php

namespace App\Http\Controllers\SiteAdmin;

use App\Http\Controllers\Controller;
use App\Models\Collection;


class GoogleController extends Controller
{

    public function merchant()
    {

        $collections = Collection::whereHas('images' , function($q) {
            $q->where('image_type_id',3 );
        })->whereHas('products' , function($q) {
            $q->where('sale',1 )->whereHas('images',function($q){
                $q->where('image_type_id',50 );
            })->has('stock');
        });

        $collections->with(['images' => function($q) {
            $q->where('image_type_id',3 );
        }])->with(['products' => function($q) {
            $q->where('sale',1 )->with(['images'=>function($q){
                $q->where('image_type_id',50 );
            }])->with('stock');
        }])
            ->where('principal',1)->orderBy('line_up','asc')
            ->get();

        return response()->view('merchant', compact('collections'))->header('Content-Type', 'text/xml');
    }


}








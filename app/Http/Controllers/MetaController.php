<?php

namespace App\Http\Controllers;


use App\Models\Product;
use App\Models\ProductImages;


class MetaController extends Controller
{

    public function product(Product $product){


        if ($product->sale != 1){
           die();
        }

        $count = ProductImages::where('product_id',$product->id)->where('image_type_id',802)->latest('id')->count();

        if ($count > 0 ){
            $image = ProductImages::where('product_id',$product->id)->where('image_type_id',802)->latest('id')->first();

        }else{
            $count = ProductImages::where('product_id',$product->id)->where('image_type_id',50)->latest('id')->count();
            if ($count > 0 ){
                $image = ProductImages::where('product_id',$product->id)->where('image_type_id',50)->latest('id')->first();
            }else{
                echo 'sem imagem';
                die();
            }

        }

        return view('meta_products',compact('product','image'));

    }



}

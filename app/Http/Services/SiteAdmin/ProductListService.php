<?php
/**
 * Created by PhpStorm.
 * User: diogoazevedo
 * Date: 23/11/15
 * Time: 22:30
 */

namespace App\Http\Services\SiteAdmin;
use App\Models\Product;
use Illuminate\Database\Eloquent\Builder;

class ProductListService
{


    public function filter($search,$collection,$category)
    {

        if($collection != null AND $collection !=0){

            $products = Product::where('collection_id',$collection)->with('images','stock','gems','topics')->orderBy('category_id','asc')->orderBy('name','asc')->get();

        }elseif($category != null){

            $products = Product::where('category_id',$category)->with('images','stock','gems','topics')->orderBy('name','desc')->get();

        }else{
            if (empty($search)) {

                $products = Product::with('images','stock','gems', 'topics')->take(10)->get();

            }else{
                $products = Product::ofSearch($search)->get();

            }
        }

        return $products;
    }

    public function filterEloquent($search,$collection,$category,$topic)
    {

        if($collection != null AND $collection !=0){

            $products = Product::whereDoesntHave('topics', function (Builder $query) use($topic) {
                $query->where('topic_id', $topic->id);
            })->where('collection_id',$collection)->with('images','stock','topics')->orderBy('category_id','asc')->orderBy('name','asc')->get();

        }elseif($category != null){

            $products = Product::whereDoesntHave('topics', function (Builder $query) use($topic) {
                $query->where('topic_id', $topic->id);
            })->where('category_id',$category)->with('images','stock','topics')->orderBy('name','desc')->get();

        }else{
            if (empty($search)) {

                $products = Product::whereDoesntHave('topics', function (Builder $query) use($topic) {
                    $query->where('topic_id', $topic->id);
                })->with('images','stock','topics')->take(10)->get();

            }else{
                $products = Product::whereDoesntHave('topics', function (Builder $query) use($topic) {
                    $query->where('topic_id', $topic->id);
                })->ofSearch($search)->get();

            }
        }

        return $products;
    }

}

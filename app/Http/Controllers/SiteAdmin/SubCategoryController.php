<?php

namespace App\Http\Controllers\SiteAdmin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Collection;
use App\Models\Product;
use App\Models\ProductSubCategory;
use App\Models\SubCategories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

class SubCategoryController extends Controller
{



    public function index()
    {
        $subcategories = SubCategories::orderBy('category_id')->get();

        return Inertia::render('SubCategories/Index',[
            'subcategories'=>$subcategories,
        ]);
    }


    public function create()
    {
        return Inertia::render('SubCategories/Create');
    }


    public function store(Request $request)
    {
        $data = $request->all();
        SubCategories::create($data);
        return redirect()->route('subcategory.index')->with('message', 'Operação realizada com sucesso');
    }



    public function edit($id)
    {
        $subcategory = SubCategories::find($id);
        $url = URL::previous();

        return Inertia::render('SubCategories/Edit',[
            'subcategory'=>$subcategory,
            'url'=>$url,
        ]);
    }


    public function update(Request $request,$id)
    {

        $subcategory = SubCategories::find($id);
        $data = $request->all();
        $subcategory->update($data);
        return redirect()->route('subcategory.index')->with('message', 'Operação realizada com sucesso');
    }


    public function destroy($id)
    {
        $subcategory = SubCategories::find($id);
        $subcategory->delete();
        return redirect()->route('subcategory.index')->with('message', 'Operação realizada com sucesso');
    }


    public function show(SubCategories $subcategory)
    {

        $products = $subcategory->products()->with('images')->get();

        return Inertia::render('Gems/Show',[
            'subcategory'       =>$subcategory,
            'products'          =>$products
        ]);
    }




    public function products(Category $category,$collection = null)
    {


        if($collection != null){
            $products = Product::where('category_id',$category->id)
                                ->where('collection_id',$collection)->with('images','stock','subcategories')
                                ->orderBy('collection_id','desc')
                                ->orderBy('name','desc')->get();
        }else{
            $products = Product::where('category_id',$category->id)->with('images','stock','subcategories')
                                ->orderBy('collection_id','desc')
                                ->orderBy('name','desc')->get();
        }

        $categories         = Category::orderBy('name','asc')->get();
        $collections        = Collection::orderBy('name','asc')->get();
        $subcategories      = SubCategories::where('category_id',$category->id)->orderBy('name','asc')->get();


        return Inertia::render('SubCategories/Products',[
            'products'      =>$products,
            'categories'    =>$categories,
            'collections'   =>$collections,
            'category'      =>$category,
            'subcategories' =>$subcategories,
        ]);

    }

    public function add(Product $product, $subCategories)
    {
        $subCategory = SubCategories::find($subCategories);
        $data['product_id']  = $product->id;
        $data['category_id'] = $product->category_id;
        $data['sub_categories_id'] = $subCategory->id;
        ProductSubCategory::create($data);

        return redirect()->back();
    }
    public function remove(Product $product, $subCategories)
    {
        $subCategory = SubCategories::find($subCategories);
        $data = ProductSubCategory::where('sub_categories_id',$subCategory->id)->where('product_id',$product->id)->first();
        $data->delete();
        return redirect()->back();
    }


}



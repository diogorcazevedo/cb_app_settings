<?php

namespace App\Http\Controllers\SiteAdmin;

use App\Http\Controllers\Controller;
use App\Http\Services\SiteAdmin\ProductListService;
use App\Models\Category;
use App\Models\Collection;
use App\Models\Gem;
use App\Models\Product;
use App\Models\ProductGem;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;


class GemController extends Controller
{

    /**
     * @var ProductListService
     */
    private $productListService;

    public function __construct(ProductListService $productListService)

    {
        $this->productListService = $productListService;
    }




    public function index()
    {
        $gems = Gem::orderBy('name')->get();

        return Inertia::render('Gems/Index',[
            'gems'=>$gems,
        ]);
    }


    public function create()
    {
        return Inertia::render('Gems/Create');
    }



    public function store(Request $request)
    {
        $data = $request->all();
        Gem::create($data);
        return redirect()->route('gem.index')->with('message', 'Operação realizada com sucesso');
    }



    public function edit($id)
    {
        $gem = Gem::find($id);
        $url = URL::previous();

        return Inertia::render('Gems/Edit',[
            'gem'=>$gem,
            'url'=>$url,
        ]);
    }


    public function update(Request $request,$id)
    {

        $gem = Gem::find($id);
        $data = $request->all();
        $gem->update($data);
        return redirect()->route('gem.index')->with('message', 'Operação realizada com sucesso');
    }


    public function destroy($id)
    {
        $gem = Gem::find($id);
        $gem->delete();
        return redirect()->route('gem.index')->with('message', 'Operação realizada com sucesso');
    }


    public function show(Gem $gem)
    {

        $products = $gem->products()->with('images')->get();

        return Inertia::render('Gems/Show',[
            'gem'     =>$gem,
            'products'  =>$products
        ]);
    }


    public function products($collection = null,$category = null)
    {

        $products    = $this->productListService->filter(NULL,$collection,$category);
        $categories  = Category::orderBy('name','asc')->get();
        $collections = Collection::orderBy('name','asc')->get();
        $gems        = Gem::orderBy('name','asc')->get();

        return Inertia::render('Gems/Products',[
            'products'   =>$products,
            'categories' =>$categories,
            'collections'=>$collections,
            'gems'       =>$gems,
        ]);
    }

    public function add(Product $product, $gem)
    {
        $gem = Gem::find($gem);
        $data['product_id']  = $product->id;
        $data['gem_id'] = $gem->id;
        ProductGem::create($data);

        return redirect()->back();
    }
    public function remove(Product $product, $gem)
    {
        $gem = Gem::find($gem);
        $data = ProductGem::where('gem_id',$gem->id)->where('product_id',$product->id)->first();
        $data->delete();
        return redirect()->back();
    }


}



<?php

namespace App\Http\Controllers\SiteAdmin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StockCreateRequest;
use App\Http\Services\SiteAdmin\ProductImageService;
use App\Http\Services\SiteAdmin\ProductListService;
use App\Models\Category;
use App\Models\Collection;
use App\Models\ImageType;
use App\Models\Product;
use App\Models\Stock;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProductController extends Controller
{

    /**
     * @var ProductListService
     */
    private $productListService;

    /**
     * @var ProductImageService
     */
    private ProductImageService $productImageService;


    public function __construct(ProductListService $productListService,
                                ProductImageService $productImageService)

    {
        $this->productListService = $productListService;
        $this->productImageService = $productImageService;
    }


    public function index(Request $request,$collection = null,$category = null)
    {

        $search = $request->input('search');
        $products = $this->productListService->filter($search,$collection,$category);
        $categories = Category::orderBy('name','asc')->get();
        $collections = Collection::orderBy('name','asc')->get();

        return Inertia::render('Products/Index',[
            'products'=>$products,
            'search'=>$search,
            'categories'=>$categories,
            'collections'=>$collections,
        ]);
    }


    public function create()
    {
        $url = URL::previous();
        $categories  = Category::orderBy('name')->get();
        $collections = Collection::orderBy('slug')->get();

        return Inertia::render('Products/Create',[
            'categories'=>$categories,
            'collections'=>$collections,
            'url'=>$url,
        ]);
    }



    public function store(Request $request)
    {
        $data = $request->all();
        $data['slug'] = Str::slug($data['name'], "-");
        $data['line_up'] = Product::orderBy('line_up', 'desc')->first()->line_up + 3;
        $product = Product::create($data);
        return redirect()->route('product.index',['collection'=>$product->collection_id,'category'=>null])->with('message', 'Operação realizada com sucesso');
    }



    public function edit($id)
    {
        $product = Product::find($id);
        $url = URL::previous();
        $categories  = Category::orderBy('name')->get();
        $collections = Collection::orderBy('slug')->get();

        return Inertia::render('Products/Edit',[
            'product'=>$product,
            'categories'=>$categories,
            'collections'=>$collections,
            'url'=>$url,
        ]);
    }


    public function publish($id)
    {
        $product = Product::with('topics')->find($id);
        $url = URL::previous();
        $topics  = Topic::orderBy('name')->get();

        return Inertia::render('Products/Publish',[
            'product'=>$product,
            'topics'=>$topics,
            'url'=>$url,
        ]);
    }


    public function update(Request $request,$id)
    {

        $product = Product::find($id);
        $data = $request->all();
        $data['slug'] = Str::slug($data['name'], "-");
        $product->update($data);
        //return redirect()->route('product.index',['collection'=>$product->collection_id,'category'=>null])->with('message', 'Operação realizada com sucesso');
        return redirect()->back()->with('message', 'Operação realizada com sucesso');
    }


    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
        return redirect()->route('product.index',['collection'=>$product->collection_id,'category'=>null])->with('message', 'Operação realizada com sucesso');
    }


    public function add_topic(Topic $topic, Product $product)
    {
        $query = $product->whereHas('topics', function($q) use($topic,$product){
            $q->where('topic_id',$topic->id)->where('product_id',$product->id);
        })->get();

          if (count($query) == 0){
              $topic->products()->attach($product);
              return redirect()->back()->with('message', 'Operação realizada com sucesso');
          }else{
              return redirect()->back()->with('message', 'tópico já adicionado');
          }


    }


    public function remove_topic(Topic $topic, Product $product)
    {
        $topic->products()->detach($product);
        return redirect()->back()->with('message', 'Operação realizada com sucesso');
    }

    public function images($id)
    {
        $product = Product::find($id);
        $types = ImageType::where('sessao_id',4)->get();
        $images = $product->images();
        $images = $images->with('imageType')->get();

        return Inertia::render('Products/Images',[
            'images'=>$images,
            'product'=>$product,
            'types'=>$types,
        ]);

    }

    public function imageStore(Request $request,$id)
    {
        $product = Product::find($id);
        $this->productImageService->imageStore($request,$product);
        return redirect()->back()->with('message', 'Operação realizada com sucesso');
    }

    public function imageDestroy($image)
    {
        $this->productImageService->imageDestroy($image);
        return redirect()->back()->with('message', 'Operação realizada com sucesso');
    }

    public function price_change(Request $request,$id)
    {
        $product = Product::find($id);
        $data = $request->all();
        $product_stock = Stock::where('product_id',$data['product_id'])->first();
        $product_stock->offered_price = $data['offered_price'];
        $product_stock->save();
        return redirect()->back()->with('message', 'Operação realizada com sucesso');
    }

    public function price_store(StockCreateRequest $stockCreateRequest)
    {
        $stockCreateRequest->persist();
        return redirect()->back()->with('message', 'Operação realizada com sucesso');
    }
}



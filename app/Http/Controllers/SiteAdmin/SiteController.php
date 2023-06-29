<?php

namespace App\Http\Controllers\SiteAdmin;

use App\Http\Controllers\Controller;
use App\Http\Services\SiteAdmin\ProductImageService;
use App\Http\Services\SiteAdmin\ProductListService;
use App\Models\Category;
use App\Models\Collection;
use App\Models\Topic;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller
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
        $topics  = Topic::orderBy('name')->get();

        return Inertia::render('Site/Index',[
            'products'=>$products,
            'search'=>$search,
            'categories'=>$categories,
            'collections'=>$collections,
            'topics'=>$topics,
        ]);
    }


}



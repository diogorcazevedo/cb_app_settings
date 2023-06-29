<?php

namespace App\Http\Controllers\SiteAdmin;

use App\Http\Controllers\Controller;
use App\Http\Services\SiteAdmin\ProductListService;
use App\Http\Services\SiteAdmin\TopicImageService;
use App\Models\Category;
use App\Models\Collection;
use App\Models\ImageType;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TopicController extends Controller
{


    /**
     * @var TopicImageService
     */
    private TopicImageService $topicImageService;
    /**
     * @var ProductListService
     */
    private $productListService;


    public function __construct(ProductListService $productListService,TopicImageService $topicImageService)

    {
        $this->productListService = $productListService;
        $this->topicImageService = $topicImageService;
    }


    public function index()
    {
        $topics = Topic::orderBy('name','asc')->get();

        return Inertia::render('Topics/Index',[
            'topics'=>$topics
        ]);

    }



    public function create()
    {
        return Inertia::render('Topics/Create');
    }



    public function store(Request $request)
    {
        $data           = $request->all();
        $data['slug']   = Str::slug($data['name'], "-");
        Topic::create($data);

        return redirect()->route('topic.index')->with('message', 'Operação realizada com sucesso');
    }


    public function show(Topic $topic)
    {

       $products = $topic->products()->with('images')->get();

        return Inertia::render('Topics/Show',[
            'topic'     =>$topic,
            'products'  =>$products
        ]);
    }

    public function products(Request $request,Topic $topic,$collection = null,$category = null)
    {

        $search = $request->input('search');
        $products = $this->productListService->filterEloquent($search,$collection,$category,$topic);
        $categories = Category::orderBy('name','asc')->get();
        $collections = Collection::orderBy('name','asc')->get();

        return Inertia::render('Topics/Products',[
            'topic'         =>$topic,
            'products'      =>$products,
            'search'        =>$search,
            'categories'    =>$categories,
            'collections'   =>$collections,
        ]);

    }


    public function edit(Topic $topic)
    {
        return Inertia::render('Topics/Edit',[
            'topic'=>$topic,
        ]);
    }


    public function update(Request $request,Topic $topic)
    {
        $data = $request->all();
        $data['slug'] = Str::slug($data['name'], "-");
        $topic->update($data);
        return redirect()->route('topic.index')->with('message', 'Operação realizada com sucesso');
    }


    public function destroy(Topic $topic)
    {
        $topic->delete();
        return redirect()->route('product.index')->with('message', 'Operação realizada com sucesso');
    }


    public function publish(Topic $topic)
    {
       if ($topic->publish == 0){
           $topic->publish = 1;
       }else{
           $topic->publish = 0;
       }
        $topic->save();
       return redirect()->back();
    }



    public function images(Topic $topic)
    {

        $types  = ImageType::where('sessao_id',30)->get();
        $images = $topic->images();
        $images = $images->with('imageType')->get();

        return Inertia::render('Topics/Images',[
            'images'=>$images,
            'topic'=>$topic,
            'types'=>$types,
        ]);

    }

    public function imageStore(Request $request,Topic $topic)
    {
        $this->topicImageService->imageStore($request,$topic);
        return redirect()->back()->with('message', 'Operação realizada com sucesso');
    }

    public function imageDestroy($image)
    {
        $this->topicImageService->imageDestroy($image);
        return redirect()->back()->with('message', 'Operação realizada com sucesso');
    }


}



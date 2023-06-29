<?php

namespace App\Http\Controllers\SiteAdmin;


use App\Http\Controllers\Controller;
use App\Http\Services\SiteAdmin\CollectionImageService;
use App\Models\Collection;
use App\Models\CollectionImages;
use App\Models\ImageType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CollectionController extends Controller
{


    private CollectionImageService $collectionImageService;


    public function __construct(CollectionImageService $collectionImageService)

    {
        $this->collectionImageService = $collectionImageService;
    }


    public function index()
    {
        $collections = Collection::orderBy('name','asc')->with('images')->get();

        return Inertia::render('Collections/Index',[
            'collections'=>$collections,
        ]);
    }


    public function create()
    {
        $collections = Collection::orderBy('slug')->get();

        return Inertia::render('Collections/Create',[
            'collections'=>$collections,
        ]);
    }



    public function store(Request $request)
    {
        $data = $request->all();
        $data['slug'] = Str::slug($data['name'], "-");
        $data['line_up'] = Collection::orderBy('line_up', 'desc')->first()->line_up + 3;
        Collection::create($data);
        return redirect()->route('collection.index')->with('message', 'Operação realizada com sucesso');
    }



    public function edit($id)
    {
        $collection = Collection::find($id);
        return Inertia::render('Collections/Edit',[
            'collection'=>$collection,
        ]);
    }


    public function update(Request $request,$id)
    {

        $collection = Collection::find($id);
        $data = $request->all();
        $data['slug'] = Str::slug($data['name'], "-");
        $collection->update($data);
        return redirect()->back()->with('message', 'Operação realizada com sucesso');
    }


    public function destroy($id)
    {
        $collection = Collection::find($id);
        $collection->delete();
        return redirect()->route('collection.index')->with('message', 'Operação realizada com sucesso');
    }



    public function images($id)
    {
        $collection = Collection::find($id);
        $types = ImageType::where('sessao_id',4)->get();
        $images = $collection->images();
        $images = $images->with('imageType')->get();

        return Inertia::render('Collections/Images',[
            'images'=>$images,
            'collection'=>$collection,
            'types'=>$types,
        ]);

    }

    public function imageStore(Request $request,$id)
    {
        $collection = Collection::find($id);
        $this->collectionImageService->imageStore($request,$collection);
        return redirect()->back()->with('message', 'Operação realizada com sucesso');
    }

    public function imageDestroy($image)
    {
        $this->collectionImageService->imageDestroy($image);
        return redirect()->back()->with('message', 'Operação realizada com sucesso');
    }

    public function download($id)
    {


       // $url= "https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/".$image->path;

        $image = CollectionImages::find($id);
        $assetPath = Storage::disk('s3')->url($image->path);

        header("Cache-Control: public");
        header("Content-Description: File Transfer");
        header("Content-Disposition: attachment; filename=" . basename($assetPath));
        header("Content-Type: " . $image->mime);

        return readfile($assetPath);

    }


}



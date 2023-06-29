<?php

namespace App\Http\Services\SiteAdmin;

use App\Models\CollectionImages;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class CollectionImageService
{

        public function imageStore($request,$product){

            $file = $request->file('image');
            $extension =  $file->getClientOriginalExtension();

            $data = $request->all();
            $data['collection_id'] = $product->id;
            $data['extension'] = $extension;
            $data['system'] = 2;
            $image = CollectionImages::create($data);


            Storage::disk('s3')->put("collections/".$image->id.'.'.$extension,file_get_contents($file));
            Storage::disk('images')->put($image->id . '.' . $image->extension, File::get($file));

            $img = CollectionImages::find($image->id);
            $img->path = "collections/".$img->id.'.'.$extension;
            $img->extension = $extension;
            $img->publish = '0';
            $img->save();
        }


    public function imageDestroy($image)
    {
        $image = CollectionImages::find($image);

        if(Storage::disk('public')->exists('/images/'.$image->id.'.'.$image->extension)) {
            Storage::disk('public')->delete('/images/'.$image->id.'.'.$image->extension);
        }
        if ($image->path != null){
            if(Storage::disk('s3')->exists($image->path)) {
                Storage::disk('s3')->delete($image->path);
            }
        }
        $image->delete();

    }

}

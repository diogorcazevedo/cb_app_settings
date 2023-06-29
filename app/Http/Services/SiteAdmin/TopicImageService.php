<?php

namespace App\Http\Services\SiteAdmin;


use App\Models\TopicImages;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class TopicImageService
{



    public function __construct(UserRepository $userRepository)
    {


    }

        public function imageStore($request,$topic){

            $data = $request->all();
            $data['topic_id'] = $topic->id;
            $data['system'] = 2;
            $image = TopicImages::create($data);

            $file = $request->file('img');
            $extension =  $file->getClientOriginalExtension();
            Storage::disk('s3')->put("topics/".$image->id.'.'.$extension,file_get_contents($file));
           // Storage::disk('images')->put($image->id . '.' . $image->extension, File::get($file));

            $img = TopicImages::find($image->id);
            $img->path = "topics/".$img->id.'.'.$extension;
            $img->extension = $extension;
            $img->publish = '0';
            $img->save();
        }

    public function imageDestroy($image)
    {
        $image = TopicImages::find($image);

        if ($image->path != null){
            if(Storage::disk('s3')->exists($image->path)) {
                Storage::disk('s3')->delete($image->path);
            }
        }
        $image->delete();

    }

}

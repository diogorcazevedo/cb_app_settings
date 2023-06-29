<?php

namespace App\Http\Controllers\SiteAdmin;


use App\Models\Image;
use App\Repositories\ImageRepository;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;


class ImageController extends Controller
{


    /**
     * @var Image
     */
    private $image;
    /**
     * @var ImageRepository
     */
    private $imageRepository;

    public function __construct(Image $image, ImageRepository $imageRepository)

    {

        $this->image = $image;
        $this->imageRepository = $imageRepository;
    }


    public function destroy($id)
    {
        $this->imageRepository->destroy($id);
        return redirect()->back()->with('message', 'Operação realizada com sucesso');
    }

/*
    public function download($id)
    {

        $image = $this->image->find($id);

        $file= public_path(). "/storage/images/".$image->id.'.'.$image->extension;
        $headers = array(
            'Content-Type: application/'.$image->extension,
        );

        if($image->extension == 'webp'){

            return Response::download($file, $image->id.'.'.'png', $headers);

        }else{
            return Response::download($file, $image->id.'.'.$image->extension, $headers);
        }


    }
*/

    public function download($id)
    {

        $image = $this->image->find($id);
        dd($image->path);

        if ($image->path == NULL){

            $file= public_path(). "/storage/images/".$image->id.'.'.$image->extension;
            $headers = array(
                'Content-Type: application/'.$image->extension,
            );

            if($image->extension == 'webp'){

                return Response::download($file, $image->id.'.'.'png', $headers);

            }else{
                return Response::download($file, $image->id.'.'.$image->extension, $headers);
            }

        }else{

            return redirect(Storage::disk('s3')->temporaryUrl(
                $image->path,
                now()->addHour(),
                ['ResponseContentDisposition' => 'attachment']
            ));

        }


    }

}








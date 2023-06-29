<?php


namespace App\Http\Requests;





use App\Entities\Image;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class ImagesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */



    public function rules()
    {

        return [

             'image_type_id'      =>'required',

        ];

    }

    public function store()
    {
        $file           = $this->file('image');
        $image_type_id  = $this->input('image_type_id');
        $publish        = $this->input('publish');
        $extension      = $file->getClientOriginalExtension();

        $img = Image::create([
            'extension' =>  "webp",
            'publish' => $publish,
            'image_type_id' => $image_type_id,
        ]);


            $file = $this->file('image');
            $image = imagecreatefromstring(file_get_contents($file));
            ob_start();
            imagejpeg($image,NULL,100);
            $cont = ob_get_contents();
            ob_end_clean();
            imagedestroy($image);
            $content = imagecreatefromstring($cont);
            Storage::disk('images')->put($img->id . '.' . $img->extension, File::get($file));
            //$output = Storage::disk('images')->put($img->id . '.' . $img->extension, File::get($file));
            // imagewebp($content,$output);
            imagedestroy($content);

            return $img;

    }


    /*
        public function store()
        {
            $file           = $this->file('image');
            $image_type_id  = $this->input('image_type_id');
            $publish        = $this->input('publish');
            $extension      = $file->getClientOriginalExtension();

            $img = Image::create([
                'extension' => ($image_type_id != 5) ? $extension : "webp",
                'publish' => $publish,
                'image_type_id' => $image_type_id,
            ]);

            if ($image_type_id == 5){


                $file = $this->file('image');
                $image = imagecreatefromstring(file_get_contents($file));
                ob_start();
                imagejpeg($image,NULL,100);
                $cont = ob_get_contents();
                ob_end_clean();
                imagedestroy($image);
                $content = imagecreatefromstring($cont);
                Storage::disk('images')->put($img->id . '.' . $img->extension, File::get($file));
                //$output = Storage::disk('images')->put($img->id . '.' . $img->extension, File::get($file));
               // imagewebp($content,$output);
                imagedestroy($content);

                return $img;

            }else {

                Storage::disk('images')->put($img->id . '.' . $img->extension, File::get($file));
                return $img;
            }

        }

        */
}

<?php

namespace App\Http\Controllers;



use App\Http\Services\UserService;
use App\Models\Order;
use App\Models\State;
use App\Models\User;
use App\Models\City;
use App\Repositories\UserRepository;
use App\Rules\ValidCPF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;


class UserController extends Controller
{

    /**
     * @var UserService
     */
    private $userService;


    public function __construct(UserService $userService)

    {
        $this->userService = $userService;

    }

    public function index(Request $request)
    {
        $search = $request->input('search');
        $users = $this->userService->filter($search);

        return Inertia::render('Users/Index',[
            'users'=>$users,
            'search'=>$search,
        ]);
    }


    public function create()
    {
        $url = URL::previous();
        $states = State::all();
        return Inertia::render('Users/Create',[
            'states'=>$states,
            'url'=>$url,
        ]);
    }

    public function store(Request $request,UserRepository $userRepository){

        $data = $request->all();

        if (City::where('name',$data['city'])->where('state_id',$data['state_id'])->count() < 1 ){
            Session::flash('error', 'Escolher Cidade e Estado válido para Entrega ');
            return redirect()->back();
        }else{
            $city = City::where('name',$data['city'])->where('state_id',$data['state_id'])->first();
        }

        $request->validate([
            'name'                              => 'required|max:255',
            'email'                             => [ 'required',
                'email',
                'unique:users',
            ],
            'cel'                               => 'required',
            'zipcode'                           => 'required',
            'number'                            => 'required',
            'cpf'                               => [  'required',
                                                        'unique:users',
                                                        'size:14',
                                                        New ValidCPF()
                                                    ],
        ]);

        $data['city_id']    = $city->id;
        $data['cel']        = limpa_cel($data['cel']);
        $userRepository->store($data);
      //  return redirect()->back()->with('message', 'Operação realizada com sucesso');
        return redirect()->away($request->input("url"))->with('message', 'Operação realizada com sucesso');
    }



    public function edit(User $user)
    {
        $states = State::all();
        $city =City::find($user->city_id);

        return Inertia::render('Users/Edit',[
            'city'=>$city,
            'user'=>$user,
            'states'=>$states,
        ]);
    }


    public function update(Request $request, User $user)
    {
        $data = $request->all();

        if (City::where('name',$data['city'])->where('state_id',$data['state_id'])->count() < 1 ){
            Session::flash('error', 'Escolher Cidade e Estado válido para Entrega ');
            return redirect()->back();
        }else{
            $city = City::where('name',$data['city'])->where('state_id',$data['state_id'])->first();
        }
        $data['city_id']    = $city->id;
        $data['cel']        = limpa_cel($data['cel']);

        $user->update($data);
        return redirect()->back()->with('message', 'Operação realizada com sucesso');
    }

    public function password(User $user)
    {
        return Inertia::render('Users/Password',[
            'user'=>$user
        ]);
    }

    public function update_password(Request $request, User $user)
    {
        $data = $request->all();
        $user->password = Hash::make($data['password']);
        return redirect()->back()->with('message', 'Operação realizada com sucesso');
    }

    public function birthdays()
    {
        $mes = date('m');

        $users =  User::where('mes_aniversario',$mes)
                        ->orWhere('mes_aniversario',$mes+1)
                        ->orderBy('mes_aniversario')
                        ->orderBy('aniversario')
                        ->with(['orders'=>function($q){
                        $q->with(['items'=>function($q){
                            $q->with(['product'=>function($q){
                                $q->with('images');
                                }]);
                            }]);
                        }])->get();


        return Inertia::render('Users/Birthdays',[
            'users'=>$users,
        ]);
    }

}

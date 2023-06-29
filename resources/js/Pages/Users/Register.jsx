import React, { useEffect } from 'react';
import Store from '@/Layouts/Store';
import Input from '@/Components/Default/Input';
import Label from '@/Components/Default/Label';
import ValidationErrors from '@/Components/Default/ValidationErrors';
import {Head, Link, useForm, usePage} from '@inertiajs/react';
import InputMask from 'react-input-mask';
import axios from 'axios';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        cpf: '',
        cel: '',
        zipcode: '',
        address: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('user.store'));
    };

    const searchCep = (setData,e) =>{

        const cep = e.target.value;

        const url_cep = 'https://viacep.com.br/ws/'+ cep + '/json/';
        axios.defaults.headers.common = null
        axios.get(url_cep).then(function (response) {

            const dt = {
                name:document.getElementById("name").value,
                email:document.getElementById("email").value,
                cpf:document.getElementById("cpf").value,
                cel:document.getElementById("cel").value,
                zipcode:e.target.value,
                address:response.data.address,
                neighborhood:response.data.neighborhood,
                city:response.data.city,
                state:response.data.state
            };


            setData(dt);

        }.bind(this)).catch(function (error) {
            console.log(error);
            // this.limpa_formulario_cep();
            alert("Formato de CEP inválido.");
        });
    };

    const {auth} = usePage().props


    return (
        <Store user={auth.user}>
            <Head title="Register" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto mt-36 mb-24">
                    <h3 className="p-8 rounded shadow text-xl font-extrabold tracking-tight text-gray-900 mb-16">Dados cadastro e Entrega</h3>
                    <ValidationErrors errors={errors} />
                    <form onSubmit={submit}>
                    <div>
                        <Label forInput="name" value="Name" />

                        <Input
                            handleChange={onHandleChange}
                            type="text"
                            name="name"
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="email" value="Email" />

                        <Input
                            handleChange={onHandleChange}
                            type="email"
                            name="email"
                            className="mt-1 block w-full"
                            autoComplete="username"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="cpf" value="CPF" />

                        <Input
                            type="text"
                            name="cpf"
                            className="mt-1 block w-full"
                            autoComplete="cpf"
                            value={data.cpf}
                            onChange={e => setData('cpf', e.target.value)}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="cel" value="Cel" />

                        <Input
                            type="text"
                            name="cel"
                            className="mt-1 block w-full"
                            autoComplete="cel"
                            value={data.cel}
                            onChange={e => setData('cel', e.target.value)}
                            required
                        />
                    </div>


                    <div className="mt-4">
                        <Label forInput="cep" value="CEP" />

                        <InputMask
                            type="text"
                            id="zipcode"
                            mask="99999999"
                            // onBlur={searchCep}
                            onBlur={(e) => searchCep(setData, e)}
                            name="zipcode"
                            autoComplete="zipcode"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        ></InputMask>
                    </div>


                    <div className="mt-4">
                        <Label forInput="address" value="address" />

                        <input
                            type="text"
                            name="address"
                            id="address"
                            value={data.address}
                            onChange={e => setData('address', e.target.value)}
                            autoComplete="address"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="number" value="number" />

                        <input
                            type="text"
                            name="number"
                            id="number"
                            value={data.number}
                            onChange={e => setData('number', e.target.value)}
                            autoComplete="number"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        />
                    </div>


                    <div className="mt-4">
                        <Label forInput="complement" value="complement" />

                        <input
                            type="text"
                            id="complement"
                            name="complement"
                            value={data.complement}
                            onChange={e => setData('complement', e.target.value)}
                            autoComplete="complement"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="neighborhood" value="neighborhood" />

                        <input
                            type="text"
                            id="neighborhood"
                            name="neighborhood"
                            value={data.neighborhood}
                            onChange={e => setData('neighborhood', e.target.value)}
                            autoComplete="neighborhood"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="city" value="city" />

                        <input
                            required
                            type="text"
                            id="city"
                            value={data.city}
                            onChange={e => setData('city', e.target.value)}
                            name="city"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                    </div>

                    <div className="mt-4">
                        <Label forInput="neighborhood" value="neighborhood" />

                        <InputMask
                            required
                            type="text"
                            id="state"
                            mask="aa"
                            value={data.state}
                            onChange={e => setData('state', e.target.value)}
                            name="state"
                            className="uppercase block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        ></InputMask>
                    </div>

                    <div className="mt-4">
                        <Label forInput="password" value="Password" />

                        <Input
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="password_confirmation" value="Confirm Password" />

                        <Input
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                            Possui registro?
                        </Link>

                     
                    </div>
                </form>
                </div>
            </div>
        </Store>
    );
}

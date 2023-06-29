import React from 'react';
import {useForm, usePage} from "@inertiajs/react";
import InputMask from "react-input-mask";
import {SparklesIcon} from "@heroicons/react/24/outline";


export default function CheckoutFormCard({order,operadora }) {


    const { errors } = usePage().props;

    const { data, setData, post, processing} = useForm({
        number: '',
        expiry: '',
        cvv: '',
        name: '',
        operadora: operadora.id,
        bandeira: '',
        parcelas: '',


    })

    function submit(e) {
        e.preventDefault()
        e.currentTarget.disabled = true;
        post(route('checkout.submit',{order:order.id}))
    }

    return (
        <>
            <section aria-labelledby="payment-and-shipping-heading" className=" lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1">
               <div className="flex flex-row">
                    <div className="basis-1/4">
                       <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                          <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                    </div>
                    <div className="basis-3/4">
                        <p className="text-3xl font-extrabold tracking-tight text-gray-900">Dados pagamento</p>

                    </div>
                </div>
               <div className="mt-10">
                        <form onSubmit={submit}>
                            <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
                                <div className="col-span-3 sm:col-span-4">
                                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                        Nome idêntico ao cartão
                                    </label>
                                    <div className="mt-1">
                                        {errors.name && <div className="text-red-600">{errors.name}</div>}
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            onChange={e => setData('name', e.target.value)}
                                            value={data.name}
                                            className="block w-full border-gray-300  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-3 sm:col-span-4">
                                    <label htmlFor="cc-name" className="block text-sm font-medium text-gray-700">
                                        Selecionar Bandeira do Cartão
                                    </label>
                                    {errors.bandeira && <div className="text-red-600">{errors.bandeira}</div>}
                                    <div className="mt-1">
                                        <select
                                            onChange={e => setData('bandeira', e.target.value)}
                                            value={data.bandeira}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            required>
                                            <option  value="" ></option>
                                            <option  value="visa">visa</option>
                                            <option  value="mastercard">mastercard</option>
                                            <option  value="amex">amex</option>
                                            <option  value="elo">elo</option>
                                            <option  value="banescard">banescard</option>
                                            <option  value="diners">diners</option>
                                            <option  value="hipercard">hipercard</option>
                                            <option  value="discover">discover</option>
                                            <option  value="aura">aura</option>
                                            <option  value="jcb">jcb</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-3 sm:col-span-4">
                                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                        Número do cartão
                                    </label>
                                    <div className="mt-1">
                                        {errors.number && <div className="text-red-600">{errors.number}</div>}
                                        <InputMask
                                            required
                                            type="text"
                                            id="number"
                                            name="number"
                                            mask="9999.9999.9999.9999"
                                            value={data.number}
                                            onChange={e => setData('number', e.target.value)}
                                            autoComplete="number"
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        ></InputMask>
                                    </div>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                                        Data de validade
                                    </label>
                                    <div className="mt-1">
                                        {errors.expiry && <div className="text-red-600">{errors.expiry}</div>}
                                        <InputMask
                                            required
                                            type="text"
                                            id="expiry"
                                            name="expiry"
                                            mask="99/99"
                                            value={data.expiry}
                                            onChange={e => setData('expiry', e.target.value)}
                                            autoComplete="expiry"
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        ></InputMask>
                                    </div>
                                </div>
                                <div  className="col-span-2 sm:col-span-1">
                                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                        CVV ou CVC
                                    </label>
                                    <div className="mt-1">
                                        {errors.cvv && <div className="text-red-600">{errors.cvv}</div>}
                                        <input
                                            required
                                            type="text"
                                            name="cvv"
                                            onChange={e => setData('cvv', e.target.value)}
                                            value={data.cvv}
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-2 sm:col-span-2">
                                    <label htmlFor="cc-name" className="block text-sm font-medium text-gray-700">
                                        Selecionar quantidade de parcelas
                                    </label>
                                    {errors.parcelas && <div className="text-red-600">{errors.parcelas}</div>}
                                    <div className="mt-1">
                                        <select
                                            name="parcelas"
                                            onChange={e => setData('parcelas', e.target.value)}
                                            value={data.parcelas}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            required>
                                            <option  value="" ></option>
                                            <option  value="1">1x</option>
                                            <option  value="2">2x</option>
                                            <option  value="3">3x</option>
                                            <option  value="4">4x</option>
                                            <option  value="5">5x</option>
                                            <option  value="6">6x</option>
                                            <option  value="7">7x</option>
                                            <option  value="8">8x</option>
                                            <option  value="9">9x</option>
                                            <option  value="10">10x</option>
                                            <option  value="11">11x</option>
                                            <option  value="12">12x</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-2 sm:col-span-3">
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <button
                                        type="submit"
                                        className="bg-teal-600 mt-6 w-full border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-teal-500"
                                        disabled={processing}>
                                        enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                <div className=" shadow-sm flex items-center justify-between border-t border-white border-opacity-90 text-gray-700 py-6 mb-6">
                    <dt className="text-3xl font-extrabold tracking-tight text-gray-900">Total: </dt>
                    <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                        { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.total) }
                    </dd>
                </div>
            </section>
        </>
    );
}

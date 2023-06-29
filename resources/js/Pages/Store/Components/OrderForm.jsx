import InputMask from "react-input-mask";
import {useForm} from "@inertiajs/react";
import {SparklesIcon} from "@heroicons/react/24/outline";


export default function OrderForm({ states }) {
    const { data, setData, post, processing, errors} = useForm({
        name: '',
        receiver: '',
        email: '',
        cpf: '',
        cel: '',
        address: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state_id: '',

    })

    function submit(e) {
        e.preventDefault()
        post(route('checkout.order'))
    }


    return (
        <>

            <div className="flex flex-row">
                <div className="basis-1/4">
                       <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                          <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                </div>
                <div className="basis-3/4">
                    <p className="text-3xl font-extrabold tracking-tight text-gray-900">Dados para entrega e nota</p>
                    <p className="mt-2 text-gray-500">
                        Endereço para entrega das suas joias e nota fiscal
                    </p>
                </div>
            </div>
            <form onSubmit={submit}>
                <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
                    <div className="mt-4">
                        <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
                            <div className="col-span-3 sm:col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Nome:
                                </label>
                                {errors.name && <div>{errors.name}</div>}
                                <div className="mt-1">
                                    <input
                                        required
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        name="name"
                                        autoComplete="name"
                                        className="uppercase block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-3 sm:col-span-4">
                                <label htmlFor="cel" className="block text-sm font-medium text-gray-700">
                                    Telefone:
                                </label>
                                {errors.cel && <div>{errors.cel}</div>}
                                <div className="mt-1">
                                    <input
                                        required
                                        type="text"
                                        id="cel"
                                        name="cel"
                                        value={data.cel}
                                        onChange={e => setData('cel', e.target.value)}
                                        autoComplete="cel"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-3 sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email:
                                </label>
                                {errors.email && <div>{errors.email}</div>}
                                <div className="mt-1">
                                    <input
                                        required
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        autoComplete="email"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-3 sm:col-span-4">
                                <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
                                    CPF:
                                </label>
                                {errors.cpf && <div>{errors.cpf}</div>}
                                <div className="mt-1">
                                    <InputMask
                                        required
                                        type="text"
                                        id="cpf"
                                        name="cpf"
                                        mask="999.999.999.99"
                                        value={data.cpf}
                                        onChange={e => setData('cpf', e.target.value)}
                                        autoComplete="cpf"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    ></InputMask>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                            <div className="col-span-3 sm:col-span-3">
                                <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
                                    CEP:
                                </label>
                                <div className="mt-1">
                                    <InputMask
                                        required
                                        type="text"
                                        id="zipcode"
                                        mask="99999999"
                                        value={data.zipcode}
                                        onChange={e => setData('zipcode', e.target.value)}
                                        name="zipcode"
                                        autoComplete="zipcode"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    ></InputMask>
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                                    Endereço:
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        type="text"
                                        name="address"
                                        id="address"
                                        value={data.address}
                                        onChange={e => setData('address', e.target.value)}
                                        autoComplete="address"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 sm:col-span-1">
                                <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                                    Número:
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="number"
                                        id="number"
                                        value={data.number}
                                        onChange={e => setData('number', e.target.value)}
                                        autoComplete="number"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-span-2">
                                <label htmlFor="complement" className="block text-sm font-medium text-gray-700">
                                    Complemento:
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="complement"
                                        name="complement"
                                        value={data.complement}
                                        onChange={e => setData('complement', e.target.value)}
                                        autoComplete="complement"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 sm:col-span-1">
                                <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700">
                                    Bairro:
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        type="text"
                                        id="neighborhood"
                                        name="neighborhood"
                                        value={data.neighborhood}
                                        onChange={e => setData('neighborhood', e.target.value)}
                                        autoComplete="neighborhood"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Cidade:</label>
                                <div className="mt-1">
                                    <input
                                        required
                                        type="text"
                                        id="city"
                                        value={data.city}
                                        onChange={e => setData('city', e.target.value)}
                                        name="city"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                            <div className="col-span-1 sm:col-span-1">
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">Estado:</label>
                                <div className="mt-1">
                                    <select
                                        name="state_id"
                                        required="required"
                                        id="state_id"
                                        onChange={e => setData('state_id', e.target.value)}
                                        value={data.state_id}
                                        className="max-w-lg block focus:ring-teal-500 focus:border-teal-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                    >
                                        {states.map((state, index) => {
                                            return (
                                                <option key={index} value={state.id}>
                                                    {state.uf}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    {errors.state_id && <div className="text-red-600">{errors.state_id}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 flex justify-end pt-6 border-t border-gray-200">
                        <button
                            type="submit"
                            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                            disabled={processing}>
                            Salvar
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

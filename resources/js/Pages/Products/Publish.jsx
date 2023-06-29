import React from 'react';
import Auth from '@/Layouts/Auth';
import {Head, useForm,usePage} from '@inertiajs/react'
import PublicTopics from "@/Pages/Products/Components/PublicTopics";

export default function Publish( {product,topics}) {

    const { data, setData, post, processing, errors} = useForm({
        name: product.name,
        sale: product.sale,
        publish: product.publish,
        line_up: product.line_up,

    })

    function submit(e) {
        e.preventDefault()
        post(route("product.update",{id:product.id}));

    }

    const {auth} = usePage().props

    return (
            <>
                <Head title="Products" />
                <Auth auth={auth} errors={errors} >
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="flex flex-row">
                                <div className="basis-1/2">
                                    <h3 className="text-lg ">Editar:{product.name} </h3>
                                </div>
                                <div className="basis-1/2">
                                    <img className="w-20 h-20  flex-shrink-0"
                                         src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+product.images[0]?.path}/>
                                </div>
                            </div>
                            <form className="space-y-8 divide-y divide-gray-200 mt-4" onSubmit={submit}>
                                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                                    <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                                        <div className="space-y-6 sm:space-y-5">
                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Disponível para venda
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                    <div className="mt-1">
                                                        <select
                                                            name="sale"
                                                            id="sale"
                                                            onChange={e => setData('sale', e.target.value)}
                                                            value={data.sale}
                                                            className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        >
                                                            <option>Venda</option>
                                                            <option  value="0">NÃO</option>
                                                            <option  value="1">SIM</option>
                                                        </select>
                                                        {errors.sale && <div className="text-red-600">{errors.sale}</div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Disponível para exposição
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                    <div className="mt-1">
                                                        <select
                                                            name="publish"
                                                            id="publish"
                                                            onChange={e => setData('publish', e.target.value)}
                                                            value={data.publish}
                                                            className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        >
                                                            <option>Exposição</option>
                                                            <option  value="0">NÃO</option>
                                                            <option  value="1">SIM</option>
                                                        </select>
                                                        {errors.publish && <div className="text-red-600">{errors.publish}</div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="line_up" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Line up
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                    <div className="mt-1">
                                                        <input
                                                            type="text"
                                                            value={data.line_up}
                                                            onChange={e => setData('line_up', e.target.value)}
                                                            className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
                                                        {errors.line_up && <div className="text-red-600">{errors.line_up}</div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-5">
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                            disabled={processing}>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <br/>
                            <PublicTopics product={product} topics={topics}/>
                        </div>
                    </div>
                </Auth>
            </>

    )
}


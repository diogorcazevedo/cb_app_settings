import React from 'react';
import Auth from '@/Layouts/Auth';
import {Head, Link, usePage} from "@inertiajs/react";

export default function Index({topic, products}) {

    const {auth} = usePage().props
    const { errors } = usePage().props

    return (
        <>
            <Head title="Topics" />
            <Auth auth={auth} errors={errors} >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-row mt-8">
                        <div className="basis-1/2">
                            <h3>{topic.name}</h3>
                        </div>
                        <div className="basis-1/2">
                            <Link href={route('topic.products',{topic:topic.slug})} className="inline-block w-full items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                NOVOS PRODUTOS
                            </Link>
                        </div>
                    </div>

                    <table className="border mt-6 min-w-full divide-y divide-x divide-gray-200">
                        <thead className="bg-gray-50 divide-y divide-x divide-gray-200">
                        <tr className="divide-x divide-y divide-gray-200">
                            <th  className="text-gray-900 p-2 py-6">Id</th>
                            <th  className="text-gray-900 p-2 py-6">Name</th>
                            <th  className="text-gray-900 p-2 py-6">Action</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-x divide-gray-200 bg-white">
                        {products.map((product) => (
                            <tr key={product.id} className="divide-x divide-y divide-gray-200">
                                <td className="text-sm p-2 text-center">
                                    <img className="w-14 h-14  flex-shrink-0"
                                         src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+product.images[0]?.path}/>
                                </td>
                                <td className="text-sm p-2 text-center ">
                                     {product.name}
                                </td>
                                <td className="text-sm p-2 text-center ">
                                    <Link href={route('product.remove_topic',{topic:topic.slug,product:product.slug})}
                                          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                        remover
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </Auth>
        </>
    );
}

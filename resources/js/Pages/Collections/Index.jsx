import React from 'react';
import Auth from '@/Layouts/Auth';
import {Head, usePage,Link} from "@inertiajs/react";

export default function Index({collections}) {

    const {auth} = usePage().props
    const { errors } = usePage().props

    return (
        <>
            <Head title="Collections" />
            <Auth auth={auth} errors={errors} >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <table className="border mt-8 min-w-full divide-y divide-x divide-gray-200">
                        <thead className="bg-gray-50 divide-y divide-x divide-gray-200">
                        <tr className="divide-x divide-y divide-gray-200">
                            <th width="50%"  className="text-gray-900 p-2 py-6">Img</th>
                            <th  className="text-gray-900 p-2 py-6">Name</th>
                            <th  className="text-gray-900 p-2 py-6">
                                <Link href={route('collection.create')} className="inline-block w-full items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                    NOVO
                                </Link>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-x divide-gray-200 bg-white">
                        {collections.map((collection) => (
                            <tr key={collection.id} className="divide-x divide-y divide-gray-200">
                                <td className="p-2">
                                    <Link href={route('collection.images.index',{id:collection.id})} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                        <img className="w-3/4 flex-shrink-0"
                                             src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+collection.images[0]?.path}/>
                                    </Link>
                                </td>
                                <td className="text-3xl p-2">
                                    <Link href={route('collection.edit',{id:collection.id})} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                        {collection.name}
                                    </Link>
                                </td>
                                <td className="text-center items-center justify-center p-2">
                                    <Link href={route('collection.edit',{id:collection.id})} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                        editar
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

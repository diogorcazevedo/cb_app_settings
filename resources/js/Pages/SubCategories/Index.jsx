import React from 'react';
import Auth from '@/Layouts/Auth';
import {Head, Link, usePage} from "@inertiajs/react";


export default function Index({subcategories}) {

    const {auth} = usePage().props
    const { errors } = usePage().props

    return (
        <>
            <Head title="Subcategories" />
            <Auth auth={auth} errors={errors} >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <table className="border mt-8 min-w-full divide-y divide-x divide-gray-200">
                        <thead className="bg-gray-50 divide-y divide-x divide-gray-200">
                        <tr className="divide-x divide-y divide-gray-200">
                            <th  className="text-gray-900 p-2 py-6">ID</th>
                            <th  className="text-gray-900 p-2 py-6">CATEGORY ID</th>
                            <th  className="text-gray-900 p-2 py-6">NOME</th>
                            <th  colSpan="3" className="text-gray-900 p-2 py-6">
                                <Link href={route('subcategory.create')} className="inline-block w-full items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                    NOVO
                                </Link>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-x divide-gray-200 bg-white">
                        {subcategories.map((subcategory) => (
                            <tr key={subcategory.id} className="divide-x divide-y divide-gray-200">
                                <td className="text-sm p-2">
                                    <Link href={route('subcategory.edit',{subcategory:subcategory.id})} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                        {subcategory.id}
                                    </Link>
                                </td>
                                <td className="text-sm p-2">
                                    {subcategory.category_id}
                                </td>
                                <td className="text-sm p-2">

                                    <Link href={route('subcategory.edit',{subcategory:subcategory.id})} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                        {subcategory.name}
                                    </Link>
                                </td>
                                <td className="text-sm text-center items-center justify-center p-2">
                                    <Link href={route('subcategory.edit',{subcategory:subcategory.id})} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                        editar
                                    </Link>
                                </td>

                                <td className="text-sm p-2 text-center">
                                    <Link href="#" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                        Imagens
                                    </Link>
                                </td>
                                <td className="text-sm p-2 text-center">
                                    <Link href={route('subcategory.show',{subcategory:subcategory.id})} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                        show
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

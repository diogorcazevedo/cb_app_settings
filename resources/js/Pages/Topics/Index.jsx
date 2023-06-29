import React from 'react';
import Auth from '@/Layouts/Auth';
import {Head, Link, usePage} from "@inertiajs/react";

export default function Index({topics}) {

    const {auth} = usePage().props
    const { errors } = usePage().props
    function status(publish){
      if (publish== 1){
          return <p>SIM</p>
      }else{
          return <p>NÃO</p>
      }
    }
    return (
        <>
            <Head title="Topics" />
            <Auth auth={auth} errors={errors} >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <table className="border mt-8 min-w-full divide-y divide-x divide-gray-200">
                        <thead className="bg-gray-50 divide-y divide-x divide-gray-200">
                        <tr className="divide-x divide-y divide-gray-200">
                            <th  className="text-gray-900 p-2 py-6">PUBLICADO</th>
                            <th  className="text-gray-900 p-2 py-6">TÓPICO</th>
                            <th  colSpan= "3" className="text-gray-900 p-2 py-6">
                                <Link href={route('topic.create')} className="inline-block w-full items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                    NOVO
                                </Link>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-x divide-gray-200 bg-white">
                        {topics.map((topic) => (
                            <tr key={topic.id} className="divide-x divide-y divide-gray-200">
                                <td className="text-sm p-2 text-center">
                                    <Link preserveScroll href={route('topic.publish',{topic:topic.slug})} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                        {status(topic.publish)}
                                    </Link>
                                </td>
                                <td className="text-sm p-2">

                                    <Link href={route('topic.edit',{topic:topic.slug})} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                        {topic.name}
                                    </Link>
                                </td>
                                <td className="text-sm text-center items-center justify-center p-2">
                                    <Link href={route('topic.edit',{topic:topic.slug})} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                        editar
                                    </Link>
                                </td>
                                <td className="text-sm p-2 text-center">
                                    <Link href={route('topic.images.index',{topic:topic.slug})} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                        Imagens
                                    </Link>
                                </td>
                                <td className="text-sm p-2 text-center">
                                    <Link href={route('topic.show',{topic:topic.slug})} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
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

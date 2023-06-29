import React from 'react';
import Auth from '@/Layouts/Auth';
import {Head, useForm,usePage} from '@inertiajs/react'

export default function Edit( {collection}) {

    const { data, setData, post, processing, errors, delete: destroy ,get} = useForm({
        name: collection.name,


    })

    function submit(e) {
        e.preventDefault()
        post(route("collection.update",{id:collection.id}));

    }
    function destruction() {
        if (confirm("Deseja realmente apagar este registro?")) {
            get(route("collection.destroy",{id:collection.id}));
        }
    }

    const {auth} = usePage().props
    const { flash } = usePage().props

    return (
            <>
                <Head title="Collections" />
                <Auth auth={auth} errors={errors} >
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="flex flex-row">
                                <div className="basis-1/2">
                                    <h3 className="text-lg ">{collection.name}</h3>
                                </div>

                            </div>
                            <form className="space-y-8 divide-y divide-gray-200 mt-4" onSubmit={submit}>
                                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                                    <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                                        <div className="space-y-6 sm:space-y-5">
                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Nome
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                    <input
                                                        type="text"
                                                        value={data.name}
                                                        onChange={e => setData('name', e.target.value)}
                                                        className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
                                                    {errors.name && <div className="text-red-600">{errors.name}</div>}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="pt-5">
                                    <div className="flex justify-end">
                                        <button
                                            onClick={destruction}
                                            tabIndex="-1"
                                            type="button"
                                            className="px-4 py-2 text-white bg-red-500 rounded"
                                        >
                                            Delete
                                        </button>

                                        <button
                                            type="submit"
                                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Auth>
            </>

    )
}


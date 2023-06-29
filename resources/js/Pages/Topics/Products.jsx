import React from 'react';
import Auth from '@/Layouts/Auth';
import {Head, Link, usePage} from "@inertiajs/react";
import SelectProductsByFilters from "@/Pages/Topics/Components/SelectProductsByFilters";
import ProductList from "@/Pages/Topics/Components/ProductList";


export default function Index({products,topic,categories,collections}) {

    const {auth} = usePage().props
    const { errors } = usePage().props

    return (
        <>
            <Head title="Products" />
            <Auth auth={auth} errors={errors} >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/*
                    <div className="flex flex-row mt-8">
                        <div className="basis-1/2">
                            <h2 className="text-xl mt-2 font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{topic.name}</h2>
                        </div>
                        <div className="basis-1/2">
                            <Link href={route('topic.show',{topic:topic.slug})} className="inline-block w-full items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                Listar
                            </Link>
                        </div>
                    </div>
                    */}
                    <SelectProductsByFilters topic={topic} categories={categories} collections={collections}/>
                    <ProductList topic={topic} products={products}/>
                </div>
            </Auth>
        </>
    );
}

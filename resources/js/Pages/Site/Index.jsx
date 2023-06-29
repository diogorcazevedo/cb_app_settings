import React from 'react';
import Auth from '@/Layouts/Auth';
import {Head, usePage} from "@inertiajs/react";
import SelectProductsByFilters from "@/Pages/Site/Components/SelectProductsByFilters";
import ProductList from "@/Pages/Site/Components/ProductList";


export default function Index({products,categories,collections,topics}) {

    const {auth} = usePage().props
    const { errors } = usePage().props

    return (
        <>
            <Head title="Site" />
            <Auth auth={auth} errors={errors} >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <SelectProductsByFilters categories={categories} collections={collections}/>
                    <ProductList products={products} topics={topics}/>
                </div>
            </Auth>
        </>
    );
}

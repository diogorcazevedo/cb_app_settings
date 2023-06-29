import React from 'react';
import Auth from '@/Layouts/Auth';
import {Head, usePage} from "@inertiajs/react";
import ProductList from "@/Pages/Products/Components/ProductList";
import SelectProductsByFilters from "@/Pages/Products/Components/SelectProductsByFilters";


export default function Index({products,categories,collections}) {

    const {auth} = usePage().props
    const { errors } = usePage().props

    return (
        <>
            <Head title="Products" />
            <Auth auth={auth} errors={errors} >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <SelectProductsByFilters categories={categories} collections={collections}/>
                    <ProductList products={products}/>
                </div>
            </Auth>
        </>
    );
}

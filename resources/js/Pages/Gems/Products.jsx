import React from 'react';
import Auth from '@/Layouts/Auth';
import {Head, usePage} from "@inertiajs/react";
import SelectProductsByFilters from "@/Pages/Gems/Components/SelectProductsByFilters";
import ProductList from "@/Pages/Gems/Components/ProductList";


export default function Index({products,categories,collections,gems}) {

    const {auth} = usePage().props
    const { errors } = usePage().props

    return (
        <>
            <Head title="Gemas" />
            <Auth auth={auth} errors={errors} >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <SelectProductsByFilters collections={collections} categories={categories}/>
                    <ProductList products={products} gems={gems}/>
                </div>
            </Auth>
        </>
    );
}

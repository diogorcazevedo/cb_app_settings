import React from 'react';
import Auth from '@/Layouts/Auth';
import {Head, usePage} from "@inertiajs/react";
import SelectProductsByFilters from "@/Pages/SubCategories/Components/SelectProductsByFilters";
import ProductList from "@/Pages/SubCategories/Components/ProductList";


export default function Index({products,categories,collections,category,subcategories}) {

    const {auth} = usePage().props
    const { errors } = usePage().props

    return (
        <>
            <Head title="Categories" />
            <Auth auth={auth} errors={errors} >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <SelectProductsByFilters collections={collections} categories={categories}  category={category}/>
                    <ProductList products={products} subcategories={subcategories}/>
                </div>
            </Auth>
        </>
    );
}

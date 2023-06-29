import Store from '@/Layouts/Store';
import {Head} from '@inertiajs/react';
import React from 'react';
import ProductsListLazy from "@/Pages/Store/Components/ProductsListLazy";

export default function Category({ products }) {

    return (
        <Store>
            <Head title="Home" />
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="pt-28">
                <ProductsListLazy data={products}/>
            </div>
            </div>
        </Store>
    );
}

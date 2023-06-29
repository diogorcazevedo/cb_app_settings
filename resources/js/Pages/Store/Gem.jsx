import Store from '@/Layouts/Store';
import {Head} from '@inertiajs/react';
import React from 'react';
import ProductsListLazy from "@/Pages/Store/Components/ProductsListLazy";

export default function Category({ products }) {

    return (
        <Store>
            <Head title="Gem" />
            <div className="pt-28">
                <ProductsListLazy data={products}/>
            </div>
        </Store>
    );
}

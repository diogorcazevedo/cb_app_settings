import Store from '@/Layouts/Store';
import {Head} from '@inertiajs/react';
import React from 'react';
import ProductsGridLazy from "@/Pages/Store/Components/ProductsGridLazy";

export default function Topic({ products }) {

    return (
        <Store>
            <Head title="Topic" />
            <div className="pt-28">
                <ProductsGridLazy data={products}/>
            </div>
        </Store>
    );
}

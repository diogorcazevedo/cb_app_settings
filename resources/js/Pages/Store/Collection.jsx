import Store from '@/Layouts/Store';
import {Head, Link} from '@inertiajs/react';
import ProductsListRegular from "@/Pages/Store/Components/ProductsListRegular";
import React from 'react';
import CollectionsJointList from "@/Pages/Store/Components/CollectionsJointList";

export default function Collection({collection,products,joints,image }) {


    return (
        <Store>
            <Head title="Home" />
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">

            <div className="pt-24">

                <Link href="/">
                    <div aria-hidden="true" className="relative">
                        <img
                            src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+image.path}
                            alt=""
                            className="w-full object-center object-cover"

                        />
                    </div>
                    <h1 className="ml-4 mt-4 mb-12 text-3xl text-gray-700 tracking-wide"> {collection.name}</h1>
                </Link>

                <ProductsListRegular data={products}/>

                <div key={collection.id} className="pt-12">
                        <CollectionsJointList joints={joints}/>
                </div>

            </div>
            </div>
        </Store>
    );
}

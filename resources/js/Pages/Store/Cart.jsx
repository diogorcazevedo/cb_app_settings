import Store from '@/Layouts/Store';
import {Head} from '@inertiajs/react';
import React from 'react';
import CartOrderSummary from "@/Pages/Store/Components/CartOrderSummary";
import CartOrderEdit from "@/Pages/Store/Components/CartOrderEdit";

export default function Cart({total,show_cart}) {

    return (
    <Store>
        <Head title="Home" />
        <div className="bg-white">
            <div className="max-w-2xl mx-auto pt-28 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                    {/* Order edit */}
                    <CartOrderEdit show_cart={show_cart}/>
                    {/* Order summary */}
                    <CartOrderSummary total={total} />
                </div>
            </div>
        </div>
    </Store>
  )
}

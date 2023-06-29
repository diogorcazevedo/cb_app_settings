import Store from '@/Layouts/Store';
import {Head, usePage} from '@inertiajs/react';
import CheckoutFormCard from "@/Pages/Store/Components/CheckoutFormCard";
import React from 'react';
import CheckoutSummary from "@/Pages/Store/Components/CheckoutSummary";


  export default function Checkout({order,items,operadora}) {

    return (
      <Store>
        <Head title="Home" />
          <div className="bg-white mt-20 p-4">
            {/* Background color split screen for large screens */}
            <div className="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
            <div className="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true" />
            <div className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 lg:pt-16">
              <CheckoutSummary items={items} order={order}/>
              <CheckoutFormCard order={order}  operadora={operadora} />
            </div>
          </div>
      </Store>
    )
  }


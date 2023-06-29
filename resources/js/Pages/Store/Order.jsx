import Store from '@/Layouts/Store';
import {Head} from '@inertiajs/react';
import React from 'react';
import OrderForm from "@/Pages/Store/Components/OrderForm";
import OrderDescription from "@/Pages/Store/Components/OrderDescription";
import CartOrderSummary from "@/Pages/Store/Components/CartOrderSummary";

  export default function Order({total,states}) {

    return (
      <Store>
      <Head title="Home" />
          <div className="bg-white mt-24">
            {/* Background color split screen for large screens */}
            <div className="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
            <div className="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-white" aria-hidden="true" />
            <div className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 lg:pt-16">
              <section aria-labelledby="summary-heading" className="hidden md:block py-12 md:px-10 lg:max-w-lg lg:w-full lg:mx-auto lg:px-0 lg:pt-0 lg:pb-24 lg:bg-transparent lg:row-start-1 lg:col-start-2">
                  <CartOrderSummary total={total}/>
                  <br/>
                  <OrderDescription />
              </section>
              <section aria-labelledby="payment-and-shipping-heading" className="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1">
                <OrderForm states={states}/>
              </section>
            </div>
          </div>
      </Store>
    )
  }

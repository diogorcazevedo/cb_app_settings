import React from 'react';
import {Link} from "@inertiajs/react";
import {Disclosure} from "@headlessui/react";
import {MinusSmallIcon, PlusSmallIcon} from "@heroicons/react/24/outline";
import ProductRingSize from "@/Pages/Store/Components/ProductRingSize";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function cart_link(product){

    if (product.category_id == "1"){
        return  <ProductRingSize product={product} />
    }else{
        return  <Link href={route('cart.add',{product:product.slug,'redirect':2})} className="max-w-xs flex-1 bg-teal-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-teal-500 sm:w-full">
                    comprar
                </Link>
    }
}


export default function ProductDescriptions({product}) {


    const p = {
        name: product.name,
        div:   new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.stock.offered_price / 12 ) ,
        price:   new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.stock.offered_price ) ,
        description: "<p>"+ product.description +"</p>",
        details: [
            {
                name: 'Materiais',
                items: [
                    product.materia,
                    product.gem_description
                ],
            },
            {
                name: 'Destaque',
                items: [
                    product.destaque
                ],
            },
            {
                name: 'Dimensões',
                items: [
                    product.dimensoes
                ],
            },
        ],
    }

    return (
       <>
           <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
               <h3 className="text-xl tracking-tight text-gray-900">{p.name}</h3>

               <div className="mt-3">
                   <h3 className="sr-only">Product information</h3>
                   <p className="text-base text-gray-700 space-y-6">{p.price}</p>
                   <p className="text-base text-gray-700 space-y-6">12 X {p.div}</p>

               </div>

               <div className="mt-10">
                       {cart_link(product)}
               </div>

               <section aria-labelledby="details-heading" className="mt-12">
                   <h2 id="details-heading" className="sr-only">
                       Additional details
                   </h2>

                   <div className="border-t divide-y divide-gray-200">

                       <div className="mt-6">
                           <h3 className="sr-only">Description</h3>
                           <div className="text-base text-gray-700 space-y-6" dangerouslySetInnerHTML={{ __html: p.description }}/>
                       </div>

                       {p.details.map((detail) => (
                           <Disclosure as="div" key={detail.name}>
                               {({ open }) => (
                                   <>
                                       <h3>
                                           <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                                <span
                                    className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                                >
                                  {detail.name}
                                </span>

                                 <span className="ml-6 flex items-center">
                                     <p>.</p>
                                  {open ? (
                                      <MinusSmallIcon
                                          className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                          aria-hidden="true"
                                      />
                                  ) : (
                                      <PlusSmallIcon
                                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                          aria-hidden="true"
                                      />
                                  )}
                                </span>
                                           </Disclosure.Button>
                                       </h3>
                                       <Disclosure.Panel as="div" className="pb-6 prose prose-sm">
                                           <ul role="list">
                                               {detail.items.map((item) => (
                                                   <li key={item}>{item}</li>
                                               ))}
                                           </ul>
                                       </Disclosure.Panel>
                                   </>
                               )}
                           </Disclosure>
                       ))}
                   </div>
               </section>
           </div>
       </>
    );
}

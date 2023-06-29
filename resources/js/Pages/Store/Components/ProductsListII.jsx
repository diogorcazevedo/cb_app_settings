import React from 'react';
import { Link } from '@inertiajs/react';


export default function ProductsList({ product }) {
    return (
       <>
           <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-sm">
               <Link href={route('store.product',{product:product.slug})} className="hover:bg-slate-50">
                   <div className="flex-1 flex flex-col p-8 h-[32rem]">
                       <div className="aspect-w-1 aspect-h-1">
                           <img className="flex-shrink-0 mx-auto"
                                src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+product.images[0].path}
                                alt={product.name} />
                       </div>

                       <h3 className="mt-6 text-gray-900 text-sm font-medium">{product.name}</h3>
                       <dl className="mt-1 flex-grow flex flex-col justify-between">

                           <dt className="sr-only">PRICE</dt>
                           <dd className="text-gray-500 text-sm">
                               { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.stock.offered_price) }
                           </dd>

                           <dt className="sr-only">Saiba Mais</dt>
                           <dd className="mt-3">
                                    <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                        Saiba Mais
                                    </span>
                           </dd>
                       </dl>

                   </div>
               </Link>
           </li>
       </>
    );
}

import React from 'react';
import {Link} from "@inertiajs/react";


export default function ProductsGridLazy({ data }) {

    function link(sale,product){
        if (sale == '1'){
            return route('store.product',{product:product.slug})
        }else{
            return '#'
        }
    }
    function availability(sale,product){
        if (sale == '0') {
            return (
                <>
                    <dt className="sr-only">Indisponível</dt>
                    <dd className="text-gray-500 text-sm">
                        Consulte-nos para mais informações
                    </dd>
                    <dt className="sr-only">Saiba Mais</dt>
                    <dd className="mt-3">
                    <span className="px-2 py-1">
                    </span>
                    </dd>
                </>
            );
        } else{

            return (
                <>
                    <dt className="sr-only">PRICE</dt>
                    <dd className="text-gray-500">
                        12 X  { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.stock.offered_price / 12) }
                        <br/>
                        { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.stock.offered_price) }
                    </dd>
                    <dt className="sr-only">Saiba Mais</dt>
                    <dd className="mt-3">
                        <span className="px-2 py-1 text-green-800  font-medium bg-green-100 rounded-full">
                            comprar
                        </span>
                    </dd>
                </>
            );
        }
    }

    return (
        <ul role="list" className=" px-8 grid grid-cols-1 gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((product) => (
            product.images[0]?.path  && (
                <div key={product.id} >
                        <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-sm">
                            <Link href={link(product.sale,product)} className="hover:bg-slate-50">
                                <div className="flex-1 flex flex-col p-8 h-[38rem] sm:h-[32rem]">
                                    <div className="aspect-w-1 aspect-h-1">
                                        <img className="object-scale-down"
                                             src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+product.images[0].path}
                                             alt={product.name} />
                                    </div>
                                    <div className="h-[32rem]">
                                        <h3 className="mt-8 text-gray-900 text-sm font-medium">{product.name}</h3>
                                    </div>
                                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                                        {availability(product.sale,product)}
                                    </dl>
                                </div>
                            </Link>
                        </li>
                </div>
            )
        ))}
    </ul>
    );
}

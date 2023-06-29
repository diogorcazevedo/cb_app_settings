import {Link} from "@inertiajs/react";
import React from "react";
import SlideEditGems from "@/Pages/Gems/Components/SlideEditGems";

export default function ProductList({products,gems}) {

    return (
        <>
            <table className="border mt-8 min-w-full divide-y divide-x divide-gray-200">
                <thead className="bg-gray-50 divide-y divide-x divide-gray-200">
                <tr className="divide-x divide-y divide-gray-200">
                    <th  className="text-gray-900 p-2 py-6">Img</th>
                    <th  className="text-gray-900 p-2 py-6">Name</th>
                    <th  className="text-gray-900 p-2 py-6">Valor</th>
                    <th  className="text-gray-900 p-2 py-6">
                       Ações
                    </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-x divide-gray-200 bg-white">
                {products.map((product) => (
                    <tr key={product.id} className="divide-x divide-y divide-gray-200">
                        <td className="text-sm p-2">
                            <Link href={route('product.images.index',{id:product.id})} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">

                            <img className="w-14 h-14  flex-shrink-0"
                                 src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+product.images[0]?.path}/>
                            </Link>

                        </td>
                        <td className="text-sm p-2">
                            <Link href={route('product.edit',{id:product.id})} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                {product.name}
                            </Link>
                        </td>
                        <td className="text-sm p-2">{product.stock?.offered_price}</td>

                        <td className="text-sm text-center items-center justify-center p-2">
                            <SlideEditGems product={product} gems={gems}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>

    );
}

/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function SalesUserSlide({orders}) {
    const [open, setOpen] = useState(false)



    return (

   <>
       <button
           type="button"
           className="w-full my-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
           onClick={() => setOpen(true)}
       >
           compras
       </button>
       <Transition.Root show={open} as={Fragment}>
           <Dialog as="div" className="relative z-10" onClose={setOpen}>
               <div className="fixed inset-0" />

               <div className="fixed inset-0 overflow-hidden">
                   <div className="absolute inset-0 overflow-hidden">
                       <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                           <Transition.Child
                               as={Fragment}
                               enter="transform transition ease-in-out duration-500 sm:duration-700"
                               enterFrom="translate-x-full"
                               enterTo="translate-x-0"
                               leave="transform transition ease-in-out duration-500 sm:duration-700"
                               leaveFrom="translate-x-0"
                               leaveTo="translate-x-full"
                           >
                               <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                                   <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                       <div className="px-4 sm:px-6">
                                           <div className="flex items-start justify-between">
                                               <Dialog.Title className="text-lg font-medium text-gray-900"> Compras </Dialog.Title>
                                               <div className="ml-3 flex h-7 items-center">
                                                   <button
                                                       type="button"
                                                       className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                       onClick={() => setOpen(false)}
                                                   >
                                                       <span className="sr-only">Close panel</span>
                                                       <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                   </button>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                               {orders.map((order) => (
                                                   <div key={order.id} className="mb-6">
                                                       <table className="border mt-8 min-w-full divide-y divide-x divide-gray-200">
                                                           <thead className="bg-gray-50 divide-y divide-x divide-gray-200">
                                                               <tr className="divide-x divide-y divide-gray-200">
                                                                   <th colSpan="3"  className="text-gray-900 p-4">Data da compra: {order.data}</th>
                                                               </tr>
                                                           </thead>
                                                           <tbody className="divide-y divide-x divide-gray-200 bg-white">
                                                               {order.items.map((item) => (
                                                               <tr key={item.id} className="divide-x divide-y divide-gray-200">
                                                                   <td className="text-sm p-2">
                                                                       <img className="w-14 h-14  flex-shrink-0"
                                                                            src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+item.product.images[0]?.path}/>
                                                                   </td>
                                                                   <td className="text-sm p-2">
                                                                            <p key={item.id}>{item.product.name}</p>
                                                                   </td>
                                                               </tr>
                                                               ))}
                                                           </tbody>
                                                        </table>
                                                   </div>
                                               ))}
                                       </div>
                                   </div>
                               </Dialog.Panel>
                           </Transition.Child>
                       </div>
                   </div>
               </div>
           </Dialog>
       </Transition.Root>
   </>
    )
}

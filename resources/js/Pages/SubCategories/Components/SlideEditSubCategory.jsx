import React, {Fragment, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from "@inertiajs/react";
import {CheckIcon} from "@heroicons/react/24/solid";

export default function SlideEditSubCategory({product,subcategories}) {

    const [open, setOpen] = useState(false)

    const product_subcategories = product.subcategories;
    const differences = _.differenceBy(subcategories, product_subcategories, 'id');

    return (
        <>
            <button
                type="button"
                className="inline-block w-full items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                onClick={() => setOpen(true)}
            >
                Subcategoria
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
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-xl">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-lg font-medium text-gray-900">
                                                        <img className="w-32 h-32  flex-shrink-0"
                                                             src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+product.images[0]?.path}/>
                                                    </Dialog.Title>
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
                                                <div className="flex flex-row">
                                                    <div className="basis-1/2">
                                                        <table className="border mt-8 min-w-full divide-y divide-x divide-gray-200">
                                                            <thead className="bg-gray-50 divide-y divide-x divide-gray-200">
                                                            <tr className="divide-x divide-y divide-gray-200">
                                                                <th className="text-gray-900 p-2 py-6">
                                                                    Adicionados
                                                                </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-x divide-gray-200 bg-white">

                                                            {Object.values(product.subcategories).map((subcategory) => (
                                                                <tr key={subcategory.id} className="divide-x divide-y divide-gray-200">
                                                                    <td className="text-sm text-right items-end justify-end p-2">
                                                                        <Link preserveState preserveScroll href={route('subcategory.remove',{product:product.slug, subcategories:subcategory.id})} className="block w-full items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-teal-700 bg-gray-50 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                                                                            <div className="flex flex-row">
                                                                            <div className="basis-1/4">
                                                                                <XMarkIcon className="text-red-700 -ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                                                            </div>
                                                                            <div className="basis-3/4">
                                                                                {subcategory.name}
                                                                            </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="basis-1/2">
                                                        <table className="border mt-8 min-w-full divide-y divide-x divide-gray-200">
                                                            <thead className="bg-gray-50 divide-y divide-x divide-gray-200">
                                                            <tr className="divide-x divide-y divide-gray-200">
                                                                <th className="text-gray-900 p-2 py-6">
                                                                    Categorias
                                                                </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-x divide-gray-200 bg-white">

                                                            {Object.values(differences).map((difference) => (
                                                                <tr key={difference.id} className="divide-x divide-y divide-gray-200">
                                                                    <td className="text-sm text-right items-end justify-end p-2">
                                                                        <Link  preserveState preserveScroll href={route('subcategory.add',{product:product.slug, subcategories:difference.id})} className="block w-full items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                                                            <div className="flex flex-row">
                                                                                <div className="basis-1/4">
                                                                                    <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                                                                </div>
                                                                                <div className="basis-3/4">
                                                                                    {difference.name}
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
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

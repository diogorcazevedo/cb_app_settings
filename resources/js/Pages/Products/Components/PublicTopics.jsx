import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import {Link} from "@inertiajs/react";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function PublicTopics( {product,topics}) {




    return (
            <>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <div  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 sm:col-span-2">
                       <p>Tópicos</p>
                    </div>
                    <div className="mt-1 sm:mt-0 sm:col-span-1">
                        <Menu as="div" className="relative text-left">
                            <div>
                                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                    Options
                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {topics.map((topic) => (
                                            <div key={topic.id}>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href={route('product.add_topic',{topic:topic.slug,product:product.slug})}
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'bg-gray-50 text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            {topic.name}
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>

                <br/>
                <br/>
                <table className="border mt-8 min-w-full divide-y divide-x divide-gray-200">
                    <thead className="bg-gray-50 divide-y divide-x divide-gray-200">
                    <tr className="divide-x divide-y divide-gray-200">
                        <th  className="text-gray-900 p-2 py-6">Tópico</th>
                        <th  className="text-gray-900 p-2 py-6">Remover</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-x divide-gray-200 bg-white">
                    {product.topics.map((topic) => (
                        <tr key={topic.id} className="divide-x divide-y divide-gray-200">
                            <td className="text-sm p-2 text-center">
                                <p>{topic.name}</p>
                            </td>
                            <td className="text-sm text-center items-center justify-center p-2">
                                <Link href={route('product.remove_topic',{topic:topic.slug,product:product.slug})}
                                   className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    remover
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>

    )
}


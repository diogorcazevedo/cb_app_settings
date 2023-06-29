import {XMarkIcon} from "@heroicons/react/24/solid";
import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import {Link} from "@inertiajs/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function items(product,key){
    let menuItems = [];
    for (let i = 1; i < 10; i++) {
        menuItems.push(
            <Menu.Item key={i}>
                {({ active }) => (
                    <Link
                        href={route('cart.qtd_update',{id:key,qtd:i,aro1:product.aro1,aro2:product.aro2  })}
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                    >
                        {i}
                    </Link>
                )}
            </Menu.Item>
        );
    }
    return menuItems;
}

function aro1(product,key,qtd){
    let menuItems = [];
    for (let i = 6; i < 46; i++) {
        menuItems.push(
            <Menu.Item key={i}>
                {({ active }) => (
                    <Link
                        href={route('cart.qtd_update',{id:key,qtd:qtd,aro1:i,aro2:product.aro2 })}
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                    >
                        {i}
                    </Link>
                )}
            </Menu.Item>
        );
    }
    return menuItems;
}

export default function CartOrderEdit({ show_cart }) {


    return (
        <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
                Carrinho de Compra
            </h2>
            <ul role="list" className="border-t  border-gray-200 divide-y divide-gray-200">
                {Object.entries(show_cart).map(([key,product]) => (
                    <div key={key}>
                        <li className="flex py-6 sm:py-10">
                            <div className="flex-shrink-0">
                                <img
                                    src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+product.urlImg}
                                    alt= ''
                                    className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                                />
                            </div>

                            <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                    <div>
                                        <div className="flex justify-between">
                                            <h3 className="text-sm">
                                                <a href="#" className="font-medium text-gray-700 hover:text-gray-800">
                                                    {product.name}
                                                </a>
                                            </h3>
                                        </div>
                                        <p className="mt-1 text-sm font-medium text-gray-900">
                                            { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price) }
                                        </p>
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:pr-9">

                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                                    {product.qtd}
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
                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        {items(product,key)}
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>


                                        <div className="absolute top-0 right-0">
                                            <Link href={route('cart.remove',{id:key})} className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500">
                                                <span className="sr-only">Remove</span>
                                                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                    <div>
                                        <div className="flex justify-between">
                                            <h3 className="text-sm">
                                                <a href="#" className="font-medium text-gray-700 hover:text-gray-800">
                                                    Tamanho do aro do anel
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:pr-9">
                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                                    {product.aro1}
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
                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        {aro1(product,key,product.qtd)}
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>

                                </div>

                                {/*
                                                  <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                                                    {product.inStock ? (
                                                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                                                    ) : (
                                                      <ClockIcon className="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                                                    )}

                                                    <span>{product.inStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
                                                  </p>
                                                  */}
                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        </section>
    );
}

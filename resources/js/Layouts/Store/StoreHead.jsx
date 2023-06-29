import {Popover} from '@headlessui/react'
import MobileNavBar from "@/Layouts/Store/components/MobileNavBar";
import {Link, usePage} from "@inertiajs/react";
import React, {useState} from "react";
import {ShoppingBagIcon, UserIcon} from '@heroicons/react/24/outline'
import {HomeIcon, QuestionMarkCircleIcon} from "@heroicons/react/24/outline";
import InstitucionalNavItem from "@/Layouts/Store/components/InstitucionalNavItem";
import CategorySecondNav from "@/Layouts/Store/components/CategorySecondNav";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function StoreHead() {

  const { flash } = usePage().props;
  const [open, setOpen] = useState(false)
  const { cart } = usePage().props;

  return (
      <div className="bg-white">
          {/* Mobile menu */}

          <header className="relative bg-white">
              <nav aria-label="Top" className="left-0 bg-white right-0 fixed top-0 z-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/*<div className="mx-auto px-4 sm:px-6 lg:px-8">*/}
                      <div className="flex flex-1 items-center justify-end">
                          <div className="ml-4 flow-root lg:ml-6">
                              <a href="#" className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center">
                                  <img
                                      src="https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg/@@images/image"
                                      alt=""
                                      className="block h-auto w-5 flex-shrink-0"
                                  />
                                  <span className="ml-3 block text-sm font-medium">BRL</span>
                                  <span className="sr-only">, change currency</span>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="bg-white pt-2">
                       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                           {/*<div className="mx-auto px-4 sm:px-6 lg:px-8">*/}
                          <div className="flex h-16 items-center justify-between">
                              {/*
                                  <div className="flex flex-1 items-center lg:hidden">
                                      <button
                                          type="button"
                                          className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                                          onClick={() => setOpen(true)}
                                      >
                                          <span className="sr-only">Open menu</span>
                                          <UserIcon className="h-6 w-6" aria-hidden="true" />
                                      </button>

                                      <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                                          <span className="sr-only">Search</span>
                                          <UserIcon className="h-6 w-6" aria-hidden="true" />
                                      </a>
                                  </div>
                                    */}
                              <div className="hidden lg:flex-1 lg:flex lg:items-center">
                                  <a href="/">
                                      <span className="sr-only">carla buaiz</span>
                                      <img
                                          className="h-28 w-auto"
                                          src="/img/logo.svg"
                                          alt="logo"
                                      />
                                  </a>
                              </div>
                              <div className="hidden h-full lg:flex">
                                  {/* Flyout menus */}
                                  <Popover.Group className="hidden lg:block lg:flex-1 lg:self-stretch">
                                      <div className="flex h-full space-x-8">
                                          <Link
                                              href="/"
                                              className="flex items-center  font-light text-gray-700 hover:text-gray-400"
                                          >
                                              <HomeIcon
                                                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                  aria-hidden="true"
                                              />
                                          </Link>
                                          <Link
                                              href={route('store.collection',{collection:'bee'})}
                                              className="flex items-center  font-light text-gray-700 hover:text-gray-400"
                                          >
                                              Nossas Abelhinhas
                                          </Link>
                                          <Link
                                              href={route('store.collections')}
                                              className="flex items-center  font-light text-gray-700 hover:text-gray-400"
                                          >
                                              Coleções
                                          </Link>
                                          <CategorySecondNav />

                                          <Link href={route('lojavirtual')} className=" p-2  text-gray-400 hover:text-gray-500 lg:hidden text-light">
                                              <span className="sr-only">loja Virtual</span>
                                              <QuestionMarkCircleIcon className="w-6 h-6" aria-hidden="true" />
                                          </Link>

                                          <Link href={route('lojavirtual')} className="hidden lg:block  inline-flex place-self-center items-center px-2.5 py-1.5 border border-transparent  font-light rounded text-gray-900 bg-gray-50 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                              Loja Virtual
                                          </Link>
                                          <Link
                                              href={route('landing.multiplas')}
                                              className="flex items-center  font-light text-gray-700 hover:text-gray-400"
                                          >
                                              Mulheres Múltiplas
                                          </Link>

                                          <InstitucionalNavItem />
                                          {/*
                                          <GemsNavItem />
                                          <Link href={route('lojavirtual')} className=" p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                                              <span className="sr-only">loja Virtual</span>
                                                <QuestionMarkCircleIcon class="w-6 h-6" aria-hidden="true" />
                                          </Link>

                                          <Link href={route('lojavirtual')} className="hidden lg:block inline-flex place-self-center items-center px-2.5 py-1.5 border border-transparent  font-medium rounded text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                              Loja Virtual
                                          </Link>
                                        */}
                                      </div>
                                  </Popover.Group>
                              </div>


                              <MobileNavBar />



                              <div className="flex flex-1 items-center justify-end">

                                  {/* Account */}
                                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
                                      <span className="sr-only">Account</span>
                                      <UserIcon className="h-6 w-6" aria-hidden="true" />
                                  </a>

                                  {/* Cart */}
                                  <div className="ml-4 flow-root lg:ml-6">
                                      <a href="#" className="group -m-2 flex items-center p-2">
                                          <ShoppingBagIcon
                                              className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                              aria-hidden="true"
                                          />
                                          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                          <span className="sr-only">items in cart, view bag</span>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </nav>
          </header>
      </div>
  )
}

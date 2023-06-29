/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import {Link} from "@inertiajs/react";

const brincos = [
    { name: 'Ear Cuffs' , href: route('store.subcategory',{category:'23'}),  icon: "" },
    { name: 'Pequenos', href: route('store.subcategory',{category:'22'}),  icon: "" },
    { name: 'Médios', href: route('store.subcategory',{category:'114'}),  icon: "" },
    { name: 'Base sem aplique', href: route('store.subcategory',{category:'21'}),  icon: "" },
    { name: 'Base com aplique', href: route('store.subcategory',{category:'27'}),  icon: "" },
    { name: 'Longos ou Grandes', href: route('store.subcategory',{category:'20'}),  icon: "" },
    { name: 'Apliques', href: route('store.subcategory',{category:'24'}),  icon: "" },
    { name: 'Solitários', href: route('store.subcategory',{category:'25'}),  icon: "" },
    { name: 'Argolas', href: route('store.subcategory',{category:'26'}),  icon: "" },
    { name: 'Gancho', href: route('store.subcategory',{category:'113'}),  icon: "" },
    { name: 'Infantil', href: route('store.subcategory',{category:'28'}),  icon: "" },
    { name: 'Corações', href: route('store.subcategory',{category:'29'}),  icon: "" },

]
const aneis = [
    { name: 'Grandes', href: route('store.subcategory',{category:'6'}),  icon: "" },
    { name: 'Médios', href: route('store.subcategory',{category:'10'}),  icon: "" },
    { name: 'Pequenos', href: route('store.subcategory',{category:'9'}),  icon: "" },
    { name: 'Alianças com Pedras Preciosas', href: route('store.subcategory',{category:'4'}), icon: ""  },
    { name: 'Aneis Largos (alianças) ', href: route('store.subcategory',{category:'11'}),  icon: "" },
    { name: 'Aros Múltiplos', href: route('store.subcategory',{category:'7'}),  icon: "" },
    { name: 'Aparadores', href: route('store.subcategory',{category:'4'}),  icon: "" },
    { name: 'Solitários', href: route('store.subcategory',{category:'1'}),  icon: "" },
    { name: 'Alianças', href: route('store.subcategory',{category:'3'}),  icon: "" },
    { name: 'Formatura', href: route('store.subcategory',{category:'5'}),  icon: "" },
    { name: 'Infantil', href: route('store.subcategory',{category:'12'}),  icon: "" },
    { name: 'Corações', href: route('store.subcategory',{category:'13'}),  icon: "" },
]
const colares = [
    { name: 'Choker (curtos)', href: route('store.subcategory',{category:'30'}),  icon: "" },
    { name: 'Médios', href: route('store.subcategory',{category:'33'}),  icon: "" },
    { name: 'Longos', href: route('store.subcategory',{category:'34'}),  icon: "" },
    { name: 'Gravatinha', href: route('store.subcategory',{category:'31'}),  icon: "" },
    { name: 'Escapulário', href: route('store.subcategory',{category:'35'}),  icon: "" },
    { name: 'Corações', href: route('store.subcategory',{category:'37'}),  icon: "" },
    { name: 'Solitário', href: route('store.subcategory',{category:'38'}),  icon: "" },
    { name: 'Robustos', href: route('store.subcategory',{category:'39'}),  icon: "" },
    { name: 'Pontos de Luz', href: route('store.subcategory',{category:'122'}),  icon: "" },
    { name: 'Pingente Grande', href: route('store.subcategory',{category:'120'}),  icon: "" },
    { name: 'Infantil', href: route('store.subcategory',{category:'119'}),  icon: "" },
]
const blogPosts = [
    {
        id: 1,
        name: 'Colares',
        href:  route('store.category',{category:'colares'}),
        preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
        imageUrl:
            'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/4022.webp',
    },
    {
        id: 2,
        name: 'Anéis',
        href:  route('store.category',{category:'aneis'}),
        preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
        imageUrl:
            'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/3978.webp',
    },
    {
        id: 3,
        name: 'Brincos',
        href: route('store.category',{category:'brincos'}),
        preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
        imageUrl:
            'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/4005.webp',
    },
    {
        id: 4,
        name: 'Pulseiras',
        href: route('store.category',{category:'pulseiras'}),
        preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
        imageUrl:
            'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/4045.webp',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CategorySecondNav() {
    return (
        <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
            <div className="flex h-full justify-center space-x-8">
                <Popover className="flex">
                    {({ open }) => (
                        <>
                            <div className="relative flex">
                                    <Popover.Button  className="flex items-center text-base font-light text-gray-700 hover:text-gray-400">
                                        <span>Joias por Categoria</span>
                                    </Popover.Button>

                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 -translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 -translate-y-1"
                            >
                                <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                    <div className="absolute inset-0 flex" aria-hidden="true">
                                        <div className="w-1/4 bg-white" />
                                        <div className="w-1/4 bg-white" />
                                    </div>
                                    <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 pb-24 bg-white">
                                        <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                            {blogPosts.map((item) => (
                                                <div key={item.name} className="group relative">
                                                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md  group-hover:opacity-75">
                                                        <Link href={item.href}>
                                                            <img
                                                                src={item.imageUrl}
                                                                //alt={item.imageAlt}
                                                                className="object-cover object-center"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <Link href={item.href} className="mt-4 block font-medium text-gray-900 text-center ">
                                                        <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                        {item.name}
                                                    </Link>
                                                    <p aria-hidden="true" className="mt-1 block text-center ">
                                                        Shop now
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="grid gap-y-6 xl:pl-12 px-4 py-8 sm:grid-cols-3 sm:gap-x-2 sm:py-12 sm:px-3 lg:px-4 ">
                                            <div>
                                                <h3 className="text-base font-medium text-gray-900">Colares</h3>
                                                <ul role="list" className="mt-2 space-y-2">
                                                    {colares.map((item) => (
                                                        <li key={item.name} className="flow-root">
                                                            <Link
                                                                href={item.href}
                                                                className=" flex items-center rounded-md text-sm font-light text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50"
                                                            >
                                                                {/*  <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />*/}
                                                                <span>{item.name}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-base font-medium text-gray-900">Brincos</h3>
                                                <ul role="list" className="mt-2 space-y-2">
                                                    {brincos.map((item) => (
                                                        <li key={item.name} className="flow-root">
                                                            <Link
                                                                href={item.href}
                                                                className="flex items-center rounded-md text-sm font-light text-gray-500  transition duration-150 ease-in-out hover:bg-gray-50"
                                                            >
                                                                {/*  <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />*/}
                                                                <span>{item.name}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-base font-medium text-gray-900">Aneis</h3>
                                                <ul role="list" className="mt-2 space-y-2">
                                                    {aneis.map((item) => (
                                                        <li key={item.name} className="flow-root">
                                                            <Link
                                                                href={item.href}
                                                                className="flex items-center rounded-md text-sm font-light text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50"
                                                            >
                                                                {/*  <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />*/}
                                                                <span>{item.name}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </div>
        </Popover.Group>
    )
}

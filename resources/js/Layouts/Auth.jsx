import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {Link, usePage} from "@inertiajs/react";
import {
    FolderIcon, HomeIcon,
    Bars3Icon,
} from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'

import { XMarkIcon} from '@heroicons/react/24/solid'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Auth({ children }) {

    const {auth} = usePage().props
    const { errors } = usePage().props

    const userNavigation = [
        { name: 'Editar', href: route("user.edit",{user:auth.user.id}) }
    ]

    {/*
        { name: 'Dashboard', icon: HomeIcon, current: true, href: '#' },
          {
                name: 'Projects',
                icon: FolderIcon,
                current: false,
                children: [
                    { name: 'Overview', href: '#' },
                    { name: 'Members', href: '#' },
                    { name: 'Calendar', href: '#' },
                    { name: 'Settings', href: '#' },
                ],
            },
     */}
    const navigation = [

        { name: 'SITE',                 href: route("dashboard"), icon: HomeIcon, current: true },
        { name: 'Clientes',             href: route("user.index"), icon: FolderIcon, current: false },
        { name: 'Coleções',             href: route("collection.index"), icon: FolderIcon, current: false },
        { name: 'Produtos',             href: route("product.index"), icon: FolderIcon, current: false },
        { name: 'Site',                 href: route("site.index"), icon: FolderIcon, current: false },
        { name: 'Tópicos',              href: route("topic.index"), icon: FolderIcon, current: false },
        {
            name: 'Gemas',
            icon: FolderIcon,
            current: false,
            children: [
                { name: 'Gerenciar Gemas',        href: route("gem.index"), icon: FolderIcon, current: false },
                { name: 'Gerenciar produtos',      href: route("gem.products"), icon: FolderIcon, current: false },
            ],
        },
        {
            name: 'Categorias',
            icon: FolderIcon,
            current: false,
            children: [
                { name: 'Gerenciar',    href: route("subcategory.index"), icon: FolderIcon, current: false },
                { name: 'Anéis',        href: route("subcategory.products",{category:"aneis"}), icon: FolderIcon, current: false },
                { name: 'Brincos',      href: route("subcategory.products",{category:"brincos"}), icon: FolderIcon, current: false },
                { name: 'Colares',      href: route("subcategory.products",{category:"colares"}), icon: FolderIcon, current: false },
                { name: 'Pingentes',    href: route("subcategory.products",{category:"pingentes"}), icon: FolderIcon, current: false },
            ],
        },

    ]



    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex z-40">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex-shrink-0 flex items-center px-4">
                                        <img
                                            className="h-8 w-auto"
                                            src={"/online/storage/images/white_logo.png"}
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                        <nav className="px-2 space-y-1">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                    )}
                                                >
                                                    <item.icon
                                                        className={classNames(
                                                            item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                                            'mr-4 flex-shrink-0 h-6 w-6'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="flex-shrink-0 w-14" aria-hidden="true">
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex-1 flex flex-col min-h-0 bg-white shadow">
                        <div className="flex items-center justify-center place-content-center place-self-center place-items-center h-16 flex-shrink-0 px-4 bg-white">
                            <img
                                src={"/img/logo.png"}
                                className="h-24 w-auto"
                            />
                        </div>
                        {/*
                        <div className="flex-1 flex flex-col overflow-y-auto">
                            <nav className="flex-1 px-2 py-4 space-y-1">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-teal-900 text-white' : 'text-gray-300 hover:bg-teal-900 hover:text-white',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        */}
                        <div className="flex flex-grow flex-col">
                            <nav className="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
                                {navigation.map((item) =>
                                    !item.children ? (
                                        <div key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                    'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md'
                                                )}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                        'mr-3 flex-shrink-0 h-6 w-6'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        </div>
                                    ) : (
                                        <Disclosure as="div" key={item.name} className="space-y-1">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-gray-100 text-gray-900'
                                                                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                            'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                                        )}
                                                    >
                                                        <item.icon
                                                            className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                            aria-hidden="true"
                                                        />
                                                        <span className="flex-1">{item.name}</span>
                                                        <svg
                                                            className={classNames(
                                                                open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                                                                'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
                                                            )}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                        >
                                                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                                        </svg>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="space-y-1">
                                                        {item.children.map((subItem) => (
                                                            <Disclosure.Button
                                                                key={subItem.name}
                                                                as="a"
                                                                href={subItem.href}
                                                                className="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                            >
                                                                {subItem.name}
                                                            </Disclosure.Button>
                                                        ))}
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    )
                                )}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="md:pl-64 flex flex-col">
                    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                        <button
                            type="button"
                            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="flex-1 px-4 flex justify-between">
                            <div className="flex-1 flex">
                                {/*
                                <form className="w-full flex md:ml-0" action="#" method="GET">
                                    <label htmlFor="search-field" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                            <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="search-field"
                                            className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                            name="search"
                                        />
                                    </div>
                                </form>
                                 */}
                            </div>
                            <div className="ml-4 flex items-center md:ml-6">
                                {/*
                                <button
                                    type="button"
                                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                                */}

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <span className="sr-only">Open user menu</span>
                                            <p>{auth.user.name}</p>
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
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <Link
                                                            href={item.href}
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                            <Menu.Item key="12">
                                                <Link  href={route('logout')}
                                                       method="post" as="button"
                                                       className="block px-4 py-2 text-sm text-gray-700">
                                                    Logout
                                                </Link>
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <main className="flex-1">{children}</main>
                </div>
            </div>
        </>
    )
}

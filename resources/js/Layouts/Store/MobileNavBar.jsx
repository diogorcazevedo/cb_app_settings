import {Dialog, Tab, Transition} from "@headlessui/react";
import {Bars3Icon, MagnifyingGlassIcon, XMarkIcon} from "@heroicons/react/24/outline";
import { Fragment, useState } from 'react'
import {Link} from "@inertiajs/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = {
    categories: [
        {
            id: 'colecoes',
            name: 'Coleções',
            featured: [
                {
                    name: 'Bee',
                    href: 'https://www.carlabuaiz.co/jewelry/collection/bee',
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/collections/3828.webp',
                    imageAlt: 'Coleção Bee',
                },

                {
                    name: 'Fenceless',
                    href: 'https://www.carlabuaiz.co/jewelry/collection/fenceless',
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/collections/3835.webp',
                    imageAlt: 'Coleção Fenceless',
                },
                {
                    name: 'Organic',
                    href: 'https://www.carlabuaiz.co/jewelry/collection/organic',
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/collections/3876.webp',
                    imageAlt: 'Coleção Organic',
                }

            ],
            sections: [
                [
                    {
                        id: 'collections',
                        name: 'Coleções',
                        items: [
                            { name: 'Aqua', href: '#' },
                            { name: 'Honeycomb', href: '#' },
                            { name: 'Provence', href: '#' },
                            { name: 'Abbraccio', href: '#' },
                            { name: 'Miracle', href: '#' },
                            { name: 'Sublime', href: '#' },
                        ],
                    }

                ],
            ],
        },
        {
            id: 'Joias',
            name: 'Joias',
            featured: [
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
                    imageAlt:
                        'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
                },
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                [
                    {
                        id: 'shoes',
                        name: 'Shoes & Accessories',
                        items: [
                            { name: 'Sneakers', href: '#' },
                            { name: 'Boots', href: '#' },
                            { name: 'Sandals', href: '#' },
                            { name: 'Socks', href: '#' },
                        ],
                    },
                    {
                        id: 'collection',
                        name: 'Shop Collection',
                        items: [
                            { name: 'Everything', href: '#' },
                            { name: 'Core', href: '#' },
                            { name: 'New Arrivals', href: '#' },
                            { name: 'Sale', href: '#' },
                        ],
                    },
                ],
                [
                    {
                        id: 'clothing',
                        name: 'All Clothing',
                        items: [
                            { name: 'Basic Tees', href: '#' },
                            { name: 'Artwork Tees', href: '#' },
                            { name: 'Pants', href: '#' },
                            { name: 'Hoodies', href: '#' },
                            { name: 'Swimsuits', href: '#' },
                        ],
                    },
                    {
                        id: 'accessories',
                        name: 'All Accessories',
                        items: [
                            { name: 'Watches', href: '#' },
                            { name: 'Wallets', href: '#' },
                            { name: 'Bags', href: '#' },
                            { name: 'Sunglasses', href: '#' },
                            { name: 'Hats', href: '#' },
                            { name: 'Belts', href: '#' },
                        ],
                    },
                ],
                [
                    {
                        id: 'brands',
                        name: 'Brands',
                        items: [
                            { name: 'Re-Arranged', href: '#' },
                            { name: 'Counterfeit', href: '#' },
                            { name: 'Full Nelson', href: '#' },
                            { name: 'My Way', href: '#' },
                        ],
                    },
                ],
            ],
        },
        {
            id: 'casamento',
            name: 'Casamento',
            featured: [
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
                    imageAlt:
                        'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
                },
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                [
                    {
                        id: 'shoes',
                        name: 'Shoes & Accessories',
                        items: [
                            { name: 'Sneakers', href: '#' },
                            { name: 'Boots', href: '#' },
                            { name: 'Sandals', href: '#' },
                            { name: 'Socks', href: '#' },
                        ],
                    },
                    {
                        id: 'collection',
                        name: 'Shop Collection',
                        items: [
                            { name: 'Everything', href: '#' },
                            { name: 'Core', href: '#' },
                            { name: 'New Arrivals', href: '#' },
                            { name: 'Sale', href: '#' },
                        ],
                    },
                ],
                [
                    {
                        id: 'clothing',
                        name: 'All Clothing',
                        items: [
                            { name: 'Basic Tees', href: '#' },
                            { name: 'Artwork Tees', href: '#' },
                            { name: 'Pants', href: '#' },
                            { name: 'Hoodies', href: '#' },
                            { name: 'Swimsuits', href: '#' },
                        ],
                    },
                    {
                        id: 'accessories',
                        name: 'All Accessories',
                        items: [
                            { name: 'Watches', href: '#' },
                            { name: 'Wallets', href: '#' },
                            { name: 'Bags', href: '#' },
                            { name: 'Sunglasses', href: '#' },
                            { name: 'Hats', href: '#' },
                            { name: 'Belts', href: '#' },
                        ],
                    },
                ],
                [
                    {
                        id: 'brands',
                        name: 'Brands',
                        items: [
                            { name: 'Re-Arranged', href: '#' },
                            { name: 'Counterfeit', href: '#' },
                            { name: 'Full Nelson', href: '#' },
                            { name: 'My Way', href: '#' },
                        ],
                    },
                ],
            ],
        },
        {
            id: 'presente',
            name: 'Presentes Especiais',
            featured: [
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
                    imageAlt:
                        'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
                },
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                [
                    {
                        id: 'shoes',
                        name: 'Shoes & Accessories',
                        items: [
                            { name: 'Sneakers', href: '#' },
                            { name: 'Boots', href: '#' },
                            { name: 'Sandals', href: '#' },
                            { name: 'Socks', href: '#' },
                        ],
                    },
                    {
                        id: 'collection',
                        name: 'Shop Collection',
                        items: [
                            { name: 'Everything', href: '#' },
                            { name: 'Core', href: '#' },
                            { name: 'New Arrivals', href: '#' },
                            { name: 'Sale', href: '#' },
                        ],
                    },
                ],
                [
                    {
                        id: 'clothing',
                        name: 'All Clothing',
                        items: [
                            { name: 'Basic Tees', href: '#' },
                            { name: 'Artwork Tees', href: '#' },
                            { name: 'Pants', href: '#' },
                            { name: 'Hoodies', href: '#' },
                            { name: 'Swimsuits', href: '#' },
                        ],
                    },
                    {
                        id: 'accessories',
                        name: 'All Accessories',
                        items: [
                            { name: 'Watches', href: '#' },
                            { name: 'Wallets', href: '#' },
                            { name: 'Bags', href: '#' },
                            { name: 'Sunglasses', href: '#' },
                            { name: 'Hats', href: '#' },
                            { name: 'Belts', href: '#' },
                        ],
                    },
                ],
                [
                    {
                        id: 'brands',
                        name: 'Brands',
                        items: [
                            { name: 'Re-Arranged', href: '#' },
                            { name: 'Counterfeit', href: '#' },
                            { name: 'Full Nelson', href: '#' },
                            { name: 'My Way', href: '#' },
                        ],
                    },
                ],
            ],
        },
        {
            id: 'sobre',
            name: 'Sobre',
            featured: [
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
                    imageAlt:
                        'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
                },
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                [
                    {
                        id: 'shoes',
                        name: 'Shoes & Accessories',
                        items: [
                            { name: 'Sneakers', href: '#' },
                            { name: 'Boots', href: '#' },
                            { name: 'Sandals', href: '#' },
                            { name: 'Socks', href: '#' },
                        ],
                    },
                    {
                        id: 'collection',
                        name: 'Shop Collection',
                        items: [
                            { name: 'Everything', href: '#' },
                            { name: 'Core', href: '#' },
                            { name: 'New Arrivals', href: '#' },
                            { name: 'Sale', href: '#' },
                        ],
                    },
                ],
                [
                    {
                        id: 'clothing',
                        name: 'All Clothing',
                        items: [
                            { name: 'Basic Tees', href: '#' },
                            { name: 'Artwork Tees', href: '#' },
                            { name: 'Pants', href: '#' },
                            { name: 'Hoodies', href: '#' },
                            { name: 'Swimsuits', href: '#' },
                        ],
                    },
                    {
                        id: 'accessories',
                        name: 'All Accessories',
                        items: [
                            { name: 'Watches', href: '#' },
                            { name: 'Wallets', href: '#' },
                            { name: 'Bags', href: '#' },
                            { name: 'Sunglasses', href: '#' },
                            { name: 'Hats', href: '#' },
                            { name: 'Belts', href: '#' },
                        ],
                    },
                ],
                [
                    {
                        id: 'brands',
                        name: 'Brands',
                        items: [
                            { name: 'Re-Arranged', href: '#' },
                            { name: 'Counterfeit', href: '#' },
                            { name: 'Full Nelson', href: '#' },
                            { name: 'My Way', href: '#' },
                        ],
                    },
                ],
            ],
        },
    ],
    pages: [
        { name: 'Inconvencional Design', href: route('store.collections') },
        // { name: 'Brincos', href: route('store.category',{category:'brincos'}) },
        // { name: 'Anéis', href: route('store.category',{category:'aneis'}) },
        // { name: 'Colares', href: route('store.category',{category:'colares'}) },
        // { name: 'Clipping', href: route('institutional.clipping') },
        // { name: 'Endereços', href: route('institutional.address') },
        // { name: 'Designer', href: route('institutional.designer') },
    ],
}

export default function MobileNavBar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    return (
        <>

            {/* Mobile menu and search (lg-) */}
            <div className="flex-1 flex items-center lg:hidden ee">
                <button type="button" className=" -ml-2 p-2 text-dark" onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>

            {/* Logo (lg-) */}
            <a href="/" className="lg:hidden">
                <span className="sr-only">carla buaiz joias</span>
                <img
                    src="/img/logo.svg"
                     alt=""
                    className="h-20 w-auto"
                />
            </a>

            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={() => setMobileMenuOpen(true)}>>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pt-5 pb-2">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        {/*<XIcon className="h-6 w-6" aria-hidden="true" />*/}
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {navigation.categories.map((category) => (
                                                <Tab
                                                    key={category.name}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                                                            'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                                        )
                                                    }
                                                >
                                                    {category.name}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map((category) => (
                                            <Tab.Panel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                                                <div className="space-y-4">
                                                    {category.featured.map((item, itemIdx) => (
                                                        <div
                                                            key={itemIdx}
                                                            className="group aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md bg-gray-100"
                                                        >
                                                            <img
                                                                src={item.imageSrc}
                                                                alt={item.imageAlt}
                                                                className="object-cover object-center group-hover:opacity-75"
                                                            />
                                                            <div className="flex flex-col justify-end">
                                                                <div className="bg-white bg-opacity-60 p-4 text-base sm:text-sm">
                                                                    <a href={item.href} className="font-medium text-gray-900">
                                                                        <span className="absolute inset-0" aria-hidden="true" />
                                                                        {item.name}
                                                                    </a>
                                                                    <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                                                        Shop now
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                {category.sections.map((column, columnIdx) => (
                                                    <div key={columnIdx} className="space-y-10">
                                                        {column.map((section) => (
                                                            <div key={section.name}>
                                                                <p
                                                                    id={`${category.id}-${section.id}-heading-mobile`}
                                                                    className="font-medium text-gray-900"
                                                                >
                                                                    {section.name}
                                                                </p>
                                                                <ul
                                                                    role="list"
                                                                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                                    className="mt-6 flex flex-col space-y-6"
                                                                >
                                                                    {section.items.map((item) => (
                                                                        <li key={item.name} className="flow-root">
                                                                            <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                                                                {item.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                    {navigation.pages.map((page) => (
                                        <div key={page.name} className="flow-root">
                                            <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                                {page.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-200 py-6 px-4">
                                    <a href="#" className="-m-2 flex items-center p-2">
                                        <img
                                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                                        <span className="sr-only">, change currency</span>
                                    </a>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>

    );
}

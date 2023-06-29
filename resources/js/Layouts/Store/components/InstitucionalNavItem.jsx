import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {Link} from "@inertiajs/react";

const navigation = {
    categories: [
        {
            name: 'Sobre',
            featured: [
                {
                    name: 'Clipping',
                    href: route('institutional.clipping'),
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/assets/clipping.webp',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Sobre Carla Buaiz',
                    href: route('institutional.designer'),
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/assets/carla1.webp',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'Endereços',
                    href: route('institutional.address'),
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/assets/praiadocanto.webp',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'Eventos',
                    href: route('institutional.events'),
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/assets/casacor.webp',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
        },
    ]
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function InstitucionalNavItem() {

    return (
        <>
            {/* Flyout menus */}
            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full justify-center space-x-8">
                    {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                            {({ open }) => (
                                <>
                                    <div className="relative flex">
                                        <Popover.Button
                                            className="flex items-center text-base font-light text-gray-700 hover:text-gray-400"
                                        >
                                            {category.name}
                                        </Popover.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                            <div className="relative bg-white">
                                                <div className="mx-auto max-w-7xl px-8">
                                                    <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                                        {category.featured.map((item) => (
                                                            <div key={item.name} className="group relative">
                                                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                                    <Link href={item.href}>
                                                                    <img
                                                                        src={item.imageSrc}
                                                                        alt={item.imageAlt}
                                                                        className="object-cover object-center"
                                                                    />
                                                                    </Link>
                                                                </div>
                                                                <Link href={item.href} className="mt-4 block font-medium text-gray-900">
                                                                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                    {item.name}
                                                                </Link>
                                                                <p aria-hidden="true" className="mt-1">
                                                                    Shop now
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    ))}
                </div>
            </Popover.Group>
        </>
    )
}

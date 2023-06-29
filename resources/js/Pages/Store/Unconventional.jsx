import Store from '@/Layouts/Store';
import {Head} from '@inertiajs/react';
import React from 'react';

const features = [
    {
        name: 'Atemporalidade',
        description:
            '',
        imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/19.webp',
        imageAlt: 'Printed photo of bag being tossed into the sky on top of grass.',
    },
    {
        name: 'Qualidade',
        description:
            "",
        imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/18.webp',
        imageAlt: 'Double stitched black canvas hook loop.',
    },
    {
        name: 'Tradição',
        description:
            '',
        imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/20.webp',
        imageAlt: 'Black canvas body with chrome zipper and key ring.',
    },
]
const featuredes = [
    {
        name: 'Minimal and thoughtful',
        description:
            'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg',
        imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
    {
        name: 'Refined details',
        description:
            'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
        imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Unconventional({ products }) {

    return (
        <Store>
            <Head title="Topic" />
            <div className="pt-28">
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Protect your device</h2>
                            <p className="mt-4 text-gray-500">
                                As a digital creative, your laptop or tablet is at the center of your work. Keep your device safe with a
                                fabric sleeve that matches in quality and looks.
                            </p>
                        </div>

                        <div className="mt-16 space-y-16">
                            {featuredes.map((feature, featureIdx) => (
                                <div
                                    key={feature.name}
                                    className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                                >
                                    <div
                                        className={classNames(
                                            featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                                            'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                                        )}
                                    >
                                        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                                        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                                    </div>
                                    <div
                                        className={classNames(
                                            featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                                            'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                                        )}
                                    >
                                        <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                                            <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 id="products-heading" className="sr-only">
                            High Jewelry
                        </h2>
                        {/*
                        <div className="flex flex-col items-center text-center pb-8">
                            <h2 id="details-heading" className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
                                High Jewelry
                            </h2>

                            <p className="mt-3 max-w-3xl text-lg text-gray-600">
                                The Fine Details , Our patented padded snack sleeve construction protects your favorite treats from getting smooshed during
                                all-day adventures, long shifts at work, and tough travel schedules.
                            </p>
                        </div>
                        */}
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                            <a className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                    <img
                                        src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/16.webp"
                                        alt="#"
                                        className="object-scale-down"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                    <h3>Beleza</h3>
                                    <p></p>
                                </div>
                                <p className="mt-1 text-sm italic text-gray-500"></p>
                            </a>
                            <a className="group">
                                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                        <img
                                            src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/12.JPG"
                                            alt="#"
                                            className="object-scale-down group-hover:opacity-75"
                                        />
                                    </div>
                                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                        <h3>Originalidade</h3>
                                        <p></p>
                                    </div>
                                    <p className="mt-1 text-sm italic text-gray-500"></p>
                                </a>
                            <a className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                    <img
                                        src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/17.webp"
                                        alt="#"
                                        className="object-scale-down"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                    <h3>Perfeição</h3>
                                    <p></p>
                                </div>
                                <p className="mt-1 text-sm italic text-gray-500"></p>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="mx-auto max-w-7xl py-12 sm:py-12 sm:px-2 lg:px-4">
                        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                            <div className="max-w-3xl">
                                {/*
                                <h2 className="font-semibold text-gray-500">Drawstring Canister</h2>

                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Use it your way</p>
                                <p className="mt-4 text-gray-500">
                                    The Drawstring Canister comes with multiple strap and handle options to adapt throughout your day.
                                    Shoulder sling it, backpack it, or handy carry it.
                                </p>
                                 */}
                            </div>

                            <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                                {features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                                    >
                                        <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                                            <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                                            <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                                        </div>
                                        <div className="flex-auto lg:col-span-7 xl:col-span-8">
                                            <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                                                <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Store>
    );
}

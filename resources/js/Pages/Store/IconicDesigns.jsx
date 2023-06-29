import Store from '@/Layouts/Store';
import {Head} from '@inertiajs/react';
import React from 'react';


const features = [
    {
        //name: 'Minimal and thoughtful',
        name: 'Leveza e movimento',
        description:
            'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
        imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/40.webp',
        imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function IconicDesigns({ products }) {

    return (
        <Store>
            <Head title="Topic" />
            <div className="pt-28">

                {/*
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">

                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Iconic Designs</h2>

                            <p className="mt-4 text-gray-500">
                                As a digital creative, your laptop or tablet is at the center of your work. Keep your device safe with a
                                fabric sleeve that matches in quality and looks.
                            </p>

                        </div>

                        <div className="mt-8 space-y-16">
                            {features.map((feature, featureIdx) => (
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
                */}
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                            <a className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                    <img
                                        src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/57.webp"
                                        alt="#"
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                    <h3></h3>
                                    <p></p>
                                </div>
                                <p className="mt-1 text-sm italic text-gray-500"></p>
                            </a>
                            <a className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                    <img
                                        src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/50.webp"
                                        alt="#"
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                    <h3></h3>
                                    <p></p>
                                </div>
                                <p className="mt-1 text-sm italic text-gray-500"></p>
                            </a>
                            <a className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                    <img
                                        src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/32.webp"
                                        alt="#"
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                    <h3></h3>
                                    <p></p>
                                </div>
                                <p className="mt-1 text-sm italic text-gray-500"></p>
                            </a>
                            <a className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                    <img
                                        src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/36.webp"
                                        alt="#"
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                    <h3></h3>
                                    <p></p>
                                </div>
                                <p className="mt-1 text-sm italic text-gray-500"></p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="py-16 sm:py-6 lg:mx-auto lg:max-w-7xl lg:px-8">
                        <div className="relative w-full overflow-x-auto pb-6">
                            <ul
                                role="list"
                                className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                            >
                                <li className="inline-flex w-64 flex-col text-center lg:w-auto">
                                    <div className="group relative">
                                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md">
                                            <img
                                                src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/703.png"
                                                alt="#"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li className="inline-flex w-64 flex-col text-center lg:w-auto">
                                    <div className="group relative">
                                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md">
                                            <img
                                                src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/502.png"
                                                alt="#"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li className="inline-flex w-64 flex-col text-center lg:w-auto">
                                    <div className="group relative">
                                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md ">
                                            <img
                                                src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/518.png"
                                                alt="#"
                                                className="h-full w-full object-cover object-center "
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li className="inline-flex w-64 flex-col text-center lg:w-auto">
                                    <div className="group relative">
                                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md ">
                                            <img
                                                src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/552.png"
                                                alt="#"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="py-16 sm:py-6 lg:mx-auto lg:max-w-7xl lg:px-8">
                        <div className="relative w-full overflow-x-auto pb-6">
                            <ul
                                role="list"
                                className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                            >
                                <li className="inline-flex w-64 flex-col text-center lg:w-auto">
                                    <div className="group relative">
                                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md">
                                            <img
                                                src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/703.png"
                                                alt="#"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li className="inline-flex w-64 flex-col text-center lg:w-auto">
                                    <div className="group relative">
                                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md">
                                            <img
                                                src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/502.png"
                                                alt="#"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li className="inline-flex w-64 flex-col text-center lg:w-auto">
                                    <div className="group relative">
                                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md ">
                                            <img
                                                src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/518.png"
                                                alt="#"
                                                className="h-full w-full object-cover object-center "
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li className="inline-flex w-64 flex-col text-center lg:w-auto">
                                    <div className="group relative">
                                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md ">
                                            <img
                                                src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/552.png"
                                                alt="#"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                        {/* Details section */}
                        <section aria-labelledby="details-heading">
                            {/*
                            <div className="flex flex-col items-center text-center">
                                <h2 id="details-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    The Fine Details
                                </h2>
                                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                                    Our patented padded snack sleeve construction protects your favorite treats from getting smooshed during
                                    all-day adventures, long shifts at work, and tough travel schedules.
                                </p>
                            </div>
                            */}
                            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
                                <div>
                                    <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                                        <img
                                            src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/28.webp"
                                            alt="Drawstring top with elastic loop closure and textured interior padding."
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    {/*
                                    <p className="mt-8 text-base text-gray-500">
                                        The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220 standard gumballs, or any
                                        combination of on-the-go treats that your heart desires. Yes, we did the math.
                                    </p>
                                    */}
                                </div>
                                <div>
                                    <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                                        <img
                                            src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/23.webp"
                                            alt="Drawstring top with elastic loop closure and textured interior padding."
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    {/*
                                    <p className="mt-8 text-base text-gray-500">
                                        The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220 standard gumballs, or any
                                        combination of on-the-go treats that your heart desires. Yes, we did the math.
                                    </p>
                                    */}
                                </div>
                                <div>
                                    <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                                        <img
                                            src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/27.webp"
                                            alt="Front zipper pouch with included key ring."
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    {/*
                                    <p className="mt-8 text-base text-gray-500">
                                        Up your snack organization game with multiple compartment options. The quick-access stash pouch is ready
                                        for even the most unexpected snack attacks and sharing needs.
                                    </p>
                                    */}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                {/*
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                            <a className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                    <img
                                        src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/23.webp"
                                        alt="#"
                                        className="object-scale-down"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                    <h3></h3>
                                    <p></p>
                                </div>
                                <p className="mt-1 text-sm italic text-gray-500"></p>
                            </a>
                            <a className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                    <img
                                        src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/28.webp"
                                        alt="#"
                                        className="object-scale-down"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                    <h3></h3>
                                    <p></p>
                                </div>
                                <p className="mt-1 text-sm italic text-gray-500"></p>
                            </a>
                            <a className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                    <img
                                        src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/51.webp"
                                        alt="#"
                                        className="object-scale-down group-hover:opacity-75"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                    <h3></h3>
                                    <p></p>
                                </div>
                                <p className="mt-1 text-sm italic text-gray-500"></p>
                            </a>
                            <a className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                    <img
                                        src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/55.webp"
                                        alt="#"
                                        className="object-scale-down"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                    <h3></h3>
                                    <p></p>
                                </div>
                                <p className="mt-1 text-sm italic text-gray-500"></p>
                            </a>
                        </div>
                    </div>
                </div>
                */}
                <div className="bg-white">
                    <div className="mx-auto max-w-7xl py-12 sm:py-12 sm:px-2 lg:px-4">
                        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                            <div className="mt-10 space-y-16">
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
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                            <a className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                    <img
                                        src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/45.webp"
                                        alt="#"
                                        className="object-scale-down group-hover:opacity-75"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                    <h3></h3>
                                    <p></p>
                                </div>
                                <p className="mt-1 text-sm italic text-gray-500"></p>
                            </a>
                            <a className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                    <img
                                        src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/46.webp"
                                        alt="#"
                                        className="object-scale-down"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                    <h3></h3>
                                    <p></p>
                                </div>
                                <p className="mt-1 text-sm italic text-gray-500"></p>
                            </a>
                            <a className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                    <img
                                        src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/34.webp"
                                        alt="#"
                                        className="object-scale-down"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                    <h3></h3>
                                    <p></p>
                                </div>
                                <p className="mt-1 text-sm italic text-gray-500"></p>
                            </a>
                            <a className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                    <img
                                        src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/56.webp"
                                        alt="#"
                                        className="object-scale-down"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                    <h3></h3>
                                    <p></p>
                                </div>
                                <p className="mt-1 text-sm italic text-gray-500"></p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                        {/* Details section */}
                        <section aria-labelledby="details-heading">
                            {/*
                            <div className="flex flex-col items-center text-center">
                                <h2 id="details-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    The Fine Details
                                </h2>
                                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                                    Our patented padded snack sleeve construction protects your favorite treats from getting smooshed during
                                    all-day adventures, long shifts at work, and tough travel schedules.
                                </p>
                            </div>
                            */}
                            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
                                <div>
                                    <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                                        <img
                                            src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/28.webp"
                                            alt="Drawstring top with elastic loop closure and textured interior padding."
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    {/*
                                    <p className="mt-8 text-base text-gray-500">
                                        The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220 standard gumballs, or any
                                        combination of on-the-go treats that your heart desires. Yes, we did the math.
                                    </p>
                                    */}
                                </div>
                                <div>
                                    <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                                        <img
                                            src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/23.webp"
                                            alt="Drawstring top with elastic loop closure and textured interior padding."
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    {/*
                                    <p className="mt-8 text-base text-gray-500">
                                        The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220 standard gumballs, or any
                                        combination of on-the-go treats that your heart desires. Yes, we did the math.
                                    </p>
                                    */}
                                </div>
                                <div>
                                    <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                                        <img
                                            src="https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/27.webp"
                                            alt="Front zipper pouch with included key ring."
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    {/*
                                    <p className="mt-8 text-base text-gray-500">
                                        Up your snack organization game with multiple compartment options. The quick-access stash pouch is ready
                                        for even the most unexpected snack attacks and sharing needs.
                                    </p>
                                    */}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        </Store>
    );
}

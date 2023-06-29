import Store from '@/Layouts/Store';
import {Head} from '@inertiajs/react';
import React from 'react';

const features = [
    {
        name: 'Linhas Elgantes e Atemporais',
        description:
            'Essas Joias são importante patrimônio econômico, que normalmente passa de gerações em gerações. ' +
            'Em razão da longevidade, o design é fundamental, pois além de cumprir todas as expectativas técnicas, estéticas e de originalidade' +
            'precisa continua entregando o mesmos sentimento na grande maioria das vezes por muito mais de 100 anos',
        imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/20.webp',
        imageAlt: 'Black canvas body with chrome zipper and key ring.',
    },
]

const featureSecond = [
    {
        name: 'Qualidade',
        description:
            "",
        imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/18.webp',
        imageAlt: 'Double stitched black canvas hook loop.',
    },
]

const featureTree = [
    {
        name: 'Seleção de Materiais',
        description:
            'A Alta Joalheria, distingue-se pelo uso exclusivo de gemas raras, pefeitamente lapidadas, translucidas e com extraordinária cor',
        imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/19.webp',
        imageAlt: 'Printed photo of bag being tossed into the sky on top of grass.',
    },
]

export default function HighJewelry({ products }) {

    return (
        <Store>
            <Head title="Topic" />
            <div className="pt-28">
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 id="products-heading" className="sr-only">
                            High Jewelry
                        </h2>

                        <div className="flex flex-col items-center text-center pb-8">
                            <h2 id="details-heading" className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
                                High Jewelry
                            </h2>

                            <p className="mt-3 max-w-3xl text-lg text-gray-600">
                                A Alta Joalheria, distingue-se pela dedicação a Beleza, Perfeição, Originalidade, Exclusividade, Atemporalidade.
                            </p>
                        </div>
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
                                    <h3>Raridade e Exclusividade</h3>
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
                <div className="bg-gray-50">
                    <div className="mx-auto max-w-7xl py-12 sm:py-12 sm:px-2 lg:px-4">
                        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                            {/*
                            <div className="max-w-3xl">
                                <h2 className="font-semibold text-gray-500">Drawstring Canister</h2>

                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Use it your way</p>
                                <p className="mt-4 text-gray-500">
                                    The Drawstring Canister comes with multiple strap and handle options to adapt throughout your day.
                                    Shoulder sling it, backpack it, or handy carry it.
                                </p>
                            </div>
                            */}

                            <div className="space-y-16  pt-6 sm:mt-6 sm:pt-6">
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
                                            <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg">
                                                <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900">
                    <div className="mx-auto max-w-7xl py-12 sm:py-12 sm:px-2 lg:px-4">
                        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                            <div className=" mt-10 space-y-10 pt-4 sm:mt-4 sm:pt-4">
                                {featureSecond.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                                    >
                                        <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                                            <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                                            <p className="mt-2 text-sm text-white">{feature.description}</p>
                                        </div>
                                        <div className="flex-auto lg:col-span-7 xl:col-span-8">
                                            <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg">
                                                <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50">
                    <div className="flex flex-col items-center text-center pb-24 pt-12">
                        <h2 id="details-heading" className="text-2xl font-normal tracking-tight text-gray-900 sm:text-2xl">
                            Peça ajuda a um consultor especialista da Carla Buaiz
                        </h2>

                        <p className="mt-3 max-w-3xl text-lg text-gray-600">
                            A Carla Buaiz Joias conta com importante acervo de Joias e gemas extraordinárias de raríssima beleza.
                        </p>
                    </div>


                </div>
                {/*
                <div className="bg-white">
                    <div className="mx-auto max-w-7xl py-12 sm:py-12 sm:px-2 lg:px-4">
                        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                            <div className=" mt-10 space-y-10 pt-4 sm:mt-4 sm:pt-4">
                                {featureTree.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                                    >
                                        <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                                            <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                                            <p className="mt-2 text-sm text-white">{feature.description}</p>
                                        </div>
                                        <div className="flex-auto lg:col-span-7 xl:col-span-8">
                                            <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg">
                                                <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                */}
            </div>
        </Store>
    );
}

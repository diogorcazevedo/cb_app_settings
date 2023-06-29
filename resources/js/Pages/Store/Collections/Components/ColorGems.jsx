import {Link} from "@inertiajs/react";

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    images: [
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3992.webp?t=234234234234',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3976.webp?t=234234234234',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3995.webp?t=234234234234',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            //src: 'https://administracaodosistema.com.br/master/storage/images/3976.webp?t=234234234234',
            //src: 'https://administracaodosistema.com.br/master/storage/images/2919.webp?t=234234234234',
            src: 'https://administracaodosistema.com.br/master/storage/images/3993.webp?t=234234234234',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
}


export default function ColorGems() {
    return (
        <>
            <div className="bg-white">
                <div className="pt-6">
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                            <Link href={route('store.collections_gems')}>
                            <img
                                src={product.images[0].src}
                                alt={product.images[0].alt}
                                className="h-full w-full object-cover object-center"
                            />
                            </Link>
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                <Link href={route('store.collections_bee')}>
                                <img
                                    src={product.images[1].src}
                                    alt={product.images[1].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                                </Link>
                            </div>
                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                <Link href={route('store.collections_gems')}>
                                <img
                                    src={product.images[2].src}
                                    alt={product.images[2].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                                </Link>
                            </div>
                        </div>
                        <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                            <Link href={route('store.collections_gems')}>
                            <img
                                src={product.images[3].src}
                                alt={product.images[3].alt}
                                className="h-full w-full object-cover object-center"
                            />
                            </Link>
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl py-8 px-4 sm:py-8 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-baseline sm:justify-between">
                            <Link href={route('store.collections_gems')}>
                                <h2 className="text-3xl font-normal tracking-tight text-gray-900">Gemas Coloridas CB</h2>
                            </Link>
                            <Link href={route('store.collections_gems')} className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                                Saiba mais
                                <span aria-hidden="true"> &rarr;</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

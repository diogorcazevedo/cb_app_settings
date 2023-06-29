import {Link} from "@inertiajs/react";

const products = [
    {
        id: 1,
        name: 'HONEYCOMB',
        href: '#',
        imageSrc: 'https://administracaodosistema.com.br/master/storage/images/3923.webp?t=234234234234',
        imageAlt: "Coleção Honeycomb.",
        slug: "honeycomb.",
    },
    {
        id: 2,
        name: 'ARQ',
        href: '#',
        imageSrc: 'https://administracaodosistema.com.br/master/storage/images/3928.webp?t=234234234234',
        imageAlt: "Coleção Arq",
        slug: "arq",
    },
    {
        id: 3,
        name: 'ABBRACCIO',
        href: '#',
        imageSrc: 'https://administracaodosistema.com.br/master/storage/images/3951.webp?t=234234234234',
        imageAlt: "Model wearing women's black cotton crewneck tee.",
        slug: "abbraccio",
    },
]

export default function Principal() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-8 px-4 sm:py-8 sm:px-6 lg:px-8">
                {/*
                <div className="sm:flex sm:items-baseline sm:justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Destaques</h2>
                    <Link href={route('store.collections')} className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                        outras coleções
                        <span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>
                */}

                <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="h-96 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-3 sm:h-auto">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 className="mt-4 text-base font-normal text-3xl text-gray-900">
                                <Link href={route('store.collection', { collection: product.slug })}>
                                    <span className="absolute inset-0" />
                                    {product.name}
                                </Link>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 sm:hidden">
                    <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                        Browse all favorites
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

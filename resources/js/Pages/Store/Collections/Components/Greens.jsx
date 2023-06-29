import {Link} from "@inertiajs/react";

export default function Greens() {
    return (

         <div className="mx-auto max-w-5xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-baseline sm:justify-between">
                    <Link href={route('store.collections_green')} className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                        <h2 className="text-3xl font-light tracking-tight text-gray-900"> ESMERALDAS</h2>
                    </Link>
                    <Link href={route('store.collections_green')} className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                        Listar Coleções
                        <span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                    <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                        <Link href={route('store.collections_green')}>
                        <img
                            src="https://administracaodosistema.com.br/master/storage/images/3966.JPG?t=234234234234"
                            alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                            className="object-cover object-center group-hover:opacity-75"
                        />

                        <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
                        </Link>
                    </div>
                    <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                        <Link href={route('store.collections_green')}>
                        <img
                            src="https://administracaodosistema.com.br/master/storage/images/3965.webp?t=234234234234"
                            alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                            className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                        />

                        <div
                            aria-hidden="true"
                            className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                        />
                    </Link>

                    </div>
                    <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                        <Link href={route('store.collections_green')}>
                        <img
                            src="https://administracaodosistema.com.br/master/storage/images/3968.webp?t=234234234234"
                            alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                            className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                        />
                        </Link>
                    </div>
                </div>

                <div className="mt-6 sm:hidden">
                    <a href="@/Pages/Store/Collections/Components/CollectionGreens#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                        Browse all categories
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>

    )
}

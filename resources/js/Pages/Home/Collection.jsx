import {Link} from "@inertiajs/react";

export default function Collection() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-baseline sm:justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Coleções CB</h2>
                    <Link href={route('store.collections')} className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                        visualizar todas
                        <span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                    <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                        <Link href={route('store.collections')}>
                        <img
                            src="https://administracaodosistema.com.br/master/storage/images/3985.webp?t=234234234234"
                            alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                            className="object-cover object-center group-hover:opacity-75"
                        />
                        </Link>
                        <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
                        <div className="flex items-end p-6">
                            <div>
                                <h3 className="font-semibold text-white">
                                    <Link href={route('store.collections')}>
                                        <span className="absolute inset-0" />
                                        SYMPHONY
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                        <Link href={route('store.collections')}>
                        <img
                            src="https://administracaodosistema.com.br/master/storage/images/3986.png?t=234234234234"
                            alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                            className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                        />
                        </Link>
                        <div
                            aria-hidden="true"
                            className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                        />
                        <div className="flex items-end p-6 sm:absolute sm:inset-0">
                            <div>
                                <h3 className="font-semibold text-white">
                                    <Link href={route('store.collections')}>
                                        <span className="absolute inset-0" />
                                        ORGANIC
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                        <Link href={route('store.collections')}>
                        <img
                            src="https://administracaodosistema.com.br/master/storage/images/3910.webp?t=234234234234"
                            alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                            className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                        />
                        </Link>
                        <div
                            aria-hidden="true"
                            className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                        />
                        <div className="flex items-end p-6 sm:absolute sm:inset-0">
                            <div>
                                <h3 className="font-semibold text-white">
                                    <Link href={route('store.collections')}>
                                        <span className="absolute inset-0" />
                                        ARQ
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 sm:hidden">
                    <Link href={route('store.collections')} className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                        Browse all categories
                        <span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

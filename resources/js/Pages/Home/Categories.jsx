import {Link} from "@inertiajs/react";

export default function Categories() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                {/*
                <div className="sm:flex sm:items-baseline sm:justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
                    <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                        all categories
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
                */}

                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                    <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                        <img
                            src="https://administracaodosistema.com.br/master/storage/images/3924.webp?t=234234234234"
                            alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                            className="object-cover object-center group-hover:opacity-75"
                        />
                        <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
                        <div className="flex items-end p-6">
                            <div>
                                <h3 className="font-normal text-white text-3xl">
                                    <Link href={route('store.category',{category:'aneis'})}>
                                        <span className="absolute inset-0" />
                                        Anéis
                                    </Link>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                        <img
                            src="https://administracaodosistema.com.br/master/storage/images/3930.webp?t=234234234234"
                            alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                            className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                        />
                        <div
                            aria-hidden="true"
                            className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                        />
                        <div className="flex items-end p-6 sm:absolute sm:inset-0">
                            <div>
                                <h3 className="font-normal text-white text-3xl">
                                    <Link href={route('store.category',{category:'brincos'})}>
                                        <span className="absolute inset-0" />
                                        Brincos
                                    </Link>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                        <img
                            src="https://administracaodosistema.com.br/master/storage/images/3933.webp?t=234234234234"
                            alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                            className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                        />
                        <div
                            aria-hidden="true"
                            className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                        />
                        <div className="flex items-end p-6 sm:absolute sm:inset-0">
                            <div>
                                <h3 className="font-normal text-white text-3xl">
                                    <Link href={route('store.category',{category:'colares'})}>
                                        <span className="absolute inset-0" />
                                        Colares
                                    </Link>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 sm:hidden">
                    <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                        Browse all categories
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

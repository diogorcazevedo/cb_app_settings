import {Link} from "@inertiajs/react";


export default function CollectionsLoop({collections}) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                   {collections.map((collection) => (
                    <div key={collection.id} className="shadow mb-2">
                        <Link href={route('store.collection', { collection: collection.slug })}>
                        <div className="box-border h-4 w-full p-4 ">
                            <p className="text-sm font-medium text-gray-900">{collection.name}</p>
                        </div>
                        <div className="col-span-1 flex justify-center py-8 px-8">
                            <img
                                src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+collection.images[0]?.path}
                                alt=""
                                className=" object-center object-cover"
                            />
                        </div>
                        </Link>
                    </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

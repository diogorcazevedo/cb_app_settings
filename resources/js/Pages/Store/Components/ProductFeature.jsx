
export default function ProductFeature({features}) {
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="flex flex-col items-center text-center">
                        <h2 id="details-heading" className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl mb-6">
                            Detalhes Finos
                        </h2>
                    </div>
                    <div className="flex justify-around">
                        {features.map((feature) => (
                            <div key={feature.id} className="px-4">
                                <img
                                    src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+feature.path}
                                    alt="#"
                                    className="object-cover rounded-lg object-contain w-full h-[32rem] sm:h-[32rem]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}

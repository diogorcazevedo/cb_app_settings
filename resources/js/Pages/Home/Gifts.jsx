/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const features = [
    {
        name: 'Aniversário',
        description:
            'The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances.',
    },
    {
        name: 'Aniversário de Casamento',
        description: 'Shaped for steady pours and insulated to prevent burns.'
    },
    {
        name: 'Mães',
        description:
            'The one button control has a digital readout for setting temperature and turning the kettle on and off.',
    },
    {
        name: 'Formaturas',
        description: "Designed specifically for controlled pour-overs that don't slash or sputter."
    },
]

export default function Gifts() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-6 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
                    <div>
                        <div className="border-b border-gray-200 pb-10">
                            <h2 className="font-medium text-gray-500">Para construir momentos inesquecíveis</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Presentes</p>
                        </div>

                        <dl className="mt-10 space-y-10">
                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <dt className="text-sm font-medium text-gray-900">{feature.name}</dt>
                                    <dd className="mt-3 text-sm text-gray-500">SAIBA MAIS</dd>*
                                    {/*  <dd className="mt-3 text-sm text-gray-500">{feature.description}</dd>*/}
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div>
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                            <img
                                src="https://administracaodosistema.com.br/master/storage/images/3936.webp?t=234234234234"
                                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src="https://administracaodosistema.com.br/master/storage/images/3924.webp?t=234234234234"
                                    alt="Detail of temperature setting button on kettle bass with digital degree readout."
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src="https://administracaodosistema.com.br/master/storage/images/3924.webp?t=234234234234"
                                    alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

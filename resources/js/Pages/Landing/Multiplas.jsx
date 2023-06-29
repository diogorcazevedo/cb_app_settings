import Store from '@/Layouts/Store';
import {Head, usePage} from '@inertiajs/react';
import React from 'react';

export default function Multiplas() {

    const {auth} = usePage().props
    const { errors } = usePage().props

  return (
    <Store user={auth.user} errors={errors}>
      <Head title="Home" />
        <div className="py-28">
            <div className="bg-white">
                <div className="mx-auto max-w-4xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
                    <div>
                        <img
                            src="/img/celinha.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div>
                        <img
                            src="/img/sessao2.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div>
                        <img
                            src="/img/sessao3.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div>
                        <img
                            src="/img/sessao4.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div>
                        <img
                            src="/img/sessao5.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div>
                        <img
                            src="/img/sessao6.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div>
                        <img
                            src="/img/sessao7.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </div>
        <p></p>
        <p></p>
    </Store>
  );

}

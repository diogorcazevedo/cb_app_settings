import Store from '@/Layouts/Store';
import {Head, usePage} from '@inertiajs/react';
import React from 'react';
import Wedding from "@/Pages/Home/Wedding";
import Category from "@/Pages/Home/Category";
import Collection from "@/Pages/Home/Collection";
import Bee from "@/Pages/Store/Collections/Components/Bee";

export default function Index() {

    const {auth} = usePage().props
    const { errors } = usePage().props

  return (
    <Store user={auth.user} errors={errors}>
      <Head title="Home" />
        <div className="py-28">
            <Bee />
            <Collection />
            <Wedding />
            <Category />
        </div>
    </Store>
  );
}

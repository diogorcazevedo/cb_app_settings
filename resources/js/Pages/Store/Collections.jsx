import Store from '@/Layouts/Store';
import {Head} from '@inertiajs/react';
import React from 'react';
import Emeralds from "@/Pages/Store/Collections/Components/Emeralds";
import Bee from "@/Pages/Store/Collections/Components/Bee";
import ColorGems from "@/Pages/Store/Collections/Components/ColorGems";
import CollectionsBlocks from "@/Pages/Store/Components/CollectionsBlocks";
import Diamonds from "@/Pages/Store/Collections/Components/Diamonds";

export default function Collections({collections }) {


  return (
    <Store>
      <Head title="Home" />
        <div className="py-28">

            <Emeralds/>
            <Bee/>
            <ColorGems/>
            <Diamonds/>
        </div>
        <div className="py-28">
            <CollectionsBlocks collections={collections} />
        </div>
    </Store>
  );
}






import Store from '@/Layouts/Store';
import {Head} from '@inertiajs/react';
import React from 'react';
import CollectionsList from "@/Pages/Store/Components/CollectionsList";


export default function DearCollections({collections }) {


  return (
    <Store>
      <Head title="Collections" />

      <div className="pt-28">

          {collections.map((collection) => (
              <div key={collection.id}>
                  {collection.images[0] &&
                    <CollectionsList collection={collection} />
                  }
              </div>
          ))}
      </div>

    </Store>
  );
}

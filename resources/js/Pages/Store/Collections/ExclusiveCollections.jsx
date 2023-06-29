import Store from '@/Layouts/Store';
import {Head} from '@inertiajs/react';
import React from 'react';
import CollectionsLoop from "@/Pages/Store/Collections/CollectionsLoop";



export default function ExclusiveCollections({collections }) {


  return (
    <Store>
      <Head title="Collections" />

      <div className="pt-28">
              <div>
                <CollectionsLoop collections={collections} />
              </div>

          {/*
          {collections.map((collection) => (
              <div key={collection.id}>
                  {collection.images[0] &&
                    <CollectionsList collection={collection} />
                  }
              </div>
          ))}
          */}

      </div>

    </Store>
  );
}

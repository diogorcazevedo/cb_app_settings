import Store from '@/Layouts/Store';
import {Head} from '@inertiajs/react';
import React from 'react';
import CollectionsList from "@/Pages/Store/Components/CollectionsList";
import ProductsListRegular from "@/Pages/Store/Components/ProductsListRegular";


export default function Group({collections }) {


  return (
      <Store>
          <Head title="Loja Virtual" />
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
          {collections.map((collection) => (
              <div key={collection.id} className="pt-28">
                  {collection.images[0] &&
                      <div>
                          <CollectionsList collection={collection}/>
                          <ProductsListRegular data={collection.products}/>
                      </div>
                  }
              </div>
          ))}
          </div>
      </Store>
  );
}






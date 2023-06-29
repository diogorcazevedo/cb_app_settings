import Store from '@/Layouts/Store';
import { Head } from '@inertiajs/react';
import React,{useEffect} from 'react';
import ProductGalleryImage from "@/Pages/Store/Components/ProductGalleryImage";
import ProductDescriptions from "@/Pages/Store/Components/ProductDescriptions";
import ReactPixel from 'react-facebook-pixel';
import ProductFeature from "@/Pages/Store/Components/ProductFeature";

ReactPixel.init('234802807650698', {}, { debug: true, autoConfig: false });
//ReactPixel.pageView();
//ReactPixel.pageView();
//ReactPixel.fbq('track', 'PageView');



export default function Product({ images,product,cat_img,features}) {

    useEffect(() => {

        ReactPixel.track('ViewContent', {
            content_name: product.name,
            // content_category: 'Apparel & Accessories > Shoes',
            content_ids: [product.id],
            content_type: 'product',
            value: product.stock.offered_price,
            currency: 'BRL',
        })
    }, []);
    
  return (
      <>
          <Store>
              <Head>
                  <title>Home</title>
                  <meta property="og:title" content={product.name}/>
                  <meta property="og:description" content={product.name}/>
                  <meta property="og:url" content={window.location.href}/>
                  <meta property="og:image" content= { "https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/" + images[0].path }/>
                  <meta property="id" content={product.id}/>
                  <meta property="product:retailer_item_id" content={product.id}/>
                  <meta property="product:brand" content="Carla Buaiz Joias"/>
                  <meta property="product:availability" content="in stock"/>
                  <meta property="product:condition" content="new"/>
                  <meta property="product:price:amount" content={product.stock.offered_price}/>
                  <meta property="product:price:currency" content="BRL"/>
                  <meta property="g:google_product_category" content="Apparel & Accessories > Jewelry"/>
                  <meta property="og:google_product_category" content="Apparel & Accessories > Jewelry"/>
                  <meta property="product:google_product_category" content="Apparel & Accessories > Jewelry"/>
                  <meta property="product:gender" content="Female"/>
              </Head>


            <div className="bg-white pt-16">
              <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                  {/* Image gallery */}
                  <ProductGalleryImage images={images} product={product} />
                  {/* Product info */}
                  <ProductDescriptions product={product} />
                    {/* Product detaques */}
                </div>

                  {features != null  &&
                      <ProductFeature features={features} />
                  }

              </div>
            </div>
        </Store>
      </>
  )
}

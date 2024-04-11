import { Region } from "@medusajs/medusa"

import ProductCarousel from "@modules/home/components/featured-products/product-carousel"
// import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"

export default async function FeaturedProducts({ collections, region }: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  return collections.map((collection, index) => (
    <li key={collection.id}>
      {/*<ProductRail collection={collection} region={region} index={index} />*/}
      <ProductCarousel collection={collection} region={region} index={index}/>
    </li>
  ))
}

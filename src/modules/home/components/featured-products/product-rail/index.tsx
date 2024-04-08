import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"
import clsx from "clsx"

export default function ProductRail({ collection, region, index }: {
  collection: ProductCollectionWithPreviews
  region: Region
  index: number
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  // if index % 2 === 0, add a class to the container to change the background color


  return (
    <div className={clsx(index % 2 === 0 ? "bg-[#e7d6bc]" : "bg-[#f8f1f1]", "w-full")}>
      <div className="content-container py-12 small:py-24">

        <div className="flex justify-between mb-8">
          <Text className="txt-xlarge">{collection.title}</Text>
          <InteractiveLink href={`/collections/${collection.handle}`}>
            View all
          </InteractiveLink>
        </div>
        <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36">
          {products &&
            products.map((product) => (
              <li key={product.id}>
                <ProductPreview
                  productPreview={product}
                  region={region}
                  isFeatured
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

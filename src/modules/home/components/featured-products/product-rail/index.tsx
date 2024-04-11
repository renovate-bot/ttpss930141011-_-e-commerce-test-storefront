import { Region } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({ collection, region, index }: {
  collection: ProductCollectionWithPreviews
  region: Region
  index: number
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className={clx(index % 2 === 0 ? "bg-[#fff9eb]" : "bg-[#ffffff]", "w-full")}>
      <div className="content-container py-12 small:py-24">
        <div className="flex justify-between mb-8">
          <p className="text-3xl">{collection.title}</p>
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

import { ProductPreviewType } from "../../../../../types/global"
import ProductPreviewCarousel from "@modules/products/components/product-carousel"

export default function ProductCarousel({ products }: {
  products: ProductPreviewType[]
}) {

  if (!products) return null
  // extend the carousel to show 3 products
  const carouselProducts = [...products, ...products, ...products]

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square flex-none"
          >
            <ProductPreviewCarousel
              productPreview={product}
              isFeatured
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
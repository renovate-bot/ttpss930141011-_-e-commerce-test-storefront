import { Region } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../../components/ui/carousel"

type ProductCarouselProps = {
  collection: ProductCollectionWithPreviews
  region: Region
  index: number
  showType?: "auto" | "scroll"
}

export default function ProductCarousel({ collection, region, index/* showType = "auto" */ }: ProductCarouselProps) {
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
        <div className="flex">
          <Carousel className={"w-full"} pluginsOptions={index % 2 === 0 ? "autoscroll" : "autoplay"}>
            <CarouselContent className={"-ml-1"}>
              {
                products && products.map((product) => (
                  <CarouselItem key={product.id} className={"pl-1 basis-1/3"}>
                    <ProductPreview
                      productPreview={product}
                      region={region}
                      isFeatured
                    />
                  </CarouselItem>
                ))
              }
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

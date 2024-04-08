import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import ProductCarousel from "@modules/home/components/featured-products/product-carousel"

export const metadata: Metadata = {
  title: "Nick's Sweet Treats: Artisanal Cookies Delivered to Your Door",
  description:
    "Welcome to Nick's Sweet Treats, where every bite is a delight! Indulge in our artisanal cookies, crafted with care and delivered straight to your door. From classic chocolate chip to exotic flavors, there's something for everyone. Order now and treat yourself to the sweetest moments!",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string,
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        }),
      ),
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0],
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      }),
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  },
)

const getProducts = cache(
  async (countryCode: string) => {
    const { response } = await getProductsList({ countryCode })
    return response.products as unknown as Product[]
  },
)

export default async function Home({
                                     params: { countryCode },
                                   }: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const products = await getProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="py-2">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
        {/*    Products carousel*/}
        <ul className="flex flex-col gap-x-6">
          <ProductCarousel products={products} />
        </ul>
      </div>
    </>
  )
}

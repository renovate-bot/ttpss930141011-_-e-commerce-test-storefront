import { ProductPreviewType } from "types/global"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"

export default async function ProductPreviewCarousel({ productPreview, isFeatured }: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
}) {
  if (!productPreview) return null

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div data-testid="product-wrapper">
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="small"
          isFeatured={isFeatured}
        />

      </div>
    </LocalizedClientLink>
  )
}

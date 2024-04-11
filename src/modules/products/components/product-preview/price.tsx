import { clx } from "@medusajs/ui"

import { PriceType } from "../product-actions"

export default async function PreviewPrice({ price }: { price: PriceType }) {
  return (
    <span className={"flex gap-1 flex-col md:flex-row"}>
      {price.price_type === "sale" && (
        <p className="line-through text-ui-fg-muted text-lg" data-testid="original-price">
          {price.original_price}
        </p>
      )}
      <p
        className={clx("text-ui-fg-muted font-medium text-lg", {
          "text-ui-fg-interactive": price.price_type === "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </p>
    </span>
  )
}

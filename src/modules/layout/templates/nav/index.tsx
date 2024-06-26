import { Suspense } from "react"
import { ShoppingCart, MagnifyingGlass } from "@medusajs/icons"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"
// import Logo from "../../../../../public/images/logo/logo.png"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-[#f9f7e9] border-ui-border-base">
        <nav
          className="content-container text-base text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">

          <div className="flex items-center gap-x-3 md:gap-x-6 h-full flex-1 basis-0 justify-start">
            <div className="flex lg:hidden flex-1 basis-0 h-full items-center">
              <div className="h-full">
                <SideMenu regions={regions} />
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-x-3 md:gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/"
                data-testid="nav-product-link"
              >
                HOME
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/store"
                data-testid="nav-product-link"
              >
                SHOP ALL
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/contact"
                data-testid="nav-product-link"
              >
                CONTACT US
              </LocalizedClientLink>
            </div>
          </div>


          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <Image src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/logo.png`} alt={"Logo"} width={0} height={0}
                     className="w-full h-auto" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 20vw" />
            </LocalizedClientLink>
          </div>


          <div className="flex items-center gap-x-3 md:gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="flex items-center h-full gap-x-3 md:gap-x-6">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  <MagnifyingGlass aria-label="Search" />
                </LocalizedClientLink>
              )}
              {/*<LocalizedClientLink*/}
              {/*  className="hover:text-ui-fg-base"*/}
              {/*  href="/account"*/}
              {/*  data-testid="nav-account-link"*/}
              {/*>*/}
              {/*  <User />*/}
              {/*</LocalizedClientLink>*/}
            </div>

            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  {/*Cart (0)*/}
                  <ShoppingCart aria-label="Cart" />
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}

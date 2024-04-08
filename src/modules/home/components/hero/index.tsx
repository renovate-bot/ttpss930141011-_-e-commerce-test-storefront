import { Heading } from "@medusajs/ui"
import Cookie1 from "../../../../../public/images/hero/banner.webp"
import clsx from "clsx"
import Image from "next/image"
import { cookie } from "../../../../app/fonts"


const Hero = () => {
  return (
    <div
      className="h-[60vh] w-full border-b border-ui-border-base relative clip-path-inset-0"
    >
      <div className="w-full h-full fixed left-0 top-0">
        <Image
          src={Cookie1.src}
          alt="Cookie"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      <div
        className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <div className="rounded-lg bg-[#fcf3e7] bg-opacity-80 p-8">
          <div className="border border-slate-500 p-8 rounded-lg bg-opacity-80">
            <Heading
              level="h1"
              className={clsx("text-5xl leading-10 text-ui-fg-base font-normal", cookie.className)}
            >
              Welcome to Nick's Sweet Treats
            </Heading>
            <Heading level="h2" className="text-2xl leading-10 text-ui-fg-subtle font-semibold">
              Artisanal Cookies Delivered to Your Door
            </Heading>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
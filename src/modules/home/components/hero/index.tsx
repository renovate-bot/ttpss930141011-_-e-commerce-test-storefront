import {Heading} from "@medusajs/ui"
import Cookie1 from "../../../../../public/images/carousel/1.jpg";
import {Cookie} from "next/font/google"
import clsx from "clsx"

const cookie = Cookie({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
})
const Hero = () => {
    return (
        <div
            className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle bg-cover bg-fixed bg-center bg-no-repeat"
            style={{backgroundImage: `url(${Cookie1.src})`,}}>
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
                        <Heading
                            level="h2"
                            className="text-2xl leading-10 text-ui-fg-subtle font-semibold"

                        >
                            Artisanal Cookies Delivered to Your Door
                        </Heading>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nick's Sweet Treats",
    short_name: "Nick's Sweet Treats",
    description: "Welcome to Nick's Sweet Treats, where every bite is a delight! From classic chocolate chip to exotic flavors, there's something for everyone. Order now and treat yourself to the sweetest moments!",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f7e9",
    theme_color: "#f9f7e9",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}

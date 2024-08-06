import { HeroOne2x1 } from "components/banners/hero-one-2x1";
import Category, { CategoryType } from "components/category";
import Footer from "components/layout/footer";
import Slider from "components/slider";
import { LivePreviewQuery } from "contentstack";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

const testData: CategoryType[] = [
  {
    image: {
      src: "https://checkout.overstock.com/cdn/shop/collections/Fickle-Cream-Boucle-2-Piece-Modular-RAF-Sofa.jpg?v=1710949913&width=460",
      srcset: "//checkout.overstock.com/cdn/shop/collections/Fickle-Cream-Boucle-2-Piece-Modular-RAF-Sofa.jpg?v=1710949913&width=320 320w, //checkout.overstock.com/cdn/shop/collections/Fickle-Cream-Boucle-2-Piece-Modular-RAF-Sofa.jpg?v=1710949913&width=460 460w, //checkout.overstock.com/cdn/shop/collections/Fickle-Cream-Boucle-2-Piece-Modular-RAF-Sofa.jpg?v=1710949913&width=600 600w, //checkout.overstock.com/cdn/shop/collections/Fickle-Cream-Boucle-2-Piece-Modular-RAF-Sofa.jpg?v=1710949913&width=700 700w, //checkout.overstock.com/cdn/shop/collections/Fickle-Cream-Boucle-2-Piece-Modular-RAF-Sofa.jpg?v=1710949913&width=800 800w, //checkout.overstock.com/cdn/shop/collections/Fickle-Cream-Boucle-2-Piece-Modular-RAF-Sofa.jpg?v=1710949913&width=900 900w, //checkout.overstock.com/cdn/shop/collections/Fickle-Cream-Boucle-2-Piece-Modular-RAF-Sofa.jpg?v=1710949913&width=1200 1200w",
      sizes: "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt: "Furniture"
    },
    "title": "Furniture",
    "link": "/collections/furniture"
  },
  {
    "image": {
      src: "https://checkout.overstock.com/cdn/shop/collections/Hanlee-Outdoor-Rustic-Acacia-Wood-Folding-Adirondack-Chair-_28Set-of-2_29-by-Christopher-Knight-Home.jpg?v=1710950811&width=460",
      srcset: "//checkout.overstock.com/cdn/shop/collections/Hanlee-Outdoor-Rustic-Acacia-Wood-Folding-Adirondack-Chair-_28Set-of-2_29-by-Christopher-Knight-Home.jpg?v=1710950811&width=320 320w, //checkout.overstock.com/cdn/shop/collections/Hanlee-Outdoor-Rustic-Acacia-Wood-Folding-Adirondack-Chair-_28Set-of-2_29-by-Christopher-Knight-Home.jpg?v=1710950811&width=460 460w, //checkout.overstock.com/cdn/shop/collections/Hanlee-Outdoor-Rustic-Acacia-Wood-Folding-Adirondack-Chair-_28Set-of-2_29-by-Christopher-Knight-Home.jpg?v=1710950811&width=600 600w, //checkout.overstock.com/cdn/shop/collections/Hanlee-Outdoor-Rustic-Acacia-Wood-Folding-Adirondack-Chair-_28Set-of-2_29-by-Christopher-Knight-Home.jpg?v=1710950811&width=700 700w, //checkout.overstock.com/cdn/shop/collections/Hanlee-Outdoor-Rustic-Acacia-Wood-Folding-Adirondack-Chair-_28Set-of-2_29-by-Christopher-Knight-Home.jpg?v=1710950811&width=800 800w, //checkout.overstock.com/cdn/shop/collections/Hanlee-Outdoor-Rustic-Acacia-Wood-Folding-Adirondack-Chair-_28Set-of-2_29-by-Christopher-Knight-Home.jpg?v=1710950811&width=900 900w, //checkout.overstock.com/cdn/shop/collections/Hanlee-Outdoor-Rustic-Acacia-Wood-Folding-Adirondack-Chair-_28Set-of-2_29-by-Christopher-Knight-Home.jpg?v=1710950811&width=1200 1200w",
      sizes: "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt: "Outdoor"
    },
    "title": "Outdoor",
    "link": "/collections/outdoor"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/collections/Alexander-Home-Grant-Modern-Abstract-Area-Rug.jpg?v=1710949885&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/collections/Alexander-Home-Grant-Modern-Abstract-Area-Rug.jpg?v=1710949885&width=320 320w, //checkout.overstock.com/cdn/shop/collections/Alexander-Home-Grant-Modern-Abstract-Area-Rug.jpg?v=1710949885&width=460 460w, //checkout.overstock.com/cdn/shop/collections/Alexander-Home-Grant-Modern-Abstract-Area-Rug.jpg?v=1710949885&width=600 600w, //checkout.overstock.com/cdn/shop/collections/Alexander-Home-Grant-Modern-Abstract-Area-Rug.jpg?v=1710949885&width=700 700w, //checkout.overstock.com/cdn/shop/collections/Alexander-Home-Grant-Modern-Abstract-Area-Rug.jpg?v=1710949885&width=800 800w, //checkout.overstock.com/cdn/shop/collections/Alexander-Home-Grant-Modern-Abstract-Area-Rug.jpg?v=1710949885&width=900 900w, //checkout.overstock.com/cdn/shop/collections/Alexander-Home-Grant-Modern-Abstract-Area-Rug.jpg?v=1710949885&width=1200 1200w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "Rugs",
    },
    
    "title": "Rugs",
    "link": "/collections/rugs"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/collections/Brown-Seagrass-Bohemian-Vase.jpg?v=1710949289&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/collections/Brown-Seagrass-Bohemian-Vase.jpg?v=1710949289&width=320 320w, //checkout.overstock.com/cdn/shop/collections/Brown-Seagrass-Bohemian-Vase.jpg?v=1710949289&width=460 460w, //checkout.overstock.com/cdn/shop/collections/Brown-Seagrass-Bohemian-Vase.jpg?v=1710949289&width=600 600w, //checkout.overstock.com/cdn/shop/collections/Brown-Seagrass-Bohemian-Vase.jpg?v=1710949289&width=700 700w, //checkout.overstock.com/cdn/shop/collections/Brown-Seagrass-Bohemian-Vase.jpg?v=1710949289&width=800 800w, //checkout.overstock.com/cdn/shop/collections/Brown-Seagrass-Bohemian-Vase.jpg?v=1710949289&width=900 900w, //checkout.overstock.com/cdn/shop/collections/Brown-Seagrass-Bohemian-Vase.jpg?v=1710949289&width=1200 1200w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "Home Decor",
    },
    
    "title": "Home Decor",
    "link": "/collections/home-decor"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/collections/Auriya-14k-Gold-1ctw-Oval-Moissanite-Halo-Diamond-Engagement-Ring-1-5ctw.jpg?v=1710950215&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/collections/Auriya-14k-Gold-1ctw-Oval-Moissanite-Halo-Diamond-Engagement-Ring-1-5ctw.jpg?v=1710950215&width=320 320w, //checkout.overstock.com/cdn/shop/collections/Auriya-14k-Gold-1ctw-Oval-Moissanite-Halo-Diamond-Engagement-Ring-1-5ctw.jpg?v=1710950215&width=460 460w, //checkout.overstock.com/cdn/shop/collections/Auriya-14k-Gold-1ctw-Oval-Moissanite-Halo-Diamond-Engagement-Ring-1-5ctw.jpg?v=1710950215&width=600 600w, //checkout.overstock.com/cdn/shop/collections/Auriya-14k-Gold-1ctw-Oval-Moissanite-Halo-Diamond-Engagement-Ring-1-5ctw.jpg?v=1710950215&width=700 700w, //checkout.overstock.com/cdn/shop/collections/Auriya-14k-Gold-1ctw-Oval-Moissanite-Halo-Diamond-Engagement-Ring-1-5ctw.jpg?v=1710950215&width=800 800w, //checkout.overstock.com/cdn/shop/collections/Auriya-14k-Gold-1ctw-Oval-Moissanite-Halo-Diamond-Engagement-Ring-1-5ctw.jpg?v=1710950215&width=900 900w, //checkout.overstock.com/cdn/shop/collections/Auriya-14k-Gold-1ctw-Oval-Moissanite-Halo-Diamond-Engagement-Ring-1-5ctw.jpg?v=1710950215&width=1200 1200w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "Jewelry",
    },    
    "title": "Jewelry",
    "link": "/collections/jewelry-watches"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/files/30_22-Freestanding-Bathroom-Vanity-with-Soft-Closing-Drawers_3efa869f-ecc2-416f-876a-2705c925359b.jpg?v=1720507037&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/files/30_22-Freestanding-Bathroom-Vanity-with-Soft-Closing-Drawers_3efa869f-ecc2-416f-876a-2705c925359b.jpg?v=1720507037&width=320 320w, //checkout.overstock.com/cdn/shop/files/30_22-Freestanding-Bathroom-Vanity-with-Soft-Closing-Drawers_3efa869f-ecc2-416f-876a-2705c925359b.jpg?v=1720507037&width=460 460w, //checkout.overstock.com/cdn/shop/files/30_22-Freestanding-Bathroom-Vanity-with-Soft-Closing-Drawers_3efa869f-ecc2-416f-876a-2705c925359b.jpg?v=1720507037&width=600 600w, //checkout.overstock.com/cdn/shop/files/30_22-Freestanding-Bathroom-Vanity-with-Soft-Closing-Drawers_3efa869f-ecc2-416f-876a-2705c925359b.jpg?v=1720507037&width=700 700w, //checkout.overstock.com/cdn/shop/files/30_22-Freestanding-Bathroom-Vanity-with-Soft-Closing-Drawers_3efa869f-ecc2-416f-876a-2705c925359b.jpg?v=1720507037&width=800 800w, //checkout.overstock.com/cdn/shop/files/30_22-Freestanding-Bathroom-Vanity-with-Soft-Closing-Drawers_3efa869f-ecc2-416f-876a-2705c925359b.jpg?v=1720507037&width=900 900w, //checkout.overstock.com/cdn/shop/files/30_22-Freestanding-Bathroom-Vanity-with-Soft-Closing-Drawers_3efa869f-ecc2-416f-876a-2705c925359b.jpg?v=1720507037&width=1200 1200w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "",
    },
    
    "title": "Home Improvement",
    "link": "/collections/home-improvement"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/collections/Acroma-20-light-Modern-Farmhouse-40In-Round-Wagon-Wheel-Chandelier.jpg?v=1710950168&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/collections/Acroma-20-light-Modern-Farmhouse-40In-Round-Wagon-Wheel-Chandelier.jpg?v=1710950168&width=320 320w, //checkout.overstock.com/cdn/shop/collections/Acroma-20-light-Modern-Farmhouse-40In-Round-Wagon-Wheel-Chandelier.jpg?v=1710950168&width=460 460w, //checkout.overstock.com/cdn/shop/collections/Acroma-20-light-Modern-Farmhouse-40In-Round-Wagon-Wheel-Chandelier.jpg?v=1710950168&width=600 600w, //checkout.overstock.com/cdn/shop/collections/Acroma-20-light-Modern-Farmhouse-40In-Round-Wagon-Wheel-Chandelier.jpg?v=1710950168&width=700 700w, //checkout.overstock.com/cdn/shop/collections/Acroma-20-light-Modern-Farmhouse-40In-Round-Wagon-Wheel-Chandelier.jpg?v=1710950168&width=800 800w, //checkout.overstock.com/cdn/shop/collections/Acroma-20-light-Modern-Farmhouse-40In-Round-Wagon-Wheel-Chandelier.jpg?v=1710950168&width=900 900w, //checkout.overstock.com/cdn/shop/collections/Acroma-20-light-Modern-Farmhouse-40In-Round-Wagon-Wheel-Chandelier.jpg?v=1710950168&width=1200 1200w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "Lighting",
    },
    
    "title": "Lighting",
    "link": "/collections/lighting"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/files/Garment-Rack-White-Freestanding-Walk-in-Wood-Closet-System-with-Metal-Frame-and-4-Drawer_2C-Bedroom-Clothing-Armoires_182ecc88-40fd-43e5-ba4a-4d71265ab20b.jpg?v=1720076590&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/files/Garment-Rack-White-Freestanding-Walk-in-Wood-Closet-System-with-Metal-Frame-and-4-Drawer_2C-Bedroom-Clothing-Armoires_182ecc88-40fd-43e5-ba4a-4d71265ab20b.jpg?v=1720076590&width=320 320w, //checkout.overstock.com/cdn/shop/files/Garment-Rack-White-Freestanding-Walk-in-Wood-Closet-System-with-Metal-Frame-and-4-Drawer_2C-Bedroom-Clothing-Armoires_182ecc88-40fd-43e5-ba4a-4d71265ab20b.jpg?v=1720076590&width=460 460w, //checkout.overstock.com/cdn/shop/files/Garment-Rack-White-Freestanding-Walk-in-Wood-Closet-System-with-Metal-Frame-and-4-Drawer_2C-Bedroom-Clothing-Armoires_182ecc88-40fd-43e5-ba4a-4d71265ab20b.jpg?v=1720076590&width=600 600w, //checkout.overstock.com/cdn/shop/files/Garment-Rack-White-Freestanding-Walk-in-Wood-Closet-System-with-Metal-Frame-and-4-Drawer_2C-Bedroom-Clothing-Armoires_182ecc88-40fd-43e5-ba4a-4d71265ab20b.jpg?v=1720076590&width=700 700w, //checkout.overstock.com/cdn/shop/files/Garment-Rack-White-Freestanding-Walk-in-Wood-Closet-System-with-Metal-Frame-and-4-Drawer_2C-Bedroom-Clothing-Armoires_182ecc88-40fd-43e5-ba4a-4d71265ab20b.jpg?v=1720076590&width=800 800w, //checkout.overstock.com/cdn/shop/files/Garment-Rack-White-Freestanding-Walk-in-Wood-Closet-System-with-Metal-Frame-and-4-Drawer_2C-Bedroom-Clothing-Armoires_182ecc88-40fd-43e5-ba4a-4d71265ab20b.jpg?v=1720076590&width=900 900w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "Clothing And Shoes",
    },    
    "title": "Clothing And Shoes",
    "link": "/collections/clothing-shoes"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/files/Enova-Home-Storage-Bins-Fabric-Box-_28Set-of-6_29_61f070b5-a2f3-4a24-8c55-5a02448cd45d.jpg?v=1720024223&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/files/Enova-Home-Storage-Bins-Fabric-Box-_28Set-of-6_29_61f070b5-a2f3-4a24-8c55-5a02448cd45d.jpg?v=1720024223&width=320 320w, //checkout.overstock.com/cdn/shop/files/Enova-Home-Storage-Bins-Fabric-Box-_28Set-of-6_29_61f070b5-a2f3-4a24-8c55-5a02448cd45d.jpg?v=1720024223&width=460 460w, //checkout.overstock.com/cdn/shop/files/Enova-Home-Storage-Bins-Fabric-Box-_28Set-of-6_29_61f070b5-a2f3-4a24-8c55-5a02448cd45d.jpg?v=1720024223&width=600 600w, //checkout.overstock.com/cdn/shop/files/Enova-Home-Storage-Bins-Fabric-Box-_28Set-of-6_29_61f070b5-a2f3-4a24-8c55-5a02448cd45d.jpg?v=1720024223&width=700 700w, //checkout.overstock.com/cdn/shop/files/Enova-Home-Storage-Bins-Fabric-Box-_28Set-of-6_29_61f070b5-a2f3-4a24-8c55-5a02448cd45d.jpg?v=1720024223&width=800 800w, //checkout.overstock.com/cdn/shop/files/Enova-Home-Storage-Bins-Fabric-Box-_28Set-of-6_29_61f070b5-a2f3-4a24-8c55-5a02448cd45d.jpg?v=1720024223&width=900 900w, //checkout.overstock.com/cdn/shop/files/Enova-Home-Storage-Bins-Fabric-Box-_28Set-of-6_29_61f070b5-a2f3-4a24-8c55-5a02448cd45d.jpg?v=1720024223&width=1200 1200w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "Storage And Organization",
    },
    
    "title": "Storage And Organization",
    "link": "/collections/storage-organization"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/collections/Bare-Home-Hypoallergenic-Down-Alternative-Comforter-Set.jpg?v=1710949250&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/collections/Bare-Home-Hypoallergenic-Down-Alternative-Comforter-Set.jpg?v=1710949250&width=320 320w, //checkout.overstock.com/cdn/shop/collections/Bare-Home-Hypoallergenic-Down-Alternative-Comforter-Set.jpg?v=1710949250&width=460 460w, //checkout.overstock.com/cdn/shop/collections/Bare-Home-Hypoallergenic-Down-Alternative-Comforter-Set.jpg?v=1710949250&width=600 600w, //checkout.overstock.com/cdn/shop/collections/Bare-Home-Hypoallergenic-Down-Alternative-Comforter-Set.jpg?v=1710949250&width=700 700w, //checkout.overstock.com/cdn/shop/collections/Bare-Home-Hypoallergenic-Down-Alternative-Comforter-Set.jpg?v=1710949250&width=800 800w, //checkout.overstock.com/cdn/shop/collections/Bare-Home-Hypoallergenic-Down-Alternative-Comforter-Set.jpg?v=1710949250&width=900 900w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "Bedding",
    },    
    "title": "Bedding",
    "link": "/collections/bedding"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/collections/Ch_C3_A2teau-21.5_22-Right-Side-Faucet-Wall-Mount-Bathroom-Sink-with-Chrome-Towel-Bar.jpg?v=1710951880&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/collections/Ch_C3_A2teau-21.5_22-Right-Side-Faucet-Wall-Mount-Bathroom-Sink-with-Chrome-Towel-Bar.jpg?v=1710951880&width=320 320w, //checkout.overstock.com/cdn/shop/collections/Ch_C3_A2teau-21.5_22-Right-Side-Faucet-Wall-Mount-Bathroom-Sink-with-Chrome-Towel-Bar.jpg?v=1710951880&width=460 460w, //checkout.overstock.com/cdn/shop/collections/Ch_C3_A2teau-21.5_22-Right-Side-Faucet-Wall-Mount-Bathroom-Sink-with-Chrome-Towel-Bar.jpg?v=1710951880&width=600 600w, //checkout.overstock.com/cdn/shop/collections/Ch_C3_A2teau-21.5_22-Right-Side-Faucet-Wall-Mount-Bathroom-Sink-with-Chrome-Towel-Bar.jpg?v=1710951880&width=700 700w, //checkout.overstock.com/cdn/shop/collections/Ch_C3_A2teau-21.5_22-Right-Side-Faucet-Wall-Mount-Bathroom-Sink-with-Chrome-Towel-Bar.jpg?v=1710951880&width=800 800w, //checkout.overstock.com/cdn/shop/collections/Ch_C3_A2teau-21.5_22-Right-Side-Faucet-Wall-Mount-Bathroom-Sink-with-Chrome-Towel-Bar.jpg?v=1710951880&width=900 900w, //checkout.overstock.com/cdn/shop/collections/Ch_C3_A2teau-21.5_22-Right-Side-Faucet-Wall-Mount-Bathroom-Sink-with-Chrome-Towel-Bar.jpg?v=1710951880&width=1200 1200w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "Bath",
    },    
    "title": "Bath",
    "link": "/collections/bath"
  },
]

export default function HomePage({
  searchParams,
}: {
  searchParams: LivePreviewQuery | undefined;
}) {
  return (
    <>
      <HeroOne2x1 searchParams={searchParams} />
      <div className="container mx-auto py-4 px-4 lg:px-6">
        <div className="grid gap-4 md:grid-cols-3 w-full">
          <div>
            <div className="aspect-square bg-black w-full" />
          </div>
          <div>
            <div className="aspect-square bg-black w-full" />
          </div>
          <div>
            <div className="aspect-square bg-black w-full" />
          </div>
        </div>
      </div>
      <div className="py-4 w-full">
        <div className="w-full aspect-[5/1] bg-black" />
      </div>
      <div className="container mx-auto py-4 px-4 lg:px-6">
      <h2 className="text-[36px]/[48px] font-bold">Featured Deals</h2>
      </div>
      <div className="container mx-auto py-4 px-4 lg:px-6">
        <div className="grid gap-4 md:grid-cols-3 w-full">
        <div className="col-span-full"><h2 className="text-[36px]/[48px] font-bold">Discover Brands You{"'"}ll Love</h2></div>
          <div>
            <div className="aspect-[9/5] bg-black w-full" />
          </div>
          <div>
          <div className="aspect-[9/5] bg-black w-full" />
          </div>
          <div>
          <div className="aspect-[9/5] bg-black w-full" />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 px-4 lg:px-6">
        <div className="grid gap-4 md:grid-cols-4 w-full">
          <div>
            <div className="aspect-square bg-black w-full" />
          </div>
          <div>
            <div className="aspect-square bg-black w-full" />
          </div>
          <div>
            <div className="aspect-square bg-black w-full" />
          </div>
          <div>
            <div className="aspect-square bg-black w-full" />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 px-4 lg:px-6 gap-4 grid grid-cols-1">
        <h2 className="text-[36px]/[48px] font-bold">Shop By Category</h2>
        <Slider>
          {testData.map((category: CategoryType, idx: number) => (
            <Category key={`category-${idx}`} category={category} />
          ))}
        </Slider>
      </div>
      <Footer />
    </>
  );
}

import Category, { CategoryType } from "components/category";
import Slider from "components/slider";
import type { LivePreviewQuery } from "contentstack";
import { getHomePage } from "lib/contentstack";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  description:
    "Crazy-Good Deals",
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
    title: "Furniture",
    url: "/collections/furniture"
  },
  {
    "image": {
      src: "https://checkout.overstock.com/cdn/shop/collections/Hanlee-Outdoor-Rustic-Acacia-Wood-Folding-Adirondack-Chair-_28Set-of-2_29-by-Christopher-Knight-Home.jpg?v=1710950811&width=460",
      srcset: "//checkout.overstock.com/cdn/shop/collections/Hanlee-Outdoor-Rustic-Acacia-Wood-Folding-Adirondack-Chair-_28Set-of-2_29-by-Christopher-Knight-Home.jpg?v=1710950811&width=320 320w, //checkout.overstock.com/cdn/shop/collections/Hanlee-Outdoor-Rustic-Acacia-Wood-Folding-Adirondack-Chair-_28Set-of-2_29-by-Christopher-Knight-Home.jpg?v=1710950811&width=460 460w, //checkout.overstock.com/cdn/shop/collections/Hanlee-Outdoor-Rustic-Acacia-Wood-Folding-Adirondack-Chair-_28Set-of-2_29-by-Christopher-Knight-Home.jpg?v=1710950811&width=600 600w, //checkout.overstock.com/cdn/shop/collections/Hanlee-Outdoor-Rustic-Acacia-Wood-Folding-Adirondack-Chair-_28Set-of-2_29-by-Christopher-Knight-Home.jpg?v=1710950811&width=700 700w, //checkout.overstock.com/cdn/shop/collections/Hanlee-Outdoor-Rustic-Acacia-Wood-Folding-Adirondack-Chair-_28Set-of-2_29-by-Christopher-Knight-Home.jpg?v=1710950811&width=800 800w, //checkout.overstock.com/cdn/shop/collections/Hanlee-Outdoor-Rustic-Acacia-Wood-Folding-Adirondack-Chair-_28Set-of-2_29-by-Christopher-Knight-Home.jpg?v=1710950811&width=900 900w, //checkout.overstock.com/cdn/shop/collections/Hanlee-Outdoor-Rustic-Acacia-Wood-Folding-Adirondack-Chair-_28Set-of-2_29-by-Christopher-Knight-Home.jpg?v=1710950811&width=1200 1200w",
      sizes: "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt: "Outdoor"
    },
    title: "Outdoor",
    url: "/collections/outdoor"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/collections/Alexander-Home-Grant-Modern-Abstract-Area-Rug.jpg?v=1710949885&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/collections/Alexander-Home-Grant-Modern-Abstract-Area-Rug.jpg?v=1710949885&width=320 320w, //checkout.overstock.com/cdn/shop/collections/Alexander-Home-Grant-Modern-Abstract-Area-Rug.jpg?v=1710949885&width=460 460w, //checkout.overstock.com/cdn/shop/collections/Alexander-Home-Grant-Modern-Abstract-Area-Rug.jpg?v=1710949885&width=600 600w, //checkout.overstock.com/cdn/shop/collections/Alexander-Home-Grant-Modern-Abstract-Area-Rug.jpg?v=1710949885&width=700 700w, //checkout.overstock.com/cdn/shop/collections/Alexander-Home-Grant-Modern-Abstract-Area-Rug.jpg?v=1710949885&width=800 800w, //checkout.overstock.com/cdn/shop/collections/Alexander-Home-Grant-Modern-Abstract-Area-Rug.jpg?v=1710949885&width=900 900w, //checkout.overstock.com/cdn/shop/collections/Alexander-Home-Grant-Modern-Abstract-Area-Rug.jpg?v=1710949885&width=1200 1200w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "Rugs",
    },
    
    title: "Rugs",
    url: "/collections/rugs"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/collections/Brown-Seagrass-Bohemian-Vase.jpg?v=1710949289&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/collections/Brown-Seagrass-Bohemian-Vase.jpg?v=1710949289&width=320 320w, //checkout.overstock.com/cdn/shop/collections/Brown-Seagrass-Bohemian-Vase.jpg?v=1710949289&width=460 460w, //checkout.overstock.com/cdn/shop/collections/Brown-Seagrass-Bohemian-Vase.jpg?v=1710949289&width=600 600w, //checkout.overstock.com/cdn/shop/collections/Brown-Seagrass-Bohemian-Vase.jpg?v=1710949289&width=700 700w, //checkout.overstock.com/cdn/shop/collections/Brown-Seagrass-Bohemian-Vase.jpg?v=1710949289&width=800 800w, //checkout.overstock.com/cdn/shop/collections/Brown-Seagrass-Bohemian-Vase.jpg?v=1710949289&width=900 900w, //checkout.overstock.com/cdn/shop/collections/Brown-Seagrass-Bohemian-Vase.jpg?v=1710949289&width=1200 1200w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "Home Decor",
    },
    
    title: "Home Decor",
    url: "/collections/home-decor"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/collections/Auriya-14k-Gold-1ctw-Oval-Moissanite-Halo-Diamond-Engagement-Ring-1-5ctw.jpg?v=1710950215&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/collections/Auriya-14k-Gold-1ctw-Oval-Moissanite-Halo-Diamond-Engagement-Ring-1-5ctw.jpg?v=1710950215&width=320 320w, //checkout.overstock.com/cdn/shop/collections/Auriya-14k-Gold-1ctw-Oval-Moissanite-Halo-Diamond-Engagement-Ring-1-5ctw.jpg?v=1710950215&width=460 460w, //checkout.overstock.com/cdn/shop/collections/Auriya-14k-Gold-1ctw-Oval-Moissanite-Halo-Diamond-Engagement-Ring-1-5ctw.jpg?v=1710950215&width=600 600w, //checkout.overstock.com/cdn/shop/collections/Auriya-14k-Gold-1ctw-Oval-Moissanite-Halo-Diamond-Engagement-Ring-1-5ctw.jpg?v=1710950215&width=700 700w, //checkout.overstock.com/cdn/shop/collections/Auriya-14k-Gold-1ctw-Oval-Moissanite-Halo-Diamond-Engagement-Ring-1-5ctw.jpg?v=1710950215&width=800 800w, //checkout.overstock.com/cdn/shop/collections/Auriya-14k-Gold-1ctw-Oval-Moissanite-Halo-Diamond-Engagement-Ring-1-5ctw.jpg?v=1710950215&width=900 900w, //checkout.overstock.com/cdn/shop/collections/Auriya-14k-Gold-1ctw-Oval-Moissanite-Halo-Diamond-Engagement-Ring-1-5ctw.jpg?v=1710950215&width=1200 1200w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "Jewelry",
    },    
    title: "Jewelry",
    url: "/collections/jewelry-watches"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/files/30_22-Freestanding-Bathroom-Vanity-with-Soft-Closing-Drawers_3efa869f-ecc2-416f-876a-2705c925359b.jpg?v=1720507037&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/files/30_22-Freestanding-Bathroom-Vanity-with-Soft-Closing-Drawers_3efa869f-ecc2-416f-876a-2705c925359b.jpg?v=1720507037&width=320 320w, //checkout.overstock.com/cdn/shop/files/30_22-Freestanding-Bathroom-Vanity-with-Soft-Closing-Drawers_3efa869f-ecc2-416f-876a-2705c925359b.jpg?v=1720507037&width=460 460w, //checkout.overstock.com/cdn/shop/files/30_22-Freestanding-Bathroom-Vanity-with-Soft-Closing-Drawers_3efa869f-ecc2-416f-876a-2705c925359b.jpg?v=1720507037&width=600 600w, //checkout.overstock.com/cdn/shop/files/30_22-Freestanding-Bathroom-Vanity-with-Soft-Closing-Drawers_3efa869f-ecc2-416f-876a-2705c925359b.jpg?v=1720507037&width=700 700w, //checkout.overstock.com/cdn/shop/files/30_22-Freestanding-Bathroom-Vanity-with-Soft-Closing-Drawers_3efa869f-ecc2-416f-876a-2705c925359b.jpg?v=1720507037&width=800 800w, //checkout.overstock.com/cdn/shop/files/30_22-Freestanding-Bathroom-Vanity-with-Soft-Closing-Drawers_3efa869f-ecc2-416f-876a-2705c925359b.jpg?v=1720507037&width=900 900w, //checkout.overstock.com/cdn/shop/files/30_22-Freestanding-Bathroom-Vanity-with-Soft-Closing-Drawers_3efa869f-ecc2-416f-876a-2705c925359b.jpg?v=1720507037&width=1200 1200w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "",
    },
    
    title: "Home Improvement",
    url: "/collections/home-improvement"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/collections/Acroma-20-light-Modern-Farmhouse-40In-Round-Wagon-Wheel-Chandelier.jpg?v=1710950168&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/collections/Acroma-20-light-Modern-Farmhouse-40In-Round-Wagon-Wheel-Chandelier.jpg?v=1710950168&width=320 320w, //checkout.overstock.com/cdn/shop/collections/Acroma-20-light-Modern-Farmhouse-40In-Round-Wagon-Wheel-Chandelier.jpg?v=1710950168&width=460 460w, //checkout.overstock.com/cdn/shop/collections/Acroma-20-light-Modern-Farmhouse-40In-Round-Wagon-Wheel-Chandelier.jpg?v=1710950168&width=600 600w, //checkout.overstock.com/cdn/shop/collections/Acroma-20-light-Modern-Farmhouse-40In-Round-Wagon-Wheel-Chandelier.jpg?v=1710950168&width=700 700w, //checkout.overstock.com/cdn/shop/collections/Acroma-20-light-Modern-Farmhouse-40In-Round-Wagon-Wheel-Chandelier.jpg?v=1710950168&width=800 800w, //checkout.overstock.com/cdn/shop/collections/Acroma-20-light-Modern-Farmhouse-40In-Round-Wagon-Wheel-Chandelier.jpg?v=1710950168&width=900 900w, //checkout.overstock.com/cdn/shop/collections/Acroma-20-light-Modern-Farmhouse-40In-Round-Wagon-Wheel-Chandelier.jpg?v=1710950168&width=1200 1200w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "Lighting",
    },
    
    title: "Lighting",
    url: "/collections/lighting"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/files/Garment-Rack-White-Freestanding-Walk-in-Wood-Closet-System-with-Metal-Frame-and-4-Drawer_2C-Bedroom-Clothing-Armoires_182ecc88-40fd-43e5-ba4a-4d71265ab20b.jpg?v=1720076590&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/files/Garment-Rack-White-Freestanding-Walk-in-Wood-Closet-System-with-Metal-Frame-and-4-Drawer_2C-Bedroom-Clothing-Armoires_182ecc88-40fd-43e5-ba4a-4d71265ab20b.jpg?v=1720076590&width=320 320w, //checkout.overstock.com/cdn/shop/files/Garment-Rack-White-Freestanding-Walk-in-Wood-Closet-System-with-Metal-Frame-and-4-Drawer_2C-Bedroom-Clothing-Armoires_182ecc88-40fd-43e5-ba4a-4d71265ab20b.jpg?v=1720076590&width=460 460w, //checkout.overstock.com/cdn/shop/files/Garment-Rack-White-Freestanding-Walk-in-Wood-Closet-System-with-Metal-Frame-and-4-Drawer_2C-Bedroom-Clothing-Armoires_182ecc88-40fd-43e5-ba4a-4d71265ab20b.jpg?v=1720076590&width=600 600w, //checkout.overstock.com/cdn/shop/files/Garment-Rack-White-Freestanding-Walk-in-Wood-Closet-System-with-Metal-Frame-and-4-Drawer_2C-Bedroom-Clothing-Armoires_182ecc88-40fd-43e5-ba4a-4d71265ab20b.jpg?v=1720076590&width=700 700w, //checkout.overstock.com/cdn/shop/files/Garment-Rack-White-Freestanding-Walk-in-Wood-Closet-System-with-Metal-Frame-and-4-Drawer_2C-Bedroom-Clothing-Armoires_182ecc88-40fd-43e5-ba4a-4d71265ab20b.jpg?v=1720076590&width=800 800w, //checkout.overstock.com/cdn/shop/files/Garment-Rack-White-Freestanding-Walk-in-Wood-Closet-System-with-Metal-Frame-and-4-Drawer_2C-Bedroom-Clothing-Armoires_182ecc88-40fd-43e5-ba4a-4d71265ab20b.jpg?v=1720076590&width=900 900w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "Clothing And Shoes",
    },    
    title: "Clothing And Shoes",
    url: "/collections/clothing-shoes"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/files/Enova-Home-Storage-Bins-Fabric-Box-_28Set-of-6_29_61f070b5-a2f3-4a24-8c55-5a02448cd45d.jpg?v=1720024223&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/files/Enova-Home-Storage-Bins-Fabric-Box-_28Set-of-6_29_61f070b5-a2f3-4a24-8c55-5a02448cd45d.jpg?v=1720024223&width=320 320w, //checkout.overstock.com/cdn/shop/files/Enova-Home-Storage-Bins-Fabric-Box-_28Set-of-6_29_61f070b5-a2f3-4a24-8c55-5a02448cd45d.jpg?v=1720024223&width=460 460w, //checkout.overstock.com/cdn/shop/files/Enova-Home-Storage-Bins-Fabric-Box-_28Set-of-6_29_61f070b5-a2f3-4a24-8c55-5a02448cd45d.jpg?v=1720024223&width=600 600w, //checkout.overstock.com/cdn/shop/files/Enova-Home-Storage-Bins-Fabric-Box-_28Set-of-6_29_61f070b5-a2f3-4a24-8c55-5a02448cd45d.jpg?v=1720024223&width=700 700w, //checkout.overstock.com/cdn/shop/files/Enova-Home-Storage-Bins-Fabric-Box-_28Set-of-6_29_61f070b5-a2f3-4a24-8c55-5a02448cd45d.jpg?v=1720024223&width=800 800w, //checkout.overstock.com/cdn/shop/files/Enova-Home-Storage-Bins-Fabric-Box-_28Set-of-6_29_61f070b5-a2f3-4a24-8c55-5a02448cd45d.jpg?v=1720024223&width=900 900w, //checkout.overstock.com/cdn/shop/files/Enova-Home-Storage-Bins-Fabric-Box-_28Set-of-6_29_61f070b5-a2f3-4a24-8c55-5a02448cd45d.jpg?v=1720024223&width=1200 1200w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "Storage And Organization",
    },
    
    title: "Storage And Organization",
    url: "/collections/storage-organization"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/collections/Bare-Home-Hypoallergenic-Down-Alternative-Comforter-Set.jpg?v=1710949250&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/collections/Bare-Home-Hypoallergenic-Down-Alternative-Comforter-Set.jpg?v=1710949250&width=320 320w, //checkout.overstock.com/cdn/shop/collections/Bare-Home-Hypoallergenic-Down-Alternative-Comforter-Set.jpg?v=1710949250&width=460 460w, //checkout.overstock.com/cdn/shop/collections/Bare-Home-Hypoallergenic-Down-Alternative-Comforter-Set.jpg?v=1710949250&width=600 600w, //checkout.overstock.com/cdn/shop/collections/Bare-Home-Hypoallergenic-Down-Alternative-Comforter-Set.jpg?v=1710949250&width=700 700w, //checkout.overstock.com/cdn/shop/collections/Bare-Home-Hypoallergenic-Down-Alternative-Comforter-Set.jpg?v=1710949250&width=800 800w, //checkout.overstock.com/cdn/shop/collections/Bare-Home-Hypoallergenic-Down-Alternative-Comforter-Set.jpg?v=1710949250&width=900 900w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "Bedding",
    },    
    title: "Bedding",
    url: "/collections/bedding"
  },
  {
    image : {
      src : "https://checkout.overstock.com/cdn/shop/collections/Ch_C3_A2teau-21.5_22-Right-Side-Faucet-Wall-Mount-Bathroom-Sink-with-Chrome-Towel-Bar.jpg?v=1710951880&width=460",
      srcset : "//checkout.overstock.com/cdn/shop/collections/Ch_C3_A2teau-21.5_22-Right-Side-Faucet-Wall-Mount-Bathroom-Sink-with-Chrome-Towel-Bar.jpg?v=1710951880&width=320 320w, //checkout.overstock.com/cdn/shop/collections/Ch_C3_A2teau-21.5_22-Right-Side-Faucet-Wall-Mount-Bathroom-Sink-with-Chrome-Towel-Bar.jpg?v=1710951880&width=460 460w, //checkout.overstock.com/cdn/shop/collections/Ch_C3_A2teau-21.5_22-Right-Side-Faucet-Wall-Mount-Bathroom-Sink-with-Chrome-Towel-Bar.jpg?v=1710951880&width=600 600w, //checkout.overstock.com/cdn/shop/collections/Ch_C3_A2teau-21.5_22-Right-Side-Faucet-Wall-Mount-Bathroom-Sink-with-Chrome-Towel-Bar.jpg?v=1710951880&width=700 700w, //checkout.overstock.com/cdn/shop/collections/Ch_C3_A2teau-21.5_22-Right-Side-Faucet-Wall-Mount-Bathroom-Sink-with-Chrome-Towel-Bar.jpg?v=1710951880&width=800 800w, //checkout.overstock.com/cdn/shop/collections/Ch_C3_A2teau-21.5_22-Right-Side-Faucet-Wall-Mount-Bathroom-Sink-with-Chrome-Towel-Bar.jpg?v=1710951880&width=900 900w, //checkout.overstock.com/cdn/shop/collections/Ch_C3_A2teau-21.5_22-Right-Side-Faucet-Wall-Mount-Bathroom-Sink-with-Chrome-Towel-Bar.jpg?v=1710951880&width=1200 1200w",
      sizes : "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt : "Bath",
    },    
    title: "Bath",
    url: "/collections/bath"
  },
]

const featuredBrandsTestData: CategoryType[] = [
  {
    image: {
      src: "//checkout.overstock.com/cdn/shop/files/06272024-MOPS-Category-Rug.png?v=1719612969&width=460",
      srcset: "//checkout.overstock.com/cdn/shop/files/06272024-MOPS-Category-Rug.png?v=1719612969&width=320 320w, //checkout.overstock.com/cdn/shop/files/06272024-MOPS-Category-Rug.png?v=1719612969&width=460 460w, //checkout.overstock.com/cdn/shop/files/06272024-MOPS-Category-Rug.png?v=1719612969&width=600 600w",
      sizes: "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt: ""
  },
  title: "Rug",
  url: "/collections/rugs",
  _metadata: {
      uid: ''
  }
  },
  {
    image: {
        src: "//checkout.overstock.com/cdn/shop/files/06272024-MOPS-Category-Jewelry.png?v=1719612969&width=460",
        srcset: "//checkout.overstock.com/cdn/shop/files/06272024-MOPS-Category-Jewelry.png?v=1719612969&width=320 320w, //checkout.overstock.com/cdn/shop/files/06272024-MOPS-Category-Jewelry.png?v=1719612969&width=460 460w, //checkout.overstock.com/cdn/shop/files/06272024-MOPS-Category-Jewelry.png?v=1719612969&width=600 600w",
        sizes: "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
        alt: ""
    },
    title: "Jewelry",
    url: "/collections/jewelry-watches",
    _metadata: {
      uid: ''
  }
},
 {
  image: {
      src: "//checkout.overstock.com/cdn/shop/files/06272024-MOPS-Category-Furniture.png?v=1719612969&width=460",
      srcset: "//checkout.overstock.com/cdn/shop/files/06272024-MOPS-Category-Furniture.png?v=1719612969&width=320 320w, //checkout.overstock.com/cdn/shop/files/06272024-MOPS-Category-Furniture.png?v=1719612969&width=460 460w, //checkout.overstock.com/cdn/shop/files/06272024-MOPS-Category-Furniture.png?v=1719612969&width=600 600w",
      sizes: "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt: ""
  },
  title: "Furniture",
  url: "/collections/top-furniture-deals",
  _metadata: {
    uid: ''
}
},
{
  image: {
      src: "//checkout.overstock.com/cdn/shop/files/06272024-MOPS-Category-Outdoor.png?v=1719612969&width=460",
      srcset: "//checkout.overstock.com/cdn/shop/files/06272024-MOPS-Category-Outdoor.png?v=1719612969&width=320 320w, //checkout.overstock.com/cdn/shop/files/06272024-MOPS-Category-Outdoor.png?v=1719612969&width=460 460w, //checkout.overstock.com/cdn/shop/files/06272024-MOPS-Category-Outdoor.png?v=1719612969&width=600 600w",
      sizes: "(min-width: 1748px) calc((1620px - 72px) / 4), (min-width: 1280px) calc((100vw - 200px) / 4), (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 600px) calc((100vw - 88px) / 2), calc(100vw - 40px)",
      alt: ""
  },
  title: "Outdoor",
  url: "/collections/top-outdoor-deals",
  _metadata: {
    uid: ''
}
}
]

export default async function HomePage({
  searchParams,
}: {
  searchParams: LivePreviewQuery | undefined;
}) {
  const homePage = await getHomePage()

  return <div className="grid grid-cols-1 gap-y-12 py-12">
  {homePage.sections.map(({ section }: any) => {
    return <div className={`${section.is_screen_width ? 'w-full' : 'container mx-auto px-4 lg:px-6'} gap-4 grid grid-cols-1`} key={section._metadata.uid}>
      {!!section.title && <h2 className="text-[36px]/[48px] font-bold">{section.title}</h2>}
      {section.title.toLowerCase().includes('category') && <Slider desktopColumns={section.desktop_columns} mobileColumns={section.mobile_columns} viewport={section.slider_type}>
      {testData.map((card: CategoryType, idx: number) => {
          return <Category key={`category-${idx}`} category={card} />
        })}
        </Slider>}
      {section.has_slider && !section.title.toLowerCase().includes('category') && <Slider desktopColumns={section.desktop_columns} mobileColumns={section.mobile_columns} viewport={section.slider_type}>
        {(section.cards ?? []).map(({ card }: { card: CategoryType }, idx: number) => {
          return <Category beefy key={card._metadata?.uid ?? `card-${idx}`} category={card.image?.src ? card : featuredBrandsTestData[idx] as CategoryType} />
        })}
      </Slider>}
      {!section.has_slider && <div className="w-full md:flex gap-4">{(section.cards ?? []).map(({ card }: { card: any }) => {
          return <Link className="md:flex-1" href={card.url} key={card._metadata.uid}>
            {!!card.image &&
            <Image alt="Hello World" className="block w-full h-auto" height={card.image.dimension.height} src={card.image.url} width={card.image.dimension.width} unoptimized />}
            {!card.image && <div className="w-full bg-black aspect-[5/1]" />}
          </Link>
        })}
        </div>}
    </div>
  })}
  </div>
}

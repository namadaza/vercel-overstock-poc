import Slider from "components/slider";
import { getProducts } from "lib/shopify";
import Image from "next/image";
import { Suspense } from "react";

async function Render() {
    const date = new Date()
    const products = await getProducts({ query: date.toISOString().split('T')[0] })

    return <><Slider desktopColumns={5} mobileColumns={1.5} viewport="both">
        {products.map(product => {
            return <div className="border p-2 h-full" key={product.id}>
                <div className="w-full aspect-square mb-4">
                    <Image alt={product.images[0]!.altText} className="w-full aspect-square" height={640} src={product.images[0]!.url} width={640} unoptimized />
                </div>
                <ul>
                    <li className="mb-1 text-lg font-bold">{Number(product.variants[0]?.price.amount).toLocaleString('en-US', {
              currency: 'USD',
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
              style: 'currency',
            })}</li>
                    <li>{product.title}</li>
                    {/* <li className="text-sm">★★★★★ 666</li> */}
                </ul>
            </div>
        })}
    </Slider></>
}

function FeaturedDeals() {
    return <Suspense fallback={<div className="w-full bg-brand-pink aspect-[3/1]" />}>
        <Render />
    </Suspense>
}

export default FeaturedDeals
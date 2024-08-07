import Slider from "components/slider";
import { getProducts } from "lib/shopify";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

async function Render() {
  const date = new Date();
  // date.toISOString().split('T')[0]
  const products = await getProducts({ query: "SAFAVIEH" });

  const use = products
    .filter((product) => !!product.images[0]?.url)
    .slice(0, 5);

  return (
    <>
      {/* <pre>{JSON.stringify(use, null, 2)}</pre> */}
      <Slider desktopColumns={6} mobileColumns={1.5} viewport="both">
        {use.map((product) => {
          return (
            <Link className="border p-2 h-full" href={`https://www.overstock.com/products/${product.handle}`} key={product.id} prefetch={false}>
              {!!product.images[0]?.url && (
                <div className="w-full aspect-square relative mb-4">
                  <Image
                    alt={product.images[0]!.altText}
                    className="w-full aspect-square absolute top-0 left-0"
                    height={640}
                    src={product.images[0]!.url}
                    width={640}
                    unoptimized
                  />
                  {product.images.length > 1 && (
                    <Image
                      alt={product.images[1]!.altText}
                      className="w-full aspect-square absolute top-0 left-0 z-10 opacity-0 hover:opacity-100 transition-opacity duration-500"
                      height={640}
                      src={product.images[1]!.url}
                      width={640}
                      unoptimized
                    />
                  )}
                </div>
              )}
              <ul>
                <li className="mb-1 text-lg font-bold">
                  {Number(product.variants[0]?.price.amount).toLocaleString(
                    "en-US",
                    {
                      currency: "USD",
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                      style: "currency",
                    }
                  )}
                </li>
                <li className="line-clamp-2">{product.title}</li>
                {/* <li className="text-sm">★★★★★ 666</li> */}
              </ul>
            </Link>
          );
        })}
      </Slider>
    </>
  );
}

function FeaturedDeals() {
  return (
    <Suspense fallback={<div className="w-full bg-brand-pink aspect-[3/1]" />}>
      <Render />
    </Suspense>
  );
}

export default FeaturedDeals;

import { decrypt, type FlagOverridesType } from "@vercel/flags";
import Slider from "components/slider";
import { getFeaturedDeals } from "lib/shopify";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Suspense } from "react";

async function Render() {
  const overrides = (await decrypt<FlagOverridesType>(
    cookies().get("vercel-flag-overrides")?.value ?? "{}"
  )) as { featuredDeals?: string };
  const date = new Date(
    new Date().toLocaleString("en", { timeZone: "US/Mountain" })
  );
  const tag = `featured-${overrides?.featuredDeals ?? date.toISOString().split("T")[0]}`;

  const products = await getFeaturedDeals({
    tag,
  });

  return (
    <Slider desktopColumns={5} mobileColumns={1.5} viewport="both">
      {products.map((product) => {
        const featuredTimes = product.featuredTimes?.value
          ? (JSON.parse(product.featuredTimes.value) as string[]).map(
              (value) =>
                new Date(
                  new Date(value).toLocaleString("en", {
                    // TODO: Hrm
                    timeZone: "US/Pacific",
                  })
                )
            )
          : [];
        const id = product.handle.split("-").pop();
        const isOnSale = product.variants[0]?.isOnSale?.value === 'true'
        const referencePricing = JSON.parse(
          product.variants[0]?.referencePricing?.value ?? "{}"
        );

        if (featuredTimes.length === 2) {
          if ((date < featuredTimes[0]!) || (date > featuredTimes[1]!)) {
            return null
          }
        }

        return (
          <Link
            className="bg-white border p-2 h-full"
            href={`https://www.overstock.com/products/${product.handle}`}
            key={product.id}
            prefetch={false}
          >
            {!!product.images[0]?.url && (
              <div className="w-full aspect-square relative mb-4">
                <Image
                  alt={product.images[0]!.altText}
                  className="w-full aspect-square absolute top-0 left-0"
                  height={640}
                  src={product.images[0]!.url}
                  width={640}
                />
                {product.images.length > 1 && (
                  <Image
                    alt={product.images[1]!.altText}
                    className="w-full aspect-square absolute top-0 left-0 z-10 opacity-0 hover:opacity-100 transition-opacity duration-500"
                    height={640}
                    src={product.images[1]!.url}
                    width={640}
                  />
                )}
              </div>
            )}
            <ul className="w-full">
              <li className="text-lg font-bold text-brand-red">
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
              {Object.keys(referencePricing).length > 0 &&
                !!referencePricing?.MSRP && (
                  <li className="text-sm font-bold pb-1">
                    <span className="border-b border-black border-dashed line-through">
                      {Number(referencePricing.MSRP.price).toLocaleString(
                        "en-US",
                        {
                          currency: "USD",
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                          style: "currency",
                        }
                      )}
                    </span>{" "}
                    {referencePricing.MSRP.sellingPercentageOff}% Off MSRP
                  </li>
                )}
              <li className="pb-1">
                <span className="h-6 inline-block rounded-full bg-brand-red text-white font-bold text-xs/6 px-2">Sale</span></li>
              <li className="line-clamp-2">{product.title}</li>
              <li
                className="w-full h-[25px]"
                id={`pr-reviewsnippet-${id}`}
                data-product-id={id}
              ></li>
            </ul>
            <Script id={`card-${product.id}-reviews`} strategy="lazyOnload">{`
                function loadReviews() {
                  window.pwr = window.pwr || function () {
                    (pwr.q = pwr.q || []).push(arguments);
                  };
                  pwr("render", {
                    api_key: "0ce15d13-67ca-47dd-8c72-1d5e4694ada3",
                    locale: "en",
                    merchant_group_id: "1939031562",
                    merchant_id: "1280018588",
                    page_id: "${id}",
                    components: {
                      CategorySnippet: "pr-reviewsnippet-${id}"
                    }
                  });
                }
              
                function observeReviews() {
                  const targetNode = document.getElementById("pr-reviewsnippet-${id}");
              
                  const config = { childList: true, subtree: true };
              
                  const callback = function(mutationsList, observer) {
                    for (const mutation of mutationsList) {
                      if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach(node => {
                          if (node.nodeType === Node.ELEMENT_NODE) {
                            // Remove the word "reviews" from the newly added content
                            node.innerHTML = node.innerHTML.replace(/No Reviews/gi, '0');
                            node.innerHTML = node.innerHTML.replace(/reviews/gi, '');
                            node.innerHTML = node.innerHTML.replace(/review/gi, '');
                          }
                        });
                      }
                    }
                  };
              
                  const observer = new MutationObserver(callback);
                  observer.observe(targetNode, config);
                }
                
                loadReviews();
                observeReviews();
                
                new Promise((r) => setTimeout(r, 5000)).then(() => {});
              `}</Script>
          </Link>
        );
      })}
    </Slider>
  );
}

function FeaturedDeals() {
  return (
    <Suspense
      fallback={
        <Slider desktopColumns={5} mobileColumns={1.5} viewport="both">
          {Array.from(Array(5).keys()).map((i) => (
            <div className="bg-white border p-2 h-full" key={i}>
              <div className="w-full aspect-square relative mb-4" />
              <div className="w-full h-5" />
              <div className="w-full h-7 mb-1" />
              <div className="w-full h-12" />
              <div className="w-full h-5" />
            </div>
          ))}
        </Slider>
      }
    >
      <Render />
    </Suspense>
  );
}

export default FeaturedDeals;

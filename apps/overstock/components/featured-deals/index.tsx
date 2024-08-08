import Slider from "components/slider";
import { getProducts } from "lib/shopify";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Suspense } from "react";

async function Render() {
  const date = new Date();
  const query = `featured-${date.toISOString().split("T")[0]}`;

  const products = await getProducts({
    query,
  }).then((res) => {
    return res.filter((product) => product.tags.includes(query)).slice(0, 5);
  });

  return (
    <Slider desktopColumns={5} mobileColumns={1.5} viewport="both">
      {products.map((product) => {
        const id = product.handle.split("-").pop();
        const referencePricing = JSON.parse(
          product.variants[0]?.referencePricing?.value ?? "{}"
        );

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
              {Object.keys(referencePricing).length > 0 && (
                <li className="text-sm font-bold">
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
              <li
                className="w-full h-[25px]"
                id={`pr-reviewsnippet-${id}`}
                data-product-id={id}
              ></li>
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
                    on_render: function(config, data) {
                        console.log(data);
                    },
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
            </ul>
          </Link>
        );
      })}
    </Slider>
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

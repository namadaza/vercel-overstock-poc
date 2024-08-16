"use server";

import { reshapeCart, shopifyFetch } from "lib/shopify";
import { getCartQuery } from "lib/shopify/queries/cart";
import type { ShopifyCartOperation } from "lib/shopify/types";
import { cookies } from "next/headers";

export async function getCart() {
  const value = cookies().get("cart")?.value;

  if (value) {
    const cart = await shopifyFetch<ShopifyCartOperation>({
      query: getCartQuery,
      variables: { cartId: `gid://shopify/Cart/${value}` },
    });

    if (!cart.body.data.cart) {
      return undefined;
    }

    return reshapeCart(cart.body.data.cart);
  }

  return undefined;
}

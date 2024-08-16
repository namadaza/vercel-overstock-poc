"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCart } from "./actions";

function ShoppingBagIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden={true}
      className={className}
      fill="currentColor"
      height={24}
      role="presentation"
      viewBox="0 0 24 24"
      width={24}
    >
      <path d="M12 2c2.761 0 5 2.089 5 4.667V8h2.2a.79.79 0 0 1 .8.778v12.444a.79.79 0 0 1-.8.778H4.8a.789.789 0 0 1-.8-.778V8.778A.79.79 0 0 1 4.8 8H7V6.667C7 4.09 9.239 2 12 2zm6.4 7.556H5.6v10.888h12.8V9.556zm-6.4-6c-1.84 0-3.333 1.392-3.333 3.11V8h6.666V6.667c0-1.719-1.492-3.111-3.333-3.111z"></path>
    </svg>
  );
}

function Cart() {
  const [cart, setCart] = useState<any>();

  useEffect(() => {
    getCart().then((res) => {
      setCart(res);
    });
  }, []);

  return (
    <Link className="relative flex h-11 w-11 items-center justify-center text-white" href="https://overstock.com/cart">
      <ShoppingBagIcon className="h-8 w-8" />

      {(cart?.lines ?? []).length > 0 ? (
        <div className="absolute right-0 top-0 h-5 w-5 rounded-full border border-brand-red bg-white text-brand-red text-center text-[11px]/5">
          {cart.lines.length}
        </div>
      ) : null}
    </Link>
  );
}

export default Cart;

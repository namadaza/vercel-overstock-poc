import { FlagValues } from '@vercel/flags/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import AppScripts from "components/app-scripts";
import { CartProvider } from "components/cart/cart-context";
import ContentCards from "components/content-cards";
import Footer from "components/layout/footer";
import { Navbar } from "components/layout/navbar";
import LivePreviewInitComponent from "lib/contentstack/livePreviewInit";
import { getCart } from "lib/shopify";
import { cookies } from "next/headers";
import { type ReactNode, Suspense } from "react";
import "./globals.css";

const { SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
};

function RenderFlags() {
  return <FlagValues values={{}} />
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cartId = cookies().get("cartId")?.value;
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart(cartId);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://checkout.overstock.com" />
        <link rel="preconnect" href="https://images.contentstack.io" />
        <link rel="preconnect" href="https://js.appboycdn.com" />
        <link rel="preconnect" href="https://ui.powerreviews.com" />
      </head>
      <body className="bg-white text-black antialiased">
        <LivePreviewInitComponent />
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
        <AppScripts />
        <ContentCards />
        <SpeedInsights />
        <Suspense>
          <RenderFlags />
        </Suspense>
      </body>
    </html>
  );
}

"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ContentstackLivePreviewSSR: any = dynamic(
  (): any => import("@contentstack/live-preview-utils"),
  { ssr: false },
);

export default function LivePreviewInitComponent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof ContentstackLivePreviewSSR.init === "function") {
      ContentstackLivePreviewSSR.init({});
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return null;
}

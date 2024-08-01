"use client";
import { useEffect } from "react";
import ContentstackLivePreview from "@contentstack/live-preview-utils";

export default function LivePreviewInitComponent() {
  useEffect(() => {
    ContentstackLivePreview.init({});
  }, []);
  return <></>;
}

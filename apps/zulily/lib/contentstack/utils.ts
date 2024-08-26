import { type Config, type LivePreview, Stack } from "contentstack";

/**
 
 Maps to this [example](https://github.com/contentstack/contentstack-nextjs-starter-app/blob/master/contentstack-sdk/utils.ts)

*/

const {
  CONTENTSTACK_API_KEY,
  CONTENTSTACK_DELIVERY_TOKEN,
  CONTENTSTACK_ENVIRONMENT,
  CONTENTSTACK_LIVE_PREVIEW,
  CONTENTSTACK_PREVIEW_TOKEN,
} = process.env;

// basic env validation
export const isBasicConfigValid = () => {
  return (
    !!CONTENTSTACK_API_KEY &&
    !!CONTENTSTACK_DELIVERY_TOKEN &&
    !!CONTENTSTACK_ENVIRONMENT
  );
};

// Live preview config validation
export const isLpConfigValid = () => {
  return !!CONTENTSTACK_LIVE_PREVIEW && !!CONTENTSTACK_PREVIEW_TOKEN;
};

// set LivePreview config
const setLivePreviewConfig = (): LivePreview => {
  if (!isLpConfigValid())
    throw new Error(
      "Your LP config is set to true. Please make you have set all required LP config in .env",
    );
  return {
    preview_token: CONTENTSTACK_PREVIEW_TOKEN as string,
    enable: CONTENTSTACK_LIVE_PREVIEW === "true",
  } as LivePreview;
};

// contentstack sdk initialization
export const initializeContentStackSdk = (): Stack => {
  if (!isBasicConfigValid())
    throw new Error("Please set your .env file before running starter app");
  const stackConfig: Config = {
    api_key: CONTENTSTACK_API_KEY as string,
    delivery_token: CONTENTSTACK_DELIVERY_TOKEN as string,
    environment: CONTENTSTACK_ENVIRONMENT as string,
  };
  if (CONTENTSTACK_LIVE_PREVIEW === "true") {
    stackConfig.live_preview = setLivePreviewConfig();
  }

  return Stack(stackConfig);
};

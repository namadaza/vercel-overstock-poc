import { Config, Stack } from "contentstack";

/**
 
 Maps to this [example](https://github.com/contentstack/contentstack-nextjs-starter-app/blob/master/contentstack-sdk/utils.ts)

*/

const {
  CONTENTSTACK_API_KEY,
  CONTENTSTACK_DELIVERY_TOKEN,
  CONTENTSTACK_ENVIRONMENT,
} = process.env;

// basic env validation
export const isBasicConfigValid = () => {
  return (
    !!CONTENTSTACK_API_KEY &&
    !!CONTENTSTACK_DELIVERY_TOKEN &&
    !!CONTENTSTACK_ENVIRONMENT
  );
};

// contentstack sdk initialization
export const initializeContentStackSdk = (): Stack => {
  if (!isBasicConfigValid())
    throw new Error("Please set you .env file before running starter app");
  const stackConfig: Config = {
    api_key: CONTENTSTACK_API_KEY as string,
    delivery_token: CONTENTSTACK_DELIVERY_TOKEN as string,
    environment: CONTENTSTACK_ENVIRONMENT as string,
  };

  return Stack(stackConfig);
};

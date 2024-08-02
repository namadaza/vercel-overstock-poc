import * as Utils from "@contentstack/utils";
import { LivePreviewQuery } from "contentstack";
import { GetEntry, HeroOne2x1, HeroThree1x1, HeroTwo3x1 } from "./types";
import { initializeContentStackSdk } from "./utils";

// SDK initialization
const Stack = initializeContentStackSdk();

const renderOption = {
  span: (node: any, next: any) => next(node.children),
};

// Set live preview query params
export const setLivePreviewQueryParams = (
  queryParams: LivePreviewQuery | undefined,
) => {
  if (queryParams?.live_preview) {
    Stack.livePreviewQuery(queryParams);
  }
};

// fetches all the entries from specific content-type
const getEntry = ({
  contentTypeUid,
  referenceFieldPath,
  jsonRtePath,
}: GetEntry) => {
  return new Promise((resolve, reject) => {
    const query = Stack.ContentType(contentTypeUid).Query();
    if (referenceFieldPath) query.includeReference(referenceFieldPath);
    query
      .toJSON()
      .find()
      .then(
        (result) => {
          jsonRtePath &&
            Utils.jsonToHTML({
              entry: result,
              paths: jsonRtePath,
              renderOption,
            });
          resolve(result);
        },
        (error) => {
          reject(error);
        },
      );
  });
};

export const getHeaderOne2x1 = async (): Promise<HeroOne2x1[][]> => {
  const heroOne2x1Entry = (await getEntry({
    contentTypeUid: "hero_1_2x1",
    referenceFieldPath: undefined,
    jsonRtePath: undefined,
  })) as unknown as HeroOne2x1[][];

  return heroOne2x1Entry;
};

export const getHeaderTwo3x1 = async (): Promise<HeroTwo3x1[][]> => {
  const heroTwo3x1Entry = (await getEntry({
    contentTypeUid: "hero_2_3x1",
    referenceFieldPath: undefined,
    jsonRtePath: undefined,
  })) as unknown as HeroTwo3x1[][];

  return heroTwo3x1Entry;
};

export const getHeaderThree1x1 = async (): Promise<HeroThree1x1[][]> => {
  const heroThree1x1Entry = (await getEntry({
    contentTypeUid: "hero_3_1x1",
    referenceFieldPath: undefined,
    jsonRtePath: undefined,
  })) as unknown as HeroThree1x1[][];

  return heroThree1x1Entry;
};

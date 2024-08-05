import * as Utils from "@contentstack/utils";
import { LivePreviewQuery } from "contentstack";
import { GetEntry, HeroMods } from "./types";
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

export const getHeaderOne2x1 = async (): Promise<HeroMods[][]> => {
  const heroOne2x1Entry = (await getEntry({
    contentTypeUid: "hero_1_2x1",
    referenceFieldPath: undefined,
    jsonRtePath: undefined,
  })) as unknown as HeroMods[][];

  return heroOne2x1Entry;
};

export const getHeaderTwo3x1 = async (): Promise<HeroMods[][]> => {
  const heroTwo3x1Entry = (await getEntry({
    contentTypeUid: "hero_2_3x1",
    referenceFieldPath: undefined,
    jsonRtePath: undefined,
  })) as unknown as HeroMods[][];

  return heroTwo3x1Entry;
};

export const getHeaderThree1x1 = async (): Promise<HeroMods[][]> => {
  const heroThree1x1Entry = (await getEntry({
    contentTypeUid: "hero_3_1x1",
    referenceFieldPath: undefined,
    jsonRtePath: undefined,
  })) as unknown as HeroMods[][];

  return heroThree1x1Entry;
};

export const getHeaderFour3x1 = async (): Promise<HeroMods[][]> => {
  const heroFour3x1Entry = (await getEntry({
    contentTypeUid: "hero_4_3x1",
    referenceFieldPath: undefined,
    jsonRtePath: undefined,
  })) as unknown as HeroMods[][];

  return heroFour3x1Entry;
};

export const getHeaderFive4x1 = async (): Promise<HeroMods[][]> => {
  const heroFive4x1Entry = (await getEntry({
    contentTypeUid: "hero_5_4x1",
    referenceFieldPath: undefined,
    jsonRtePath: undefined,
  })) as unknown as HeroMods[][];

  return heroFive4x1Entry;
};

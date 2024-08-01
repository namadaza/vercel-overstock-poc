import * as Utils from "@contentstack/utils";
import { GetEntry, HeroOne2x1 } from "./types";
import { initializeContentStackSdk } from "./utils";
import { LivePreviewQuery } from "contentstack";

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

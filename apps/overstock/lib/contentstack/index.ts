import * as Utils from "@contentstack/utils";
import type { LivePreviewQuery } from "contentstack";
import { unstable_cache } from "next/cache";
import { GetEntry } from "./types";
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
    const query = Stack.ContentType(contentTypeUid).Query().addParam('include_dimension', 'true');
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

export async function getHeaderTopNav(): Promise<any> {
  const entry = await unstable_cache(async () => {
    const headerTopNav = (await getEntry({
      contentTypeUid: "header_top_nav",
      referenceFieldPath: undefined,
      jsonRtePath: undefined,
    })) as any;

    const data = headerTopNav[0][0]

    const levelOne = data.level_one.map((item: any) => {
      delete item.tid;
      delete item._metadata;

      if ((item.level_two ?? []).length > 0) {
        item.level_two.forEach((l2: any, index: number) => {
          delete item.level_two[index].tid;
          delete item.level_two[index]._metadata;

          if ((l2.level_three ?? []).length > 0) {
            l2.level_three.forEach((l3: any, l3Index: number) => {
              delete item.level_two[index].level_three[l3Index].tid;
              delete item.level_two[index].level_three[l3Index]._metadata;
            })
          }
        })
      }

      return item
    });

    return { levelOne }
  }, ['top-nav'], {
    revalidate: 60 * 60 * 24,
    tags: ['top-nav'],
  })()

  return entry
};

export async function getHomePage(): Promise<any> {
  const entry = await unstable_cache(async () => {
    const homePage = await getEntry({
      contentTypeUid: "home_page",
      referenceFieldPath: undefined,
      jsonRtePath: undefined,
    }) as any

    const data = homePage[0][0]

    data.sections.forEach(({ section }: any, index: number) => {
      (section.cards ?? []).forEach((card: any, cardIndex: number) => {
        if (card.card.image) {
          data.sections[index].section.cards[cardIndex].card.image = {
            dimension: card.card.image.dimension,
            url: card.card.image.url,
          }
        }
  
        if (card.card.svg) {
          data.sections[index].section.cards[cardIndex].card.svg = {
            dimension: card.card.svg.dimension,
            url: card.card.svg.url,
          }
        }
      })
    })
  
    return data
  }, ['home-page'], {
    revalidate: 60 * 60 * 24,
    tags: ['home-page'],
  },)()

  return entry
};

export async function getFooter(): Promise<any> {
  const entry = await unstable_cache(async () => {
    const footer = (await getEntry({
      contentTypeUid: "footer",
      referenceFieldPath: undefined,
      jsonRtePath: undefined,
    })) as any;
  
    return footer[0][0];
  }, ['footer'], {
    revalidate: 60 * 60 * 24,
    tags: ['footer'],
  })()

  return entry
}

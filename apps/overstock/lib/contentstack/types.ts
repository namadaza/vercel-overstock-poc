export type GetEntry = {
  contentTypeUid: string;
  referenceFieldPath: string[] | undefined;
  jsonRtePath: string[] | undefined;
};

export type HeroOne2x1 = {
  left_content_link: {
    title: string;
    href: string;
  };
  left_image_url: {
    title: string;
    href: string;
  };
  right_content_link: {
    title: string;
    href: string;
  };
  right_image_url: {
    title: string;
    href: string;
  };
  tags: string[];
  title: string;
};

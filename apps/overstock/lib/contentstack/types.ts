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

export type HeroTwo3x1 = {
  left_content_link: {
    title: string;
    href: string;
  };
  left_image_url: {
    title: string;
    href: string;
  };
  center_content_link: {
    title: string;
    href: string;
  };
  center_image_url: {
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

export type HeroThree1x1 = {
  content_link: {
    title: string;
    href: string;
  };
  image_url: {
    title: string;
    href: string;
  };
  image_url_small: {
    title: string;
    href: string;
  };
  tags: string[];
  title: string;
};

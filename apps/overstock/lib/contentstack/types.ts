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

export type HeaderTopNav = {
  level_one: LevelOne[];
};

export type LevelOne = NavLevel & {
  level_two: LevelTwo[];
};

export type LevelTwo = NavLevel &{
  level_three: NavLevel[];
};

export type NavLevel = {
  tid: string;
  link: Link;
}

type Link = {
  title: string;
  href: string;
}

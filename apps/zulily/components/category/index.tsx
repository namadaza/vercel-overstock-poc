import Link from "next/link";
import ArrowRightCircleIcon from "../icons/arrow-right-circle";
import CategoryImage from './image';

type Dimension = {
    height: number;
    width: number;
  };
  
  type PublishDetails = {
    time: string;
    user: string;
    environment: string;
    locale: string;
  };

  type ACL = {
    [key: string]: unknown;
  };
  
  type ImageType = {
    uid: string;
    _version: number;
    title: string;
    created_by: string;
    updated_by: string;
    created_at: string;
    updated_at: string;
    content_type: string;
    file_size: string;
    filename: string;
    dimension: Dimension;
    ACL: ACL;
    parent_uid: string | null;
    is_dir: boolean;
    tags: string[];
    publish_details: PublishDetails;
    url: string;
  };

  
export type CategoryType = {
    image: ImageType;
    title: string;
    url: string;
    _metadata?: {
        uid: string
    }
  }

const Category = ({ category }: { category: CategoryType }) => {

  return (
    <Link className="flex flex-col items-center text-center justify-start h-full" href={category.url}>
        <div className={`rounded-full w-full aspect-square overflow-hidden`}>
            <CategoryImage alt={category.title} image={category.image} />
        </div>
        <div className="mt-4 pb-2 font-bold">
            {category.title}
        </div>
        <div className="flex flex-row">
            <span className="mr-2">Shop now</span>
            <ArrowRightCircleIcon  />
        </div>
    </Link>
  );
};

export default Category;

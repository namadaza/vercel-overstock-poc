import Link from "next/link";
import ArrowRightCircleIcon from "./icons/arrow-right-circle";


export type CategoryType = {
    image: {
        src: string;
        srcset: string;
        sizes: string;
        alt: string;
    };
    title: string;
    url: string;
    _metadata?: {
        uid: string
    }
  }

const Category = ({ category, beefy = false }: { category: CategoryType, beefy?: boolean }) => {

  return (
    <Link className="flex flex-col items-center text-center justify-start h-full" href={`https://www.overstock.com${category.url}`}>
        <div className={`${beefy ? 'w-77 h-77' : 'w-44 h-44'} rounded-full overflow-hidden`}>
            <img className="w-full h-full object-cover" src={category.image?.src} />
        </div>
        <div className="mt-4 pb-2 font-bold">{category.title}</div>
        <div className="flex flex-row"><span className="mr-2">Shop now</span><ArrowRightCircleIcon  /></div>
    </Link>
  );
};

export default Category;
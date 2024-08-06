import ArrowRightCircleIcon from "./icons/arrow-right-circle";

export type CategoryType = {
    image: {
        src: string;
        srcset: string;
        sizes: string;
        alt: string;
    };
    title: string;
    link: string;
  }

const Category = ({ category }: { category: CategoryType }) => {
  return (
    <a className="flex flex-col items-center text-center justify-start h-full"  href={category.link}>
        <div className="w-32 h-32 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={category.image.src} />
        </div>
        <div className="mt-4 pb-2 font-bold">{category.title}</div>
        <div className="flex flex-row"><span className="mr-2">Shop now</span><ArrowRightCircleIcon  /></div>
    </a>
  );
};

export default Category;

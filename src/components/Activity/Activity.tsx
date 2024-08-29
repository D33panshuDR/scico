import Image from "next/image";

const ActivityItem = ({ activity }: { activity: { image: string; title: string; description: string } }) => {
  const { title, image, description } = activity;

  return (
    <div className="w-[320px] relative z-10 flex h-[500px] items-center mx-[2em]">
      <div className="relative flex align-center justify-center w-[300px] h-[500px] flex-col rounded-sm bg-white shadow-two duration-300 hover:scale-105 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark">
        <div className="relative h-full w-full max-h-[300px] self-center overflow-hidden">
          <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
        </div>
        <div className="mb-2 flex w-full flex-col items-center justify-center self-center border-b border-body-color border-opacity-10 py-2">
          <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">{title}</h3>
        </div>
        <p className="px-8 py-4 text-base text-sm leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">{description}</p>
      </div>
    </div>
  );
};

export default ActivityItem;

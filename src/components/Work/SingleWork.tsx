import { Work } from "@/types/work";
import Image from "next/image";

const SingleWork = ({ work }: { work: Work }) => {
  const { icon, title, paragraph } = work;
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp p-3 transition duration-300 ease-in-out hover:scale-110"
        data-wow-delay=".15s"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-15"></div>
        <div className="relative mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          <Image
            src={`/images/logo/clubs/${icon}`}
            fill
            alt={title}
            className=" object-scale-down"
          />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleWork;

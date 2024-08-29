import { TeamType } from "@/types/team";
import Image from "next/image";

const TeamMember = ({ team }: { team: TeamType }) => {
  const { name, image, content, designation } = team;

  return (
    <div className="w-[320px] relative z-10 flex h-[500px] items-center pl-[16px]">
      <div className="relative flex align-center justify-center w-[300px] h-[500px] flex-col rounded-sm bg-white p-8 shadow-two duration-300 hover:scale-105 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
        <div className="relative h-[100px] w-full max-w-[100px] self-center overflow-hidden rounded-full">
          <Image src={image} alt={name} fill style={{ objectFit: "cover" }} />
        </div>
        <div className="mb-8 flex w-full flex-col items-center justify-center self-center border-b border-body-color border-opacity-10 py-8">
          <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">{name}</h3>
          <p className="text-sm text-body-color">{designation}</p>
        </div>
        <p className="text-base text-sm leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">{content}</p>
      </div>
    </div>
  );
};

export default TeamMember;

"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import { TeamType } from "@/types/team";
import TeamMember from "./TeamMember";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Suraj Chauhan",
    designation: "Secretary",
    content: "Currently serving as the Science Council's secretary, but my real qualifications are: dog whispering, music jamming, and an uncanny ability to turn any experiment into a cringe sketch",
    image: "/images/team/SurajChauhan.jpg",
  },
  {
    id: 2,
    name: "Sulagna Sharma",
    designation: "Vice Secretary",
    content: "I might be bad at socializing but atleast I'm way worse at Physics",
    image: "/images/team/Sulagna Saha.jpg",
  },
  {
    id: 7,
    name: "Dhawal Pahuja",
    designation: "Vice Secretary",
    content: "Running council meetings and Singularity chores —because who says scores matter",
    image: "/images/team/DhawalPahuja.jpg",
  },
  {
    id: 10,
    name: "Vedika Jakate",
    designation: "Core Committee",
    content: "Impossible only means that you haven't found the solution yet",
    image: "/images/team/Vedika_Jakate.jpg",
  },
  {
    id: 3,
    name: "Vaidehi Sawant",
    designation: "Core Committee",
    content: "Keep asking questions till you have none at all",
    image: "/images/team/VaidehiSawant.jpg",
  },
  {
    id: 4,
    name: "Sibani Sankar Parida",
    designation: "Core Committee",
    content: "Jack of all trades, master of none, but oftentimes better than a master of one",
    image: "/images/team/Sibani Sankar Parida.jpg",
  },
  {
    id: 5,
    name: "Divya Sharma",
    designation: "Core Committee",
    content: "Ofcourse size matters, noone wants a small cup of coffee",
    image: "/images/team/DivyaSharma.jpg",
  },
  {
    id: 6,
    name: "Deepanshu Raj",
    designation: "Core Committee",
    content: "You need compilers to understand my poetry",
    image: "/images/team/DeepanshuRaj.jpg",
  },
  {
    id: 9,
    name: "Naren Karthik",
    designation: "Core Committee",
    content: "Drink coffee, code and don't expect placements in a science institute",
    image: "/images/team/NarenKarthik.jpeg",
  },
];

const Team = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section id="members" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="">
        <SectionTitle title="Council Members" paragraph="" center mb="80px" />

        <div className="no-scrollbar relative flex h-[550px] w-full items-center overflow-y-hidden overflow-x-scroll">
          <div className="absolute left-0 top-0 flex h-[550px] gap-8">
            {teamData.map((team, i) => (
              <TeamMember key={`${team.id} ${i}`} team={team} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1] h-full w-[100vw] overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-[200vw] animate-movex overflow-hidden bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
      </div>
    </section>
  );
};

export default Team;

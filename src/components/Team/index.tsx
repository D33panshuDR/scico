"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import { TeamType } from "@/types/team";
import TeamMember from "./TeamMember";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Musharof Chy",
    designation: "Sec",
    content: "Some description",
    image: "/images/testimonials/auth-01.png",
  },
  {
    id: 2,
    name: "Devid Weilium",
    designation: "Vice Sec",
    content: "Some description",
    image: "/images/testimonials/auth-02.png",
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Core Committee",
    content: "Some description",
    image: "/images/testimonials/auth-03.png",
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Core Committee",
    content: "Some description",
    image: "/images/testimonials/auth-03.png",
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Core Committee",
    content: "Some description",
    image: "/images/testimonials/auth-03.png",
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Core Committee",
    content: "Some description",
    image: "/images/testimonials/auth-03.png",
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Core Committee",
    content: "Some description",
    image: "/images/testimonials/auth-03.png",
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Core Committee",
    content: "Some description",
    image: "/images/testimonials/auth-03.png",
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Core Committee",
    content: "Some description",
    image: "/images/testimonials/auth-03.png",
  },
];

const Team = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section id="members" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="Council Members" paragraph="" center mb="80px" />

        {/* <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="" alt="Some Image" fill />
              </div>
            </div>
          </div>
        </div> */}

        <div className="no-scrollbar relative flex h-[450px] w-full items-center overflow-y-hidden overflow-x-scroll">
          <div className="absolute left-0 top-0 flex h-[450px] gap-8">
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

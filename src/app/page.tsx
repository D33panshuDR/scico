import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Video from "@/components/Gallery";
import { Metadata } from "next";
import Work from "@/components/Work";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "Science Council IISERB",
  description: "This is Home for the Science Council of IISERB",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Work />
      <Video />
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      <Team />
      {/* <Pricing /> */}
      <Blog />
      {/* <Contact /> */}
    </>
  );
}

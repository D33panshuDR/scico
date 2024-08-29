import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import { Metadata } from "next";
import Work from "@/components/Work";
import Activity from "@/components/Activity";
import Uploads from "@/components/Upload";

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
      <Team />
      <Activity />
      <Uploads />
    </>
  );
}

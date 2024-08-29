import SectionTitle from "../Common/SectionTitle";
import SingleWork from "./SingleWork";
import workData from "./workData";

const Work = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div id="about-us">
        <SectionTitle
          title="About Us"
          paragraph="As the science council of IISERB, We manage all the science related clubs and host the annual science fest Singularity. As the science council of IISERB, We manage all the science related clubs and host the annual science fest Singularity. As the science council of IISERB, We manage all the science related clubs and host the annual science fest Singularity. As the science council of IISERB, We manage all the science related clubs and host the annual science fest Singularity"
          center
        />
        <SectionTitle title="Our Clubs and Fests" paragraph="" center />
        <div id="clubs" className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          <div></div>
          <div className="p-2">
            <SingleWork work={workData[0]} />
          </div>
          <div></div>
          {workData.map((work, i) =>
            i != 0 ? (
              <div className="p-2" key={work.id}>
                <SingleWork work={work} />
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;

import SectionTitle from "../Common/SectionTitle";
import SingleWork from "./SingleWork";
import workData from "./workData";

const Work = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What We Do"
          paragraph="As the science council of IISERB, We manage all the science related clubs and host the annual science fest Singularity"
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          <div></div>
          <div>
            <SingleWork work={workData[0]} />
          </div>
          <div></div>
          {workData.map((work, i) =>
            i != 0 ? <SingleWork key={work.id} work={work} /> : null,
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;

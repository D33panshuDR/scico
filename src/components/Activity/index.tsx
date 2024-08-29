import SectionTitle from "../Common/SectionTitle";
import ActivityItem from "./Activity";

const activityData: Array<{ id: number; image: string; title: string; description: string }> = [
  {
    id: 1,
    title: "Space Day 2024",
    description:
      "Greetings, Space Enthusiasts! Gear up for Space Day! Four clubs, one cosmic challenge! The Physics, Astronomy, EES, and EECS clubs are teaming up for an epic Space Day quiz. How well do you know about space missions or the cosmos? Take our Space Day quiz and stand a chance to win some stellar prizes!",
    image: "/images/team/SurajChauhan.jpg",
  },
];

const Activity = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div id="activity">
        <SectionTitle title="Latest Activity" paragraph="" center />
      </div>

      <div className="no-scrollbar relative flex h-[550px] w-full items-center overflow-y-hidden overflow-x-scroll">
        <div className="absolute left-0 top-0 flex h-[550px] gap-8">
          {activityData.map((activity, i) => (
            <ActivityItem key={`${activity.id} ${i}`} activity={activity} />
          ))}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Activity;

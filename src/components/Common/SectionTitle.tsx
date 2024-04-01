const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""} z-10`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h2 className="hover:light:text-transparent mb-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-3xl font-bold !leading-tight text-black transition duration-300 ease-in-out hover:scale-110 dark:text-white  hover:dark:text-transparent sm:text-4xl sm:leading-tight md:text-5xl md:text-[45px] md:leading-tight">
        {title}
      </h2>
      <p className="text-base !leading-relaxed text-body-color md:text-lg">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;

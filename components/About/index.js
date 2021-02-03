const About = () => {
  return (
    <div className="w-full my-7 lg:w-4/5 md:mx-auto mt-7 lg:mb-12 grid grid-rows-1 md:grid-cols-2 gap-y-5 md:gap-x-7 lg:gap-x-12">
      <img
        className="px-4 md:pr-0 md:pl-4 max-w-full bg-cover"
        src="/assets/satrio.jpg"
        alt="satrio bayu aji"
      />
      <div className="font-sans text-base max-w-full xl:max-w-4/5 font-thin leading-6 pt-2 lg:pt-3 xl:pt-5 px-4 md:pl-0 md:pr-4">
        <p>
          My name is Satrio. I am a recent Graduate of Universitas Gadjah Mada.
          I am a Front End Developer / Data Analyst. living in Yogyakarta,
          Indonesia. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Ab, rerum?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
          obcaecati voluptates dignissimos totam. Aspernatursunt animi quibusdam
          ea reprehenderit dolor, consectetur ut ipsa dolores, incidunt
          explicabo beatae minus corruptivel?
        </p>
      </div>
    </div>
  );
};

export default About;

const Header = (props) => {
  const { isHome, isProject } = props;

  return (
    <>
      {isHome && (
        <div className="mt-0 mb-14 mx-auto py-0 px-5">
          <h1 className="font-serif text-center text-3xl mb-4">
            Software Engineer - Front End Developer.
          </h1>
          <h4 className="font-sans text-sm text-center italic font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident!
          </h4>
        </div>
      )}
      {isProject && (
        <div className="mt-5 mb-24 mx-auto py-0 px-5">
          <h1 className="font-serif text-center text-4xl">
            Recent Projects: Samples of some of my works.
          </h1>
        </div>
      )}
    </>
  );
};

export default Header;

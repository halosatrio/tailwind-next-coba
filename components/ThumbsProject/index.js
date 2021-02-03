const image = {
  1: { backgroundImage: 'url("/assets/1.jpg")' },
  2: { backgroundImage: 'url("/assets/2.jpg")' },
  3: { backgroundImage: 'url("/assets/3.jpg")' },
  4: { backgroundImage: 'url("/assets/4.jpg")' },
  5: { backgroundImage: 'url("/assets/5.jpg")' },
};

const ThumbsProject = (props) => {
  const { post } = props;

  return (
    <div className="m-auto py-3 px-0 box-border w-full border-b border-black border-opacity-30 las:border-0">
      <a href="#">
        <div className="h-64 bg-center bg-cover" style={image[post]}>
          <div className="overlay-post">
            <div className="overlay-text">
              <em>See Project</em>
            </div>
          </div>
        </div>
      </a>
      <h4 className="font-sans mt-7 text-center text-sm font-bold text-crimson-500">
        Front End Development / Static Website
      </h4>
      <h3 className="font-serif text-base font-thin py-7 px-5 text-center">
        Nama Website E-Commerce
      </h3>
    </div>
  );
};

export default ThumbsProject;

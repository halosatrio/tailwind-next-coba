const ProjectShowcase = () => {
  return (
    <div className="py-10 px-0">
      <h1 className="font-serif pb-5 text-center font-thin text-3xl">
        Recent Projects
      </h1>

      <div className="my-8 mx-auto w-4/5 grid grid-cols-2 gap-x-10">
        <div className="grid gap-4 grid-cols-2 justify-between">
          <div
            className="col-span-2 box250"
            style={{ backgroundImage: 'url("/assets/1.jpg")' }}
          >
            <div className="overlay">
              <div className="box-info">
                <h3>Project e-commerece site</h3>
                <p>Redesigning an e-commerce site.</p>
              </div>
            </div>
          </div>
          <div
            className="box200"
            style={{ backgroundImage: 'url("/assets/2.jpg")' }}
          >
            <div className="overlay">
              <div className="box-info">
                <h5>Project company profile site</h5>
                <p>Redesigning a company profile site.</p>
              </div>
            </div>
          </div>
          <div
            className="box200"
            style={{ backgroundImage: 'url("/assets/3.jpg")' }}
          >
            <div className="overlay">
              <div className="box-info">
                <h5>Project coming soon</h5>
                <p>COMING SOON!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-1 gap-y-4">
          <div
            className="box200"
            style={{ backgroundImage: 'url("/assets/4.jpg")' }}
          >
            <div className="overlay">
              <div className="box-info">
                <h3>Project React.js web app</h3>
                <p>create a web app using react.js framework</p>
              </div>
            </div>
          </div>
          <div
            className="box250"
            style={{ backgroundImage: 'url("/assets/5.jpg")' }}
          >
            <div className="overlay">
              <div className="box-info">
                <h3>Project Data Analysis</h3>
                <p>data analysis hookspace youtube account.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;

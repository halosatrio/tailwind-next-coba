import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header id="hero" className="lg:h-screen w-full bg-gray-500">
        <nav className="max-w-screen-xl mx-auto px-4 grid grid-cols-6 md:grid-cols-12 gap-2 sm:gap-4 pt-10 items-center">
          <div className="col-span-2">
            <Image
              src="/assets/Logo.png"
              alt="Logo"
              className="mx-4 w-full relative"
              width={138}
              height={43}
            />
          </div>
          <ul className="md:col-start-4 lg:col-start-6 xl:col-start-7 col-span-4 sm:col-span-3  md:col-span-9 lg:col-span-7 xl:col-span-6 flex justify-end text-xl text-dark-200 font-medium">
            <li className="hidden md:block cursor-pointer hover:underline transition-all mx-4 px-2">
              Feature
            </li>
            <li className="hidden md:block cursor-pointer hover:underline transition-all mx-4 px-2">
              Pricing
            </li>
            <li className="hidden md:block cursor-pointer hover:underline transition-all mx-4 px-2">
              Why Gravity
            </li>
            <li className="hidden md:block cursor-pointer hover:underline transition-all mx-4 px-2 text-teal-900">
              Sign In
            </li>
          </ul>
        </nav>
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-4 mt-12 md:mt-20  justify-evenly md:justify-items-center   max-w-screen-xl mx-auto px-4 lg:items-center pb-24 md:pb-0">
          <div className="w-8/12 md:w-10/12  lg:w-full mx-auto flex flex-col justify-start items-start text-dark-500 mt-12 lg:mt-0 px-4 lg:px-0">
            <h1 className="text-2xl md:text-4xl lg:text-5xl leading-relaxed">
              Simple time tracking.
              <br /> Powerful reporting.
            </h1>
            <p className="my-6 text-base md:text-xl lg:text-2xl">
              Turn your team on to productivity with Gravity the time tracker.
            </p>
            <label
              htmlFor="email"
              className="flex flex-col md:flex-row w-full items-start md:items-center"
            >
              <input
                type="text"
                id="email"
                className="text-dark-500 bg-transparent border-2 w-full md:w-7/12 border-black rounded-lg shadow-sm py-3 px-4 md:text-lg"
              />
              <button className="md:text-lg font-bold border-2 border-black rounded-lg shadow py-3 px-4 bg-teal-900 text-white mt-4 md:mt-0 md:mx-4 hover:bg-teal-600 hover:border-teal-500 transition delay-200">
                Request early access
              </button>
            </label>
          </div>
          <div className="flex items-center justify-start sm:justify-center row-start-1 w-10/12 lg:w-auto lg:col-start-2 mx-auto">
            <Image
              src="/assets/Illustration.png"
              width={620}
              height={664}
              alt="Illustration Time Tracking"
              className="w-full md:w-9/12 lg:w-10/12 flex justify-start"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

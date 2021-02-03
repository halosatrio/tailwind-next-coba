import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="lg:px-20 sm:px-8 px-5 flex justify-between py-12 items-center font-serif">
      <a
        href="/"
        className="no-underline text-center h-14 w-14 border-crimson-500 border-4 flex transition hover:border-gray-750 hover:text-gray-750"
      >
        <span className="text-base m-auto no-underline text-crimson-500 font-serif hover:text-gray-750">
          SAT RIO
        </span>
      </a>

      <ul className="flex list-none w-1/3 justify-end font-serif">
        <li className="font-bold sm:ml-6 ml-5 text-gray-750 hover:text-crimson-500 hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="font-bold sm:ml-6 ml-5 text-gray-750 hover:text-crimson-500 hover:underline">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="font-bold sm:ml-6 ml-5 text-gray-750 hover:text-crimson-500 hover:underline">
          Resume
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

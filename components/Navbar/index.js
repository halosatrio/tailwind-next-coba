import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-20 flex justify-between py-12 items-center font-serif">
      <a
        href="/"
        className="no-underline text-center h-12 w-12 border-crimson-500 border-4 flex transition hover:border-gray-750 hover:border-4"
      >
        <span className="text-base m-auto no-underline text-crimson-500 font-serif transition hover:text-gray-750">
          SAT RIO
        </span>
      </a>

      <ul className="flex list-none w-1/3 justify-end font-serif">
        <li className="font-bold ml-6">
          <Link
            className="no-underline text-gray-750 py-0 px-0.5 font-serif text-sm hover:text-crimson-500 hover:pb-0.5 hover:border-crimson-500 hover:border-b-2"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>Resume</li>
      </ul>
    </nav>
  );
};

export default Navbar;

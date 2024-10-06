import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="px-4 py-3 bg-gray-700 text-white">
        <div className="flex items-center justify-between container mx-auto ">
          <div className="logo">
            <Link href={`/`}>WorldAtlas</Link>
          </div>
          <nav>
            <ul className="flex gap-3">
              <li>
                <Link href={`/`}>Home</Link>
              </li>
              <li>
                <Link href={`/about`}>About</Link>
              </li>
              <li>
                <Link href={`/country`}>Country</Link>
              </li>
              <li>
                <Link href={`/contact`}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

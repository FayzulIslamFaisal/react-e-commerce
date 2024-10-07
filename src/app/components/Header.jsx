"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
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
                <Link
                  className={`px-3 py-1 ${
                    pathname === "/"
                      ? "bg-gray-900 font-semibold capitalize "
                      : ""
                  }`}
                  href={`/`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`px-3 py-1 ${
                    pathname === "/shop"
                      ? "bg-gray-900 font-semibold capitalize "
                      : ""
                  }`}
                  href={`/shop`}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className={`px-3 py-1 ${
                    pathname === "/about"
                      ? "bg-gray-900 font-semibold capitalize "
                      : ""
                  }`}
                  href={`/about`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`px-3 py-1 ${
                    pathname === "/blog"
                      ? "bg-gray-900 font-semibold capitalize "
                      : ""
                  }`}
                  href={`/blog`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={`px-3 py-1 ${
                    pathname === "/country"
                      ? "bg-gray-900 font-semibold capitalize "
                      : ""
                  }`}
                  href={`/country`}
                >
                  Country
                </Link>
              </li>
              <li>
                <Link
                  className={`px-3 py-1 ${
                    pathname === "/contact"
                      ? "bg-gray-900 font-semibold capitalize "
                      : ""
                  }`}
                  href={`/contact`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

import Link from "next/link";

const PageHeader = ({ pageTitle = "", currentPage = "" }) => {
  return (
    <div className="bg-gray-700 flex justify-center items-center h-[220px] ">
      <div className="pb-6">
        <h3 className="mb-6 text-4xl text-white ">{pageTitle} </h3>
        <ul className="flex items-center gap-3 justify-center">
          <li>
            <Link className="text-gray-400" href="/">
              Home /
            </Link>
          </li>
          <li className="text-white">{currentPage}</li>
        </ul>
      </div>
    </div>
  );
};

export default PageHeader;

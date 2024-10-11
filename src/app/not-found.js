import Link from "next/link";

const notFound = () => {
  return (
    <div className="text-white h-screen flex items-center justify-center container mx-auto px-4 ">
      <div className="text-white">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link className="bg-gray-700 px-5 py-2 " href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default notFound;

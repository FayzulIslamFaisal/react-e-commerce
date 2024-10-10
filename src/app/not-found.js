import Link from "next/link";

const notFound = () => {
  return (
    <div className="text-whit ">
      <div>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
};

export default notFound;

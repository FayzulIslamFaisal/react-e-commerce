import Link from "next/link";

const Pagination = ({
  productPerPage,
  totalProducts,
  paginate,
  activePage,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / productPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex justify-center mt-6">
      {/* Previous Button */}
      <li className="mx-1">
        <button
          className={`px-3 py-2 text-white bg-yellow-600 ${
            activePage === 1 ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={() => {
            if (activePage > 1) paginate(activePage - 1);
          }}
          disabled={activePage === 1}
        >
          Prev
        </button>
      </li>

      {/* Page Numbers */}
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`mx-1 text-white page-number ${
            number === activePage ? "bg-yellow-600" : ""
          }`}
        >
          <button className="px-3 py-2" onClick={() => paginate(number)}>
            {number}
          </button>
        </li>
      ))}

      {/* Next Button */}
      <li className="mx-1">
        <button
          className={`px-3 py-2 text-white bg-yellow-600  ${
            activePage === totalPages ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={() => {
            if (activePage < totalPages) paginate(activePage + 1);
          }}
          disabled={activePage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;

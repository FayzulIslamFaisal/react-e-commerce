// import React from 'react'

const SearchComponent = ({
  search,
  setSearch,
  filter,
  setFilter,
  countriesData,
  setCountriesData,
}) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  // Sorting function to handle ascending and descending orders
  const sortCountries = (sortOrder) => {
    const sortedCountries = [...countriesData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.common.localeCompare(b.name.common); // Ascending order
      } else if (sortOrder === "dsc") {
        return b.name.common.localeCompare(a.name.common); // Descending order
      }
      return 0;
    });
    setCountriesData(sortedCountries); // Update state with sorted data
  };

  return (
    <>
      <div className="text-white pb-6 flex justify-between items-center ">
        <div className="">
          <input
            type="text"
            name="search"
            value={search}
            placeholder="Search Country..."
            className="px-3 py-1 text-white bg-transparent border-2 rounded-md border-white"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex gap-4">
          <button
            className="px-3 py-1 text-white bg-transparent border-2 rounded-md border-white"
            onClick={() => sortCountries("asc")}
          >
            Ascending
          </button>
          <button
            className="px-3 py-1 text-white bg-transparent border-2 rounded-md border-white"
            onClick={() => sortCountries("dsc")}
          >
            Descending
          </button>
        </div>
        <div className="w-56">
          <select
            name="filters"
            value={filter}
            onChange={handleSelectChange}
            className="w-full px-3 py-1 text-white bg-black border-2 rounded-md border-white"
          >
            <option></option>
            <option value="all">All</option>
            <option value="bangladesh">bangladesh</option>
            <option value="pakistan">pakistan</option>
            <option value="india">india</option>
            <option value="south georgia">South Georgia</option>
            <option value="switzerland">Switzerland</option>
            <option value="saudi arabia">Saudi Arabia</option>
            <option value="italy">Italy</option>
            <option value="tunisia">Tunisia</option>
            <option value="uganda">Uganda</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;

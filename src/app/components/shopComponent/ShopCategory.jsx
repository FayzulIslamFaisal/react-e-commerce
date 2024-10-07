"use client";
const ShopCategory = ({ menuItem, handleFfilterItem, selectedCategory }) => {
  return (
    <div className="bg-gray-700 mt-8 px-4 py-3">
      <ul className="grid grid-cols-2 gap-2">
        {menuItem &&
          menuItem.map((item, index) => {
            return (
              <li
                onClick={() => handleFfilterItem(item)}
                key={index}
                className={`${
                  selectedCategory === item ? "bg-red-700" : "bg-gray-500"
                } cursor-pointer text-white text-sm px-2 py-2 text-center`}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ShopCategory;

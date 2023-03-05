import { NavLink } from "react-router-dom";

import { useGetAllProductCategoriesQuery } from "../redux/api/productApi";
import Spinner from "./Spinner";

const CategoryFilter = () => {
  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProductCategoriesQuery();

  let content = "";

  if (isSuccess) {
    content = (
      <>
        <div className="flex flex-col shadow-sm border rounded-md">
          <h5 className="w-full p-4 font-bold border-b">Categories</h5>
          <ul className="p-2">
            {categories.map((v, i) => {
              return (
                <li key={i} className="mb-2">
                  <NavLink
                    to={`/products/category/${v}`}
                    className={({ isActive }) =>
                      isActive ? "category-btn-active" : "category-btn"
                    }
                    replace
                  >
                    {v.replace(/-/g, " ")}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  } else if (isLoading) {
    content = <Spinner />;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return content;
};

export default CategoryFilter;

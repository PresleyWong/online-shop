import { useState } from "react";
import { useLocation } from "react-router-dom";

import Paginate from "../components/Paginate";
import Card from "../components/Card";
import Breadcrumbs from "../components/Breadcrumbs";
import CategoryFilter from "../components/CategoryFilter";

const ProductList = ({ products, itemsPerPage = 12 }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentPageData = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  const locationArray = useLocation().pathname.split("/category/");
  const categoryName =
    locationArray.length > 1
      ? locationArray.pop().replace(/-/g, " ").toUpperCase()
      : "";

  return (
    <>
      <Breadcrumbs currentLocation={categoryName} />

      <div className="mb-4 mt-3 grid grid-cols-12 gap-4">
        <div className="sm:col-span-3 hidden sm:block">
          <CategoryFilter />
        </div>
        <div className="col-span-12 sm:col-span-9">
          <div className="flex flex-wrap gap-6 items-start justify-start">
            {currentPageData.map((item, index) => (
              <Card key={index} product={item} />
            ))}
          </div>
        </div>
      </div>

      {pageCount === 1 ? (
        <span></span>
      ) : (
        <div className="d-flex justify-content-center">
          <nav className="my-2 pt-2">
            <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
          </nav>
        </div>
      )}
    </>
  );
};

export default ProductList;

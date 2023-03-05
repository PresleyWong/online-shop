import { Link } from "react-router-dom";

const Breadcrumbs = ({ currentLocation }) => {
  return (
    <nav className="w-full rounded-md bg-gray-200 p-5 my-10">
      <ol className="list-reset flex">
        <li>
          <Link
            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 "
            to="/products"
            replace
          >
            ALL PRODUCTS
          </Link>
        </li>
        <li>
          <span className="mx-2 text-neutral-500">/</span>
        </li>

        <li>
          <span className="text-neutral-500 uppercase">{currentLocation}</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

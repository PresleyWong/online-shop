import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";

import SearchBar from "./SearchBar";
import { getTotals } from "../redux/features/cart/cartSlice";
import CategoryFilter from "./CategoryFilter";

const Header = () => {
  const { cartTotalQuantity, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  const Brand = () => (
    <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 hidden lg:block">
      <Link to="/" className="flex gap-x-2 items-center text-2xl">
        <img
          className="h-7 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Online Shop"
        />
        Online Shop
      </Link>
    </div>
  );

  const Menu = () => (
    <nav>
      <div className="flex w-full flex-wrap items-center justify-between">
        <div className="flex items-center">
          <button
            className="mr-2 border-0 bg-transparent py-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 sm:hidden"
            type="button"
            data-te-collapse-init=""
            data-te-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div
        className="!visible hidden grow basis-[100%] items-center sm:!flex sm:basis-auto"
        id="navbarSupportedContentY"
      >
        <ul className="mr-auto flex flex-col gap-y-5 sm:flex-row sm:items-center sm:gap-x-5">
          <li>
            <Link
              to="/products"
              className="block transition duration-150 ease-in-out hover:text-neutral-700 sm:p-2 [&.active]:text-black/90"
            >
              Explore
            </Link>
          </li>
          <li>
            <span className="block transition duration-150 ease-in-out hover:text-neutral-700 sm:p-2 [&.active]:text-black/90">
              <SearchBar />
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );

  const CartButton = () => (
    <button
      type="button"
      className="rounded-md border-2 border-neutral-800 px-3 py-1.5 text-gray-800 hover:bg-black hover:text-gray-100 transition duration-300 hover:scale-110"
    >
      <Link to="/cart">
        <ShoppingBagIcon className="h-7  inline" />
        <span className="ml-2 px-2.5 py-1.5 text-xs font-bold rounded-[800px] bg-black text-white">
          {cartTotalQuantity}
        </span>
      </Link>
    </button>
  );

  return (
    <div className="py-5 border-b sticky top-0 z-30 bg-gray-50">
      <header className="flex items-center justify-between mx-auto max-w-7xl px-10">
        <Brand />
        <Menu />
        <CartButton />
      </header>
    </div>
  );
};

export default Header;

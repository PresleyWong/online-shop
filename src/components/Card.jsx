import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/features/cart/cartSlice";
import Button from "./Button";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="flex mx-auto shadow-lg transition duration-300 hover:scale-110">
      <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
        <Link to={`/product/${product.id}`}>
          <img
            className="rounded-t-lg object-cover h-48 w-96"
            src={product.thumbnail}
            alt={product.title}
          />
        </Link>
        <div className="flex flex-col justify-center gap-y-2 h-[150px]">
          <h5 className="text-center text-base font-medium leading-tight text-neutral-800">
            {product.title}
          </h5>
          <p className="text-sm text-center text-neutral-600 dark:text-neutral-200">
            ${product.price}
          </p>

          <div className="flex justify-center">
            <Button
              text="Add To Cart"
              onClick={() => handleAddToCart(product)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

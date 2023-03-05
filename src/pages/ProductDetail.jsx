import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Spinner from "../components/Spinner";
import { useGetProductDetailQuery } from "../redux/api/productApi";
import { addToCart } from "../redux/features/cart/cartSlice";
import Button from "../components/Button";
import Breadcrumbs from "../components/Breadcrumbs";

const ProductDetail = () => {
  const { productId } = useParams();
  const { data, isLoading, isSuccess, isError, error } =
    useGetProductDetailQuery(productId);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  let content = "";

  if (isSuccess) {
    content = (
      <>
        <Breadcrumbs currentLocation={data.title} />

        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 sm:col-span-6 columns-3xl">
            <div className="grid grid-cols-12">
              <div className="col-span-12 mb-4">
                <img
                  className="border rounded"
                  alt={data.title}
                  src={data.thumbnail}
                />
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 flex flex-col gap-y-8 px-5">
            <div>
              <h1 className=" font-black">{data.title}</h1>
              <h3 className="text-slate-500">${data.price}</h3>
            </div>

            <div className="col">
              <Button
                text="Add To Cart"
                onClick={() => handleAddToCart(data)}
              />
            </div>

            <div>
              <h3>Details</h3>
              <hr className="my-3" />
              <dl className="grid grid-cols-12">
                <dt className="col-span-4">Category</dt>
                <dd className="col-span-8">{data.category}</dd>

                <dt className="col-span-4">Brand</dt>
                <dd className="col-span-8">{data.brand}</dd>

                <dt className="col-span-4">Stock</dt>
                <dd className="col-span-8">{data.stock}</dd>

                <dt className="col-span-4">Rating</dt>
                <dd className="col-span-8">{data.rating}/5</dd>
              </dl>
            </div>

            <div>
              <h3>Description</h3>
              <hr className="my-3" />
              <p>{data.description}</p>
            </div>
          </div>
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

export default ProductDetail;

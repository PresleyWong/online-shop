import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../redux/api/productApi";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

const Homepage = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllProductsQuery(6);

  const FeatureProduct = (props) => (
    <div className="flex flex-col items-center justify-center sm:flex-row flex-wrap gap-y-10">
      {props.products.map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </div>
  );

  let content = "";

  if (isSuccess) {
    content = (
      <>
        <Carousel />
        <div className="d-flex flex-column bg-white py-4">
          <p className="text-center px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <h2 className="text-lg text-center font-bold mt-4 mb-3">New Arrival</h2>

        <FeatureProduct products={data.products} />
      </>
    );
  } else if (isLoading) {
    content = <Spinner />;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <div className="mb-10">{content}</div>;
};

export default Homepage;

import { useGetAllProductsQuery } from "../redux/api/productApi";
import Spinner from "../components/Spinner";
import ProductList from "../components/ProductList";

const Products = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllProductsQuery(100);

  let content;

  if (isSuccess) {
    content = <ProductList products={data.products} />;
  } else if (isLoading) {
    content = <Spinner />;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return content;
};

export default Products;

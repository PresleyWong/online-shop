import Spinner from "../components/Spinner";
import { useSearchParams } from "react-router-dom";
import { useGetProductSearchQuery } from "../redux/api/productApi";
import ProductList from "../components/ProductList";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading, isSuccess, isError, error } =
    useGetProductSearchQuery(searchParams.get("q"));

  let content = "";

  if (isSuccess) {
    content = <ProductList products={data.products} />;
  } else if (isLoading) {
    content = <Spinner />;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return content;
};

export default SearchResults;

import { useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useGetProductByCategoryQuery } from "../redux/api/productApi";
import ProductList from "../components/ProductList";

const Category = () => {
  const cat = useLocation().pathname.split("/").pop();
  const { data, isLoading, isSuccess, isError, error } =
    useGetProductByCategoryQuery(cat);

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

export default Category;

import { useEffect, useState } from "react";
import { instance } from "../customHooks/useAxios";
import Card from "../components/Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    instance
      .get(`/products`)
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 my-10">
      {products?.map((product) => {
        return <Card product={product} key={product._id} />;
      })}
    </div>
  );
};

export default Products;

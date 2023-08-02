import { useEffect, useState } from "react";
import { instance } from "../customHooks/useAxios";
import Card from "../components/Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    instance
      .get(`/product.json`)
      .then((res) => {
        setProducts(res.data.products);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 my-10">
      {products.map((product) => {
        return <Card product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Products;

import React, { useContext, useEffect, useState } from "react";
import { instance } from "../customHooks/useAxios";
import { CONTEXT } from "../Context/Context";
import { Link } from "react-router-dom";


const DisplayCartItems = () => {
  const [items, setItems] = useState([]);
  const { cart,removeItem, loading } = useContext(CONTEXT);

  useEffect(() => {
    instance
      .get(`/cart-items?ids=${cart}`)
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cart]);
console.log(cart)
  if (loading) {
    return 
  }

 
   
  return (
    <div className="grid grid-cols-4">
      <div className="grid grid-cols-1 col-span-3 gap-5 mx-10">
        {items.map((product) => (
          <Card product={product} key={product._id} removeItem={removeItem} />
        ))}
      </div>
      <div>
        <h1 className="text-center font-bold text-3xl">Order summary</h1>
        <h1 className="text-lg mt-5">
          Total price : ${items.reduce((total, item) => total + item.price, 0)}
        </h1>
      </div>
    </div>
  );
};
const Card = ({ product,removeItem }) => {
  const { _id, name, image, price } = product;

  return (
    <div className="flex gap-5 border shadow-lg shadow-slate-100 rounded-md h-[200px]">
      <Link to={`/phone/${_id}`}>
        <div className="h-[180px]">
          <img className=" w-full h-full rounded-md" src={image} alt="" />
        </div>
      </Link>
      <div className="px-4 pb-4 space-y-5 flex flex-col items-center justify-center">
        <Link to={`/phone/${_id}`}>
          <h1 className="text-2xl font-bold text-center hover:text-blue-600">
            {name}
          </h1>
        </Link>
        <div className="flex items-center justify-between">
          <p className="flex gap-5 items-center font-bold text-2xl">
            <span className=" text-black">Price</span>{" "}
            <span className="text-[#39bb12] ">${price}</span>
          </p>
        </div>
        <div>
          <button onClick={()=>removeItem(_id)}>Delete</button>
          <button>Increase</button>
          <button>Increase</button>
        </div>
      </div>
    </div>
  );
};
export default DisplayCartItems;

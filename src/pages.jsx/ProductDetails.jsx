import React, { useContext, useEffect, useState } from "react";
import { instance } from "../customHooks/useAxios";
import { useParams } from "react-router-dom";
import { CONTEXT } from "../Context/Context";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const value = useContext(CONTEXT);
  console.log(value);
  useEffect(() => {
    instance
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const {
    name,
    image,
    description,
    price,
    specifications,
    availability,
    customerReviews,
    shippingInfo,
  } = product;
  console.log(product);
  return (
    <>
      {product.name ? (
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Product Details
          </h1>
          <div className=" mx-auto bg-white rounded-md shadow-lg p-6">
            <div className="grid grid-cols-2 gap-10">
              <div className="w-[500px] h-[400px]">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full rounded-lg mb-4"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-green-600 font-semibold text-3xl">
                  ${price}
                </p>
                {availability ? (
                  <p className="text-green-600 mt-4">In stock</p>
                ) : (
                  <p className="text-red-600 mt-4">Out of stock</p>
                )}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">
                    Shipping Information:
                  </h3>
                  <p className="text-gray-600">
                    Delivery Time: {shippingInfo.delivery_time}
                  </p>
                  <p className="text-gray-600">
                    Shipping Cost: {shippingInfo.shipping_cost}
                  </p>
                </div>
                <div className="mt-10">
                  <button className="bg-[#2A2F44] text-white font-bold  py-2 px-4 rounded-md">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-600 mb-4">{description}</p>
              <h3 className="text-lg font-semibold">Specifications:</h3>
              <ul className="list-disc list-inside pl-4">
                <li>Screen Size: {specifications?.screen_size}</li>
                <li>Processor: {specifications?.processor}</li>
                <li>RAM: {specifications?.ram}</li>
                <li>Storage: {specifications?.storage}</li>
                <li>Camera: {specifications?.camera}</li>
                <li>Battery: {specifications?.battery}</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">Customer Reviews:</h3>
              <ul className="list-none pl-0">
                {customerReviews?.map((review, index) => (
                  <li key={index} className="mb-2">
                    <p className="text-gray-600 mb-1">
                      {review.username} rated it {review.rating} stars.
                    </p>
                    <p className="text-gray-800">{review.review}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-3xl text-center font-bold mt-10">Loading...</h1>
      )}
    </>
  );
};

export default ProductDetails;

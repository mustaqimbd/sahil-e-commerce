import { useContext } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { CONTEXT } from "../Context/Context";

const Card = ({ product }) => {
    const { addToCart } = useContext(CONTEXT);
  const { _id, name, image, price, customerReviews, description } = product;
  const sum = customerReviews.reduce(
    (accumulator, currentValue) => accumulator + currentValue.rating,
    0
  );
  const rating = sum / customerReviews.length;
  return (
    <div className="border shadow-lg shadow-slate-100 rounded-md">
      <Link to={`/phone/${_id}`}>
        <div className="h-[411px]">
          <img className=" w-full h-full rounded-md" src={image} alt="" />
        </div>
      </Link>
      <div className="px-4 pb-4 space-y-5">
        <Link to={`/phone/${_id}`}>
          <h1 className="text-2xl font-bold text-center hover:text-blue-600">{name}</h1>
        </Link>

        <div className="flex items-center justify-between">
          <p className="flex gap-5 items-center font-bold text-2xl">
            <span className=" text-black">Price</span>{" "}
            <span className="text-[#39bb12] ">${price}</span>
          </p>
          <div className="flex items-center gap-2">
            <StarRatings
              rating={rating}
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              starDimension="18px"
              starSpacing="1px"
            />
            <span>{rating}</span>
          </div>
        </div>
        <div>
          <p className="text-justify">{description.slice(0, 100)}...</p>
        </div>
        <button onClick={()=>addToCart(_id)} className="bg-[#2A2F44] text-white font-bold flex items-center justify-center w-full py-2 px-4 rounded-md">
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};
export default Card;

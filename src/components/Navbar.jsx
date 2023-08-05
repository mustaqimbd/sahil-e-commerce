import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { CONTEXT } from "../Context/Context";

const Navbar = () => {
  const { cart, loading } = useContext(CONTEXT);
  const navigate = useNavigate();
  const showCartItems = () => {
    console.log("first");
    navigate("/cart-items", { replace: true });
  };

  return (
    <div>
      <nav className="bg-[#2A2F44]">
        <ul className="text-white text-lg font-medium grid grid-cols-6 justify-between items-center text-center h-20 mx-5">
          <li className="col-span-2 flex justify-start">
            <Link>Logo</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li className="col-span-2 flex justify-end items-center gap-1">
            <button
              onClick={showCartItems}
              className="flex justify-end items-center gap-1 relative"
            >
              <FaCartPlus />
              <span>Cart</span>
              <span className="text-sm absolute -top-3 left-2 bg-blue-600 px-1 rounded-full">
                {cart?.length}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

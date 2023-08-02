import { Link } from "react-router-dom";

const Navbar = () => {
  

  return (
    <div>
      <nav className="bg-[#2A2F44]">
        <ul className="text-white text-lg font-medium grid grid-cols-6 justify-between items-center text-center h-20 mx-5">
          <li className="col-span-2 flex justify-start">
            <Link>Logo</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li className="col-span-2 flex justify-end">
            <span>Cart</span>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Navbar;
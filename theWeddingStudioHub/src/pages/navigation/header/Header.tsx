import { Link } from "react-router-dom";
import logo_black from "../../../assets/logo/logo_black.png";

function Header() {
  return (
    <div className="bg-gray-100 flex p-2 w-full">
      <div className="flex items-center justify-center w-[40%] space-x-6">
        <Link
          to="/"
          className="hover:text-gray-400 poppins font-medium text-xl"
        >
          HOME
        </Link>
        <Link
          to="/"
          className="hover:text-gray-400 poppins font-medium text-xl"
        >
          SHOP
        </Link>
        <Link
          to="/"
          className="hover:text-gray-400 poppins font-medium text-xl"
        >
          FEATURED
        </Link>
        <Link
          to="/"
          className="hover:text-gray-400 poppins font-medium text-xl"
        >
          PAGES
        </Link>
      </div>
      <div className="w-[20%]">
        <Link to="/" className="flex items-center justify-center space-x-2">
          <img src={logo_black} className="w-20" alt="" />
          <div className="leading-3">
            <p className="text-left text-md">The</p>
            <p className="font-bold text-lg poppins">WeddingStudio</p>
            <p className="text-right text-md font-semibold">Hub</p>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center space-x-6 w-[40%]">
        <Link to="/">
          <i className="fa-solid fa-user text-[30px]"></i>
        </Link>
        <Link to="/">
          <i className="fa-solid fa-heart text-[30px]"></i>
        </Link>
        <Link to="/">
          <i className="fa-solid fa-bag-shopping text-[30px]"></i>
        </Link>
      </div>
    </div>
  );
}

export default Header;

import { Link } from "react-router-dom";
import logo_black from "../../../assets/logo/logo_black.png";
import { IoBagRemoveOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";

function Header() {
  return (
    <div className="bg-white flex p-2 w-full">
      <div className="flex items-center justify-center w-[40%] space-x-6">
        <Link to="/" className="hover:text-gray-400 jost font-medium text-xl">
          HOME
        </Link>
        <Link
          to="/contact-us"
          className="hover:text-gray-400 jost font-medium text-xl"
        >
          CONTACT
        </Link>
        <Link to="/" className="hover:text-gray-400 jost font-medium text-xl">
          FEATURED
        </Link>
        <Link to="/" className="hover:text-gray-400 jost font-medium text-xl">
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
          <HiOutlineUser className="text-[30px]" />
        </Link>
        <Link to="/">
          <IoMdHeartEmpty className="text-[30px]" />
        </Link>
        <Link to="/">
          {/* <i className="fa-solid fa-bag-shopping text-[30px]"></i> */}
          <IoBagRemoveOutline className="text-[30px]" />
        </Link>
      </div>
    </div>
  );
}

export default Header;

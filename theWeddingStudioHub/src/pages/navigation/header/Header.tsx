import { useState } from "react";
import { Link } from "react-router-dom";
import logo_black from "../../../assets/logo/logo_black.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white flex p-2 w-full md:flex-row justify-between px-2 md:px-10">
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo_black} className="w-20" alt="" />
          <div className="leading-3">
            <p className="text-left text-md">The</p>
            <p className="font-bold text-lg poppins">WeddingStudio</p>
            <p className="text-right text-md font-semibold">Hub</p>
          </div>
        </Link>
      </div>
      <div
        className="md:flex items-center justify-center space-x-6 mt-2 hidden md:mt-0"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <Link
          to="/"
          className="hover:text-gray-400 jost font-medium text-lg md:text-xl"
        >
          HOME
        </Link>
        <Link
          to="/contact-us"
          className="hover:text-gray-400 jost font-medium text-lg md:text-xl"
        >
          CONTACT
        </Link>
        <Link
          to="/about-us"
          className="hover:text-gray-400 jost font-medium text-lg md:text-xl"
        >
          ABOUT US
        </Link>
        {/* <Link
          to="/"
          className="hover:text-gray-400 jost font-medium text-lg md:text-xl"
        >
          PAGES
        </Link> */}
      </div>
      {/* <div className="flex items-center justify-center space-x-6 w-[40%]">
//         <Link to="/">
//           <HiOutlineUser className="text-[30px]" />
//         </Link>
//         <Link to="/">
//           <IoMdHeartEmpty className="text-[30px]" />
//         </Link>
//         <Link to="/">
//           <IoBagRemoveOutline className="text-[30px]" />
//         </Link>
//       </div> */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <IoCloseSharp className="text-[30px]" />
        ) : (
          <HiMenuAlt3 className="text-[30px]" />
        )}
      </button>
      {showMenu && (
        <div
          className="flex flex-col mt-2 md:hidden absolute top-[70px] right-4 bg-slate-100 z-[1] rounded-sm py-[10px] px-[30px]"
          onMouseLeave={() => setShowMenu(!showMenu)}
        >
          <Link
            to="/"
            className="hover:text-gray-400 jost font-medium text-lg md:text-xl"
          >
            HOME
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-gray-400 jost font-medium text-lg md:text-xl"
          >
            CONTACT
          </Link>
          <Link
            to="/about-us"
            className="hover:text-gray-400 jost font-medium text-lg md:text-xl"
          >
            ABOUT US
          </Link>
          {/* <Link
            to="/"
            className="hover:text-gray-400 jost font-medium text-lg md:text-xl"
          >
            PAGES
          </Link> */}
        </div>
      )}
    </div>
  );
}

export default Header;

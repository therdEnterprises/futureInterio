// header.tsx
import { useNavigate } from "react-router-dom";
import logo_black from "../assets/logo_white.png";

interface HeaderProps {
  background: string;
}

function Header({ background }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="flex justify-between bg-[#2A1212] p-5 md:fixed top-0 text-white w-full"
        style={{ backgroundColor: background, zIndex: 1 }}
      >
        <div
          className="leading-3 cursor-pointer justify-self-center self-center"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src={logo_black}
            className="w-[50px] md:w-[150px] md:fixed"
            alt=""
          />
        </div>
        <div className="flex self-center space-x-5">
          {/* <p
            className="hover:text-[#fecaca] cursor-pointer jost text-[25px]"
            onClick={() => {
              navigate("/products");
            }}
          >
            Products
          </p> */}
          {/* <p className="hover:text-[#fecaca] cursor-pointer jost text-[25px]">
            Shop
          </p> */}
          <p
            className="hover:text-[#fecaca] cursor-pointer jost text-[25px]"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contacts
          </p>
        </div>
      </div>
      <div className="self-center text-center flex-col hidden md:fixed top-[45%] right-[60px] text-white ml-[-20px]">
        <div>
          {/* <i className="fa-solid fa-arrow-up"></i> */}
          <i className="fa-solid fa-arrow-up-long"></i>
        </div>
        <div>
          <i className="fa-solid fa-circle"></i>
        </div>
        <div>
          <i className="fa-regular fa-circle"></i>
        </div>
        <div>
          <i className="fa-solid fa-arrow-down-long"></i>
        </div>
      </div>
    </>
  );
}

export default Header;

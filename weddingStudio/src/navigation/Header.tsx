// header.tsx
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  background: string;
}

function Header({ background }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="flex justify-between bg-[#2A1212] p-5 fixed top-0 text-white w-full"
        style={{ backgroundColor: background, zIndex: 1 }}
      >
        <div
          className="leading-3 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <p className="text-left text-md">the</p>
          <p className="font-bold text-lg">WeddingStudio</p>
          <p className="text-right text-md font-semibold">Hub</p>
        </div>
        <div className="flex self-center space-x-5">
          <p className="hover:text-[#fecaca] cursor-pointer jost text-[25px]">
            Products
          </p>
          <p className="hover:text-[#fecaca] cursor-pointer jost text-[25px]">
            Shop
          </p>
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
      <div className="self-center text-center flex-col fixed top-[45%] right-[60px] text-white ml-[-20px]">
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

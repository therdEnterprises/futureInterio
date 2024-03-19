import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between bg-white p-5 fixed top-0 text-black w-full">
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
          {/* <p
            className="hover:text-gray-600 cursor-pointer jost text-[25px]"
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
            className="hover:text-gray-600 cursor-pointer jost text-[25px]"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contacts
          </p>
        </div>
      </div>
    </>
  );
}

export default Navigation;

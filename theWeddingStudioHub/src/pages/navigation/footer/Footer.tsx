import { Link } from "react-router-dom";
import logo_black from "../../../assets/logo/logo_black.png";
import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  const style: React.CSSProperties = {
    padding: "0 25px",
    lineHeight: "40px",
    height: "40px",
    width: "100%",
    borderRadius: "unset",
    background: "#fff",
    border: "0",
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    // Handle button click logic here
    console.log("Button clicked!");
  };
  return (
    <div className="bg-[#f4f4f4] border-t-[1px] mt-16">
      <div className="mr-5 ml-5 sm:mr-[5%] sm:ml-[5%] md:mr-[15%] md:ml-[15%] pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 md:gap-24">
          <div className="space-y-6 jost text-[16px]">
            <Link to="/" className="flex items-center space-x-4">
              <img src={logo_black} className="w-20" alt="" />
              <div className="leading-3">
                <p className="text-left text-md">The</p>
                <p className="font-bold text-lg poppins">WeddingStudio</p>
                <p className="text-right text-md font-semibold">Hub</p>
              </div>
            </Link>
            <p>Subscribe our newsletter and get discount 30% off</p>
            <div className="flex">
              <input
                // className="p-2 bg-white"
                style={style}
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Your Email Address..."
              />
              <button
                style={{
                  ...style,
                  background: `black`,
                  width: "40px",
                  color: "white",
                  padding: "0px 10px 0px 8px",
                }}
                className="bg-black text-white hover:bg-[#e9ac98]"
                onClick={handleClick}
              >
                <FaTelegramPlane className="text-[24px]" />
              </button>
            </div>
          </div>
          <div className="hidden">2</div>
          <div className="hidden">3</div>
          <div>4</div>
        </div>
      </div>

      <div className="bg-[#f4f4f4] border-t-[1px] p-4 mt-10">
        <div className="mr-5 ml-5 sm:mr-[5%] sm:ml-[5%] md:mr-[15%] md:ml-[15%]">
          © Copyright 2024 | The Wedding Studio Hub By{" "}
          <a
            className="text-[#6c6c6c]"
            href="https://therdenterprises.com/"
            target="_blank"
          >
            TheRDEnterprises.
          </a>{" "}
          Powered by{" "}
          <a
            className="text-[#6c6c6c]"
            href="https://rhinontech.in/"
            target="_blank"
          >
            Rhinon Technologies.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

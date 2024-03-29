import { FaAngleRight } from "react-icons/fa6";
import contactCover from "../../assets/contact/contact.jpg";
import contactMap from "../../assets/contact/contact_us.jpg";
import { GrInstagram } from "react-icons/gr";

const contentStyle: React.CSSProperties = {
  height: "450px",
  backgroundImage: `url(${contactCover})`,
  backgroundSize: "cover",
};

const spacingStyle: React.CSSProperties = {
  letterSpacing: "5px",
};

function Contact() {
  const handleClick = () => {
    window.open("https://www.instagram.com/the_weddingstudio_hub/", "_blank");
  };
  return (
    <div className="space-y-10">
      <div
        style={contentStyle}
        className="flex flex-col items-center justify-center text-white"
      >
        <p className="text-[46px] font-[500] jost">Contact Us</p>
        <div className="text-[16px] font-[500] jost flex items-center">
          <p>Home</p>&nbsp;&nbsp;
          <span className="flex items-center">
            <FaAngleRight />
          </span>
          &nbsp;&nbsp;
          <p>Contact Us</p>
        </div>
      </div>
      <div className="mr-5 ml-5 md:mr-[20%] md:ml-[20%]">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#f7f7f7]">
          {/* flex flex-wrap items-center */}
          <div style={{ padding: "20px 60px" }} className="self-center">
            <p
              style={{ ...spacingStyle, letterSpacing: `4.8px` }}
              className="text-[14px] font-[400] jost uppercase"
            >
              CONTACT INFORMATION
            </p>
            <p className="text-transparent inline-flex border-b-[2px] mb-8 border-orange-600">
              -------------
            </p>
            <p className="text-[#969696] text-[14px] jost">
              We do not sell product from our corporate headquarters in New York
              City. If you want to visit, please reach out to our customer
              service team first.{" "}
            </p>
            <p className="text-[#969696] text-[14px] jost pt-2 mb-10">
              1201 Broadway Suite 600
            </p>
            <a
              href="mailto:info@therdenterprises.com"
              className="text-[20px] md:text-[28px] font-[500] underline"
            >
              info@therdenterprises.com
            </a>
            <p
              style={{ ...spacingStyle, letterSpacing: `4.8px` }}
              className="text-[14px] font-[400] jost uppercase mt-10"
            >
              Follow Us
            </p>
            <p className="text-transparent inline-flex border-b-[2px] mb-8 border-orange-600">
              -------------
            </p>
            <div>
              <GrInstagram
                className="text-[30px] hover:text-[#E4405F] cursor-pointer"
                onClick={() => handleClick()}
              />
            </div>
          </div>
          <div className="">
            <img src={contactMap} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;

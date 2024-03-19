import { Input } from "antd";
import logo_black from "../assets/logo_black.png";
function Contact() {
  return (
    <div className="pt-[95px] h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 h-full">
        <div className="justify-self-center self-center">
          <img src={logo_black} className="w-[300px] md:w-[450px]" alt="" />
        </div>
        <div className="self-center p-10 md:p-0 md:w-[70%]">
          <p className="text-3xl font-extrabold jost pb-10">Contact us</p>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="jost font-bold text-xl pb-5">Visit us</p>
              <p>Commercial Street </p>
            </div>
            <div>
              <p className="jost font-bold text-xl pb-5">Contact us</p>
              <p>(962) 095-7589</p>
            </div>
          </div>

          <div className="flex pt-10">
            <Input size="large" type="email" placeholder="Email" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="bg-black text-white hover:bg-gray-700 rounded-lg p-2 jost">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

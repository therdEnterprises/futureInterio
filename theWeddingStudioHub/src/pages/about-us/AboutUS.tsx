import { FaAngleRight } from "react-icons/fa6";
import contactCover from "../../assets/contact/contact.jpg";
import about from "../../assets/about/about.jpg";
import { TbNeedleThread } from "react-icons/tb";
import { RiPlantFill } from "react-icons/ri";
import { SiFreelancer } from "react-icons/si";

const contentStyle: React.CSSProperties = {
  height: "450px",
  backgroundImage: `url(${contactCover})`,
  backgroundSize: "cover",
};
function AboutUs() {
  return (
    <div className="space-y-10">
      <div
        style={contentStyle}
        className="flex flex-col items-center justify-center text-white"
      >
        <p className="text-[46px] font-[500] jost">Our Story</p>
        <div className="text-[16px] font-[500] jost flex items-center">
          <p>Home</p>&nbsp;&nbsp;
          <span className="flex items-center">
            <FaAngleRight />
          </span>
          &nbsp;&nbsp;
          <p>About Us</p>
        </div>
      </div>
      <div className="mr-5 ml-5 lg:mr-[10%] lg:ml-[10%] xl:mr-[15%] xl:ml-[15%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="m-2 pr-10 flex flex-col self-center">
            <p className="text-[40px] font-[600] jost leading-[42px]">
              Fashion Style <br /> Love From Our Passion
            </p>
            <p className="text-[16px] font-[400] jost pt-6">
              Suspendisse non nisl sit amet velit hendrerit rutrum. Nulla porta
              dolor. Nunc interdum lacus sit amet orci. Donec orci lectus,
              aliquam ut, faucibus non, euismod id, nulla. Etiam sit amet orci
              eget eros faucibus tincidunt.
            </p>
            <p className="text-[15px] font-[400] jost pt-10 text-[#969696]">
              Maecenas egestas arcu quis ligula mattis placerat. Quisque id mi.
              Sed a libero. Vestibulum ullamcorper mauris at ligula. Aenean
              posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
              sollicitudin urna dolor sagittis lacus.
            </p>
          </div>
          <div className="">
            <img src={about} alt="" className="w-full" />
          </div>
        </div>
      </div>
      <div className="mr-5 ml-5 lg:mr-[10%] lg:ml-[10%] xl:mr-[15%] xl:ml-[15%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-black text-white w-full h-[345px] flex flex-col items-center justify-center">
            <TbNeedleThread className="text-[80px]" />
            &nbsp;&nbsp;
            <p className="text-[20px] font-[600] jost">Product Design</p>
          </div>
          <div className="bg-black text-white w-full h-[345px] flex flex-col items-center justify-center">
            <RiPlantFill className="text-[80px]" />
            &nbsp;&nbsp;
            <p className="text-[20px] font-[600] jost">Quality Assurance</p>
          </div>
          <div className="bg-black text-white w-full h-[345px] flex md:col-span-2 lg:col-span-1 flex-col items-center justify-center">
            <SiFreelancer className="text-[80px]" />
            &nbsp;&nbsp;
            <p className="text-[20px] font-[600] jost">Photography</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

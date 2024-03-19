import brideImage from "../assets/bride.png";
import groomImage from "../assets/groom.png";
// import brideBlogImage from "../assets/brideBlog.png";
// import groomBlogImage from "../assets/groomBlog.png";

function Home() {
  return (
    <>
      <div className="h-screen bg-[#2A1212] text-white md:pt-[95px]">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-0">
          <div className="self-center md:block hidden col-span-1 text-center">
            <p className="font-[400] tangerine-regular text-[112px] leading-[112px]">
              01
            </p>
          </div>
          <div className="self-center col-span-2 text-center md:text-left">
            <div>
              <p className="font-[400] tangerine-regular text-[64px] md:text-[112px] leading-[64px] md:leading-[112px] pl-5">
                Authorised
              </p>
              <p className="font-[400] tangerine-regular text-[32px] md:text-[64px]  leading-[32px] md:leading-[64px]">
                to{" "}
                <span className="font-[400] playfair-display   text-[36px] md:text-[94px]">
                  GRAB
                </span>{" "}
                the
              </p>
              <p className="playfair-display  text-[36px] md:text-[94px]  leading-[36px] md:leading-[94px]">
                ATTENTION
              </p>
            </div>
            <div className="justify-center items-center mt-10 hidden md:flex">
              <p className="flex items-center pl-7 pr-7 pt-2 pb-2 border-white border-2 rounded-full playfair-display text-[18px] cursor-pointer hover:bg-[#300000]">
                Explore{" "}
                <span className="ml-5 border-[1px] border-white w-11"></span>
              </p>
            </div>
          </div>
          <div className="self-center col-span-2 text-center justify-self-center">
            <img
              src={brideImage}
              className="w-48 mt-10 md:mt-0 md:w-72 rounded-full"
              alt=""
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-[0%] md:w-[20%] hidden md:flex justify-center pl-[15px] pr-[15px]">
            {/* <div>
              <img
                src={brideBlogImage}
                className="w-[80px] rounded-full mt-[-50px]"
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="jost text-[24px] font-[500]">BLOG</p>
              <p className="jost text-[20px] font-[500] leading-[20px]">
                Buy One Get One Free
              </p>
            </div> */}
          </div>
          <div className="w-[100%] md:w-[50%] flex">
            <div className="text-center pl-2 pr-2">
              <p className="jost text-[24px] font-[500]">LEHENGA</p>
              <p>Rare-colored lehengas, intricate jari and stone work.</p>
            </div>
            <div className="text-center pl-2 pr-2">
              <p className="jost text-[24px] font-[500]">GOWNS</p>
              <p>Contemporary gowns, luxurious fabrics, bespoke options.</p>
            </div>
          </div>
          <div className="w-[0%] md:w-[30%] justify-end pr-5 self-end hidden md:flex">
            <p>
              <i className="fa-brands fa-whatsapp text-[30px] hover:text-[#25D366] cursor-pointer"></i>
            </p>
            &nbsp;&nbsp;
            <p>
              <i className="fa-brands fa-instagram text-[30px] hover:text-[#E4405F] cursor-pointer"></i>
            </p>
          </div>
        </div>
        <div className="justify-center self-center flex md:hidden mt-10">
          <p>
            <i className="fa-brands fa-whatsapp text-[30px] hover:text-[#25D366] cursor-pointer"></i>
          </p>
          &nbsp;&nbsp;
          <a href="https://www.instagram.com/the_weddingstudio_hub/">
            <i className="fa-brands fa-instagram text-[30px] hover:text-[#E4405F] cursor-pointer"></i>
          </a>
        </div>
      </div>
      <div className="h-screen bg-[#0C233C] text-white pt-[30px] md:pt-[95px]">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-0">
          <div className="self-center md:block hidden col-span-1 text-center">
            <p className="font-[400] tangerine-regular text-[112px] leading-[112px]">
              02
            </p>
          </div>
          <div className="self-center col-span-2 text-center md:text-left">
            <div>
              <p className="font-[400] tangerine-regular text-[64px] md:text-[112px] leading-[64px] md:leading-[112px] pl-5">
                Authorised
              </p>
              <p className="font-[400] tangerine-regular text-[32px] md:text-[64px]  leading-[32px] md:leading-[64px]">
                to{" "}
                <span className="font-[400] playfair-display text-[36px] md:text-[94px]">
                  GRAB
                </span>{" "}
                the
              </p>
              <p className="playfair-display  text-[36px] md:text-[94px]  leading-[36px] md:leading-[94px]">
                ATTENTION
              </p>
            </div>
            <div className="justify-center items-center mt-10 hidden md:flex">
              <p className="flex items-center pl-7 pr-7 pt-2 pb-2 border-white border-2 rounded-full playfair-display text-[18px] cursor-pointer hover:bg-[#001337]">
                Explore{" "}
                <span className="ml-5 border-[1px] border-white w-11"></span>
              </p>
            </div>
          </div>
          <div className="self-center col-span-2 text-center justify-self-center">
            <img
              src={groomImage}
              className="w-48 mt-10 md:mt-0 md:w-72 rounded-full"
              alt=""
            />
          </div>
        </div>
        <div className="flex mt-5 md:mt-0">
          <div className="w-[0%] md:w-[20%] hidden md:flex justify-center pl-[15px] pr-[15px]">
            {/* <div>
              <img
                src={groomBlogImage}
                className="w-[80px] rounded-full mt-[-50px]"
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="jost text-[24px] font-[500]">BLOG</p>
              <p className="jost text-[20px] font-[500] leading-[20px]">
                Coming Soon
              </p>
            </div> */}
          </div>
          <div className="w-[100%] md:w-[50%] flex">
            <div className="text-center pl-2 pr-2">
              <p className="jost text-[24px] font-[500]">SHERWANI</p>
              <p>
                Elegant sherwanis with intricate embellishments, perfect for
                special occasions.
              </p>
            </div>
            <div className="text-center pl-2 pr-2">
              <p className="jost text-[24px] font-[500]">SUITS</p>
              <p>
                Classic suits tailored to perfection, offering timeless
                sophistication.
              </p>
            </div>
          </div>
          <div className="w-[0%] md:w-[30%] justify-end pr-5 self-end hidden md:flex">
            <p>
              <i className="fa-brands fa-whatsapp text-[30px] hover:text-[#25D366] cursor-pointer"></i>
            </p>
            &nbsp;&nbsp;
            <p>
              <i className="fa-brands fa-instagram text-[30px] hover:text-[#E4405F] cursor-pointer"></i>
            </p>
          </div>
        </div>
        <div className="justify-center self-center flex md:hidden mt-10">
          <p>
            <i className="fa-brands fa-whatsapp text-[30px] hover:text-[#25D366] cursor-pointer"></i>
          </p>
          &nbsp;&nbsp;
          <p>
            <i className="fa-brands fa-instagram text-[30px] hover:text-[#E4405F] cursor-pointer"></i>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;

import brideImage from "../assets/bride.png";
import groomImage from "../assets/groom.png";
import brideBlogImage from "../assets/brideBlog.png";
import groomBlogImage from "../assets/groomBlog.png";

function Home() {
  return (
    <>
      <div className="h-screen bg-[#2A1212] text-white pt-[95px]">
        <div className="flex">
          <div className="self-center w-[20%] text-center">
            <p className="font-[400] tangerine-regular text-[112px] leading-[112px]">
              01
            </p>
          </div>
          <div className="self-center w-[40%] text-left">
            <div>
              <p className="font-[400] tangerine-regular text-[112px] leading-[112px] pl-5">
                Authorised
              </p>
              <p className="font-[400] tangerine-regular text-[64px] leading-[64px]">
                to{" "}
                <span className="font-[400] playfair-display  text-[94px]">
                  GRAB
                </span>{" "}
                the
              </p>
              <p className="playfair-display text-[94px] leading-[94px]">
                ATTENTION
              </p>
            </div>
            <div className="justify-center items-center mt-10 flex">
              <p className="flex items-center pl-7 pr-7 pt-2 pb-2 border-white border-2 rounded-full playfair-display text-[18px] cursor-pointer hover:bg-[#300000]">
                Explore{" "}
                <span className="ml-5 border-[1px] border-white w-11"></span>
              </p>
            </div>
          </div>
          <div className="self-center w-[40%] text-center">
            <img src={brideImage} className="w-72 rounded-full" alt="" />
          </div>
        </div>
        <div className="flex">
          <div className="w-[20%] flex justify-center pl-[15px] pr-[15px]">
            <div>
              <img
                src={brideBlogImage}
                className="w-[80px] rounded-full mt-[-50px]"
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="jost text-[24px] font-[500]">BLOG</p>
              <p className="jost text-[20px] font-[500] leading-[20px]">
                The colors that works
              </p>
            </div>
          </div>
          <div className="w-[50%] flex">
            <div className="text-center pl-2 pr-2">
              <p className="jost text-[24px] font-[500]">SAREE</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                sit amet
              </p>
            </div>
            <div className="text-center pl-2 pr-2">
              <p className="jost text-[24px] font-[500]">SUITS</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                sit amet
              </p>
            </div>
          </div>
          <div className="w-[30%] text-right pr-5 self-end">
            <p>
              <i className="fa-brands fa-instagram text-[30px] hover:text-[#fecaca] cursor-pointer"></i>
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen bg-[#0C233C] text-white pt-[95px]">
        <div className="flex">
          <div className="self-center w-[20%] text-center">
            <p className="font-[400] tangerine-regular text-[112px] leading-[112px]">
              02
            </p>
          </div>
          <div className="self-center w-[40%] text-left">
            <div>
              <p className="font-[400] tangerine-regular text-[112px] leading-[112px] pl-5">
                Authorised
              </p>
              <p className="font-[400] tangerine-regular text-[64px] leading-[64px]">
                to{" "}
                <span className="font-[400] playfair-display  text-[94px]">
                  GRAB
                </span>{" "}
                the
              </p>
              <p className="playfair-display text-[94px] leading-[94px]">
                ATTENTION
              </p>
            </div>
            <div className="justify-center items-center mt-10 flex">
              <p className="flex items-center pl-7 pr-7 pt-2 pb-2 border-white border-2 rounded-full playfair-display text-[18px] cursor-pointer hover:bg-[#001337]">
                Explore{" "}
                <span className="ml-5 border-[1px] border-white w-11"></span>
              </p>
            </div>
          </div>
          <div className="self-center w-[40%] text-center">
            <img src={groomImage} className="w-72 rounded-full" alt="" />
          </div>
        </div>
        <div className="flex">
          <div className="w-[20%] flex justify-center pl-[15px] pr-[15px]">
            <div>
              <img
                src={groomBlogImage}
                className="w-[80px] rounded-full mt-[-50px]"
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="jost text-[24px] font-[500]">BLOG</p>
              <p className="jost text-[20px] font-[500] leading-[20px]">
                The colors that works
              </p>
            </div>
          </div>
          <div className="w-[50%] flex">
            <div className="text-center pl-2 pr-2">
              <p className="jost text-[24px] font-[500]">SAREE</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                sit amet
              </p>
            </div>
            <div className="text-center pl-2 pr-2">
              <p className="jost text-[24px] font-[500]">SUITS</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                sit amet
              </p>
            </div>
          </div>
          <div className="w-[30%] text-right pr-5 self-end">
            <p>
              <i className="fa-brands fa-instagram text-[30px] hover:text-[#fecaca] cursor-pointer"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

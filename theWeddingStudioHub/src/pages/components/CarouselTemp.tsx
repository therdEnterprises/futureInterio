import { Carousel } from "antd";

const spacingStyle: React.CSSProperties = {
  letterSpacing: "5px",
};
function CarouselTemp() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <div
            className="flex flex-col justify-end p-[40px] md:p-[100px] space-y-6 h-[500px] md:h-[900px] bg-[url('assets/banner1.jpg')]
            md:bg-[url('assets/glam.jpg')] bg-cover items-start"
          >
            <p
              style={spacingStyle}
              className="text-[38px] font-[400] jost text-white"
            >
              PREMIUM BRANDS
            </p>
            <p
              style={{ ...spacingStyle, letterSpacing: `2px` }}
              className="text-[16px] font-[400] text-[#e9ac98]"
            >
              YOUR BIG DAY TRULY MEANS THE WORLD TO US
            </p>
            {/* <button
              style={{ ...spacingStyle, letterSpacing: `1px` }}
              className="px-[40px] py-[15px] bg-[#e9ac98] text-white text-[14px] font-bold hover:bg-black"
            >
              SHOP NOW
            </button> */}
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start p-[40px] md:p-[100px] space-y-6 justify-end h-[500px] md:h-[900px] bg-[url('assets/banner2.jpg')] md:bg-[url('assets/carousel2.jpg')] bg-cover">
            <p
              style={spacingStyle}
              className="text-[38px] font-[400] jost uppercase text-white"
            >
              Latest Flavours
            </p>
            <p
              style={{ ...spacingStyle, letterSpacing: `2px` }}
              className="text-[16px] font-[400] text-[#e9ac98]"
            >
              WE DESIGN DRESSES WORTH CHERISHING FOREVER
            </p>
            {/* <button
              style={{ ...spacingStyle, letterSpacing: `1px` }}
              className="px-[40px] py-[15px] bg-[#e9ac98] text-white text-[14px] font-bold hover:bg-black"
            >
              SHOP NOW
            </button> */}
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselTemp;

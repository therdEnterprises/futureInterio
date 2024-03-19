import { Carousel } from "antd";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";

const contentStyle: React.CSSProperties = {
  height: "900px",
  color: "#fff",
  backgroundImage: `url(${carousel1})`,
  //   backgroundSize: "cover", // Adjust as needed
  alignItems: "flex-start",
  justifyContent: "end",
};

const spacingStyle: React.CSSProperties = {
  letterSpacing: "5px",
};
function CarouselTemp() {
  return (
    <div>
      <Carousel>
        <div>
          <div
            style={contentStyle}
            className="flex flex-col p-[100px] space-y-6"
          >
            <p style={spacingStyle} className="text-[38px] font-[400] jost">
              PREMIUM BRANDS
            </p>
            <p
              style={{ ...spacingStyle, letterSpacing: `2px` }}
              className="text-[16px] font-[400] text-[#e9ac98]"
            >
              YOUR BIG DAY TRULY MEANS THE WORLD TO US
            </p>
            <button
              style={{ ...spacingStyle, letterSpacing: `1px` }}
              className="px-[40px] py-[15px] bg-[#e9ac98] text-white text-[14px] font-bold hover:bg-black"
            >
              SHOP NOW
            </button>
          </div>
        </div>
        <div>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${carousel2})` }}
            className="flex flex-col p-[100px] space-y-6"
          >
            <p
              style={spacingStyle}
              className="text-[38px] font-[400] jost uppercase"
            >
              Latest Flavours
            </p>
            <p
              style={{ ...spacingStyle, letterSpacing: `2px` }}
              className="text-[16px] font-[400] text-[#e9ac98]"
            >
              WE DESIGN DRESSES WORTH CHERISHING FOREVER
            </p>
            <button
              style={{ ...spacingStyle, letterSpacing: `1px` }}
              className="px-[40px] py-[15px] bg-[#e9ac98] text-white text-[14px] font-bold hover:bg-black"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselTemp;

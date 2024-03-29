// import { useNavigate } from "react-router-dom";
import dress1 from "../../../assets/collections/dress1.jpg";
import dress2 from "../../../assets/collections/dress2.jpg";
function Arrivals() {
  const contentStyle: React.CSSProperties = {
    color: "#fff",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${dress1})`,
    alignItems: "flex-start",
    justifyContent: "end",
    backgroundSize: "cover",
  };

  if (window.innerWidth < 768) {
    contentStyle.height = "500px"; // Set height to 500px for mobile screens
  }

  // const navigate = useNavigate();

  return (
    <div className="mr-5 ml-5 md:mr-[15%] md:ml-[15%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div
          style={contentStyle}
          className="flex flex-col p-[50px] space-y-3  h-[500px] md:h-[800px]"
        >
          <p className="text-[16px] font-[400] text-white uppercase">
            New Collection
          </p>
          <p className="text-[38px] font-[600] jost">The Glamorous Bride</p>
          <p className="text-[16px] font-[400] text-white pb-2">
            We will have you looking and feeling like a star!
          </p>
          {/* <button className="px-[40px] py-[15px] hover:bg-[#e9ac98] text-white border-2 hover:border-[#e9ac98] text-[14px] font-bold bg-transparent">
            DISCOVER NOW
          </button> */}
        </div>
        <div
          style={{
            ...contentStyle,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${dress2})`,
          }}
          className="flex flex-col p-[50px] space-y-3 h-[500px] md:h-[800px]"
        >
          <p className="text-[16px] font-[400] text-white uppercase">
            New Arrival
          </p>
          <p className="text-[38px] font-[600] jost">The Modern Bride</p>
          <p className="text-[16px] font-[400] text-white pb-2">
            Make a statement in sleek and chic designs
          </p>
          {/* <button className="px-[40px] py-[15px] hover:bg-[#e9ac98] text-white border-2 hover:border-[#e9ac98] text-[14px] font-bold bg-transparent">
            DISCOVER NOW
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Arrivals;

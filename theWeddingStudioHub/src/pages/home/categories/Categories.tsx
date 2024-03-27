import collectionV1 from "../../../assets/collectionV1.jpg";
import collectionV2 from "../../../assets/collectionV2.jpg";
import collectionV3 from "../../../assets/collectionV3.jpg";

function Categories() {
  return (
    <div className="mr-5 ml-5 md:mr-[15%] md:ml-[15%]">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-20 justify-items-center p-6">
        <div className="relative w-[100%] md:w-[80%]">
          <img src={collectionV1} className="rounded-full" alt="" />
          <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl jost font-semibold cursor-pointer hover:text-[#e9ac98]">
              Assessories
            </span>
          </div>
        </div>
        <div className="relative w-[100%] md:w-[80%]">
          <img src={collectionV2} className="rounded-full" alt="" />
          <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl jost font-semibold cursor-pointer hover:text-[#e9ac98]">
              Shoes
            </span>
          </div>
        </div>
        <div className="relative w-[100%] md:w-[80%]">
          <img src={collectionV3} className="rounded-full" alt="" />
          <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl jost font-semibold cursor-pointer hover:text-[#e9ac98]">
              Jewellery
            </span>
          </div>
        </div>

        <div className="relative w-[100%] md:w-[80%]">
          <img src={collectionV3} className="rounded-full" alt="" />
          <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl jost font-semibold cursor-pointer hover:text-[#e9ac98]">
              Placeholder Text
            </span>
          </div>
        </div>
        <div className="relative w-[100%] md:w-[80%]">
          <img src={collectionV2} className="rounded-full" alt="" />
          <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl jost font-semibold cursor-pointer hover:text-[#e9ac98]">
              Placeholder Text
            </span>
          </div>
        </div>
        <div className="relative w-[100%] md:w-[80%]">
          <img src={collectionV1} className="rounded-full" alt="" />
          <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl jost font-semibold cursor-pointer hover:text-[#e9ac98]">
              Placeholder Text
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;

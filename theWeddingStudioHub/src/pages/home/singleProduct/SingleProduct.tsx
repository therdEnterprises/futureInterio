import { useParams } from "react-router-dom";
import dress1 from "../../../assets/collections/dress1.jpg";
import { Breadcrumb } from "antd";
import { IoMdHeartEmpty } from "react-icons/io";

function SingleProduct() {
  let { id } = useParams();
  return (
    <div className="ml-[5%] mr-[5%] lg:ml-[15%] lg:mr-[15%]">
      <Breadcrumb
        items={[
          {
            title: <a href="/">Home</a>,
          },
          {
            title: <a href="">{id}</a>,
          },
        ]}
      />
      {/* I am in Single Product Page {id} */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-5">
        <div className="col-span-3">
          <img src={dress1} alt="" />
        </div>
        <div className="col-span-2">
          <div className="flex justify-between border-b-[1px] pb-10">
            <div>
              <p className="jost text-xl font-bold text-[#020202]">{id}</p>
              <p className="jost text-md font-semibold text-[#e9ac98]">
                $550.00 USD
              </p>
            </div>
            <div className="cursor-pointer">
              <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full border bg-white icon-hover flex items-center justify-center hover:bg-[#e9ac98]">
                <IoMdHeartEmpty className="text-[15px] lg:text-[20px]" />
              </div>
            </div>
          </div>
          <div className="pt-5">
            <p className="text=[15px] jost text-[#969696]">
              Magnificent floral and vine embroidery embellishes the sheer
              bodice and sexy low back of this stunning body suit featuring a
              separate Chiffon, A-line skirt with sexy side slit.
            </p>
          </div>

          <div className="mt-5 p-5 border-[1px] relative">
            <p className="p-2 bg-white absolute text-[#28af5b] top-[-22px] left-[35px] font-semibold">
              Special Offer
            </p>
            <ul className="text-[#28af5b] font-semibold ul-list">
              <li className="list">In Stock</li>
              <li className="list">Free delivery available*</li>
              <li className="list">Sale 30% Off Use Code: Deal30</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

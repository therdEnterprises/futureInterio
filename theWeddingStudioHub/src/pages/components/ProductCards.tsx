import { Tooltip } from "antd";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagRemoveOutline, IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  image: string;
  title: string;
  price: string;
  route: string;
}

function ProductCards({ image, title, price, route }: ProductProps) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto relative">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={image}
          alt=""
          onClick={() => {
            navigate(`/products/${route}`);
          }}
        />
        {hovered && (
          <div className="animated-icons">
            <Tooltip placement="left" title="Quickview">
              <div className="absolute bottom-[50px] lg:bottom-[150px] right-0 p-2 cursor-pointer">
                <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-white icon-hover flex items-center justify-center hover:bg-[#e9ac98]">
                  <IoSearchOutline className="text-[25px] lg:text-[30px]" />
                </div>
              </div>
            </Tooltip>

            <Tooltip placement="left" title="Add to Wishlist">
              <div className="absolute bottom-[100px] lg:bottom-[210px] right-0 p-2 cursor-pointer">
                <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-white icon-hover flex items-center justify-center hover:bg-[#e9ac98]">
                  <IoMdHeartEmpty className="text-[25px] lg:text-[30px]" />
                </div>
              </div>
            </Tooltip>

            <Tooltip placement="left" title="Add to Wishlist">
              <div className="absolute bottom-[150px] lg:bottom-[270px] right-0 p-2 cursor-pointer">
                <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-white icon-hover flex items-center justify-center hover:bg-[#e9ac98]">
                  <IoBagRemoveOutline className="text-[25px] lg:text-[30px]" />
                </div>
              </div>
            </Tooltip>
          </div>
        )}
      </div>

      <div className="pt-6 text-left">
        <p
          className="jost text-lg font-medium hover:text-[#e9ac98] cursor-pointer"
          onClick={() => {
            navigate(`/products/${route}`);
          }}
        >
          {title}
        </p>
        <p className="jost text-lg font-bold text-[#e9ac98]">${price}</p>
      </div>
    </div>
  );
}

export default ProductCards;

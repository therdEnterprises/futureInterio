import ProductCards from "../../components/ProductCards";
import dress1 from "../../../assets/collections/dress1.jpg";
import dress2 from "../../../assets/collections/dress2.jpg";
import dress3 from "../../../assets/collections/dress3.jpg";
import dress4 from "../../../assets/collections/dress4.jpg";
import dress5 from "../../../assets/collections/dress5.jpg";
import dress6 from "../../../assets/collections/dress6.jpg";
import dress7 from "../../../assets/collections/dress7.jpg";
import dress8 from "../../../assets/collections/dress8.jpg";

const spacingStyle: React.CSSProperties = {
  letterSpacing: "1px",
};
function Bestsellers() {
  return (
    <div className="text-center mr-5 ml-5 md:mr-[15%] md:ml-[15%]">
      <p style={spacingStyle} className="jost text-2xl font-semibold uppercase">
        Best Sellers
      </p>
      <p
        style={spacingStyle}
        className="jost text-lg font-semibold text-[#666666] pt-3"
      >
        Best Seller Product This Week!
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        <ProductCards
          image={dress1}
          title="dress1"
          price="456"
          route="dress1"
        />
        <ProductCards
          image={dress2}
          title="dress2"
          price="752"
          route="dress2"
        />
        <ProductCards
          image={dress3}
          title="dress3"
          price="659"
          route="dress3"
        />
        <ProductCards
          image={dress4}
          title="dress4"
          price="359"
          route="dress4"
        />
        <ProductCards
          image={dress5}
          title="dress5"
          price="542"
          route="dress5"
        />
        <ProductCards
          image={dress6}
          title="dress6"
          price="678"
          route="dress6"
        />
        <ProductCards
          image={dress7}
          title="dress7"
          price="643"
          route="dress7"
        />
        <ProductCards
          image={dress8}
          title="dress8"
          price="259"
          route="dress8"
        />
      </div>
    </div>
  );
}

export default Bestsellers;

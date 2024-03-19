import { useState, useEffect } from "react";
import buy1get1 from "../assets/buy1get1.png";
import { Modal } from "antd";

function Banners() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 2000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCancel = () => {
    setShowBanner(false);
  };
  return (
    <>
      <Modal
        open={showBanner}
        onCancel={handleCancel}
        footer={null}
        centered
        styles={{ content: { padding: "0px" } }}
        width={"70vw"}
      >
        <img src={buy1get1} className="w-full h-full object-contain" alt="" />
      </Modal>
    </>
  );
}

export default Banners;

import { useEffect } from "react";
import qrcode from "qrcode-generator";
// components
import Wrapper from "components/common/qrcode/Wrapper";
import Image from "components/common/qrcode/Image";

const Qrcode = ({ onClose }) => {
  const url = window.location.href;
  const qr = qrcode(4, "L");
  qr.addData(url);
  qr.make();
  const src = qr.createDataURL();

  useEffect(() => {
    document.addEventListener("mousedown", onClose);
    return () => {
      document.removeEventListener("mousedown", onClose);
    };
  }, [onClose]);

  return (
    <Wrapper>
      <Image src={src} />
    </Wrapper>
  );
};

export default Qrcode;

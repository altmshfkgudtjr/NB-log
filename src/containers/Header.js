import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
// containers
import Qrcode from "containers/common/Qrcode";
// components
import Wrapper from "components/header/Wrapper";
import Btn from "components/header/Btn";
// moduels
import { openPage } from "modules/pageloading";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  /* 
	fullScreen Value
	- [0] not enabled
	- [1] on
	- [2] off
	*/
  const [fullScreen, setFullScreen] = useState(0);
  const [isQrcode, setIsQrcode] = useState(false);
  const [isPrint, setIsPrint] = useState(false);

  const onClickHexagonal = (e) => {
    e.preventDefault();

    if (location.pathname === "/main") return;
    else dispatch(openPage("/main"));
  };

  const onOpenQrcode = () => setIsQrcode(true);

  const onCloseQrcode = (e) => {
    const target = document.querySelector("#qrcode");
    if (!target.contains(e.target)) {
      setIsQrcode(false);
    }
  };

  const onFullScreen = () => {
    if (fullScreen === 1) {
      setFullScreen(2);
      if (!!document.fullscreenElement) {
        document.exitFullscreen();
      }
    } else {
      setFullScreen(1);
      document.body.requestFullscreen();
    }
  };

  const onPrint = () => {
    const windowObj = window.open(
      "/print",
      "PrintWindow",
      "width=1000, height=600, top=100, left=500, toolbars=no, scrollbars=no, status=no, resizable=no"
    );
    windowObj.focus();
    setTimeout(() => {
      windowObj.print();
      windowObj.close();
    }, 1000);
  };

  const onChangeFullScreen = () => {
    if (
      !document.fullscreenElement &&
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement
    ) {
      setFullScreen(2);
    }
  };

  /** Check Fullscreen Enabled */
  useEffect(() => {
    if (!document.fullscreenEnabled) setFullScreen(0);
    else setFullScreen(2);
  }, []);

  /** Fullscreen Escaped Detecting */
  useEffect(() => {
    if (fullScreen !== 1) return;
    document.addEventListener("fullscreenchange", onChangeFullScreen);
    return () =>
      document.removeEventListener("fullscreenchange", onChangeFullScreen);
  }, [fullScreen]);

  /** Check Printing Enabled */
  useEffect(() => {
    if (location.pathname === "/profile") {
      setIsPrint(true);
    } else {
      setIsPrint(false);
    }
  }, [location]);

  return (
    <>
      <Wrapper>
        <div>
          <Btn icon="hexagonal" onClick={onClickHexagonal} />
        </div>
        <div>
          {isPrint && <Btn icon="print" onClick={onPrint} />}
          <Btn icon="clip" onClick={onOpenQrcode} />
          {fullScreen === 1 && <Btn icon="inner" onClick={onFullScreen} />}
          {fullScreen === 2 && <Btn icon="outer" onClick={onFullScreen} />}
        </div>
      </Wrapper>
      {isQrcode && <Qrcode onClose={onCloseQrcode} />}
    </>
  );
};

export default Header;

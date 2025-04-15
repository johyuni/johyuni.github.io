import React from "react";

// images
import img1 from "../../assets/images/img/img-qrcode.png";

function Connect() {
  return (
    <section id="connect" className="main__connect">
      <div className="inner">
        <div className="main__content">
          <div className="txt">
            <strong className="txt__tit">함께 일할 동료를 찾고계신가요?</strong>
            <p className="txt__body2">
              작은 일에도 진심을 담아 업무에 임하며
              <br />
              배움을 멈출 줄 모르는 믿음직스럽고 든든한 동료가 되겠습니다.
            </p>
          </div>

          <div className="imgbox">
            <img className="img" src={img1} alt="QRcode" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;

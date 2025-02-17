import React from "react";

// todo :: 흘러가는 텍스트?

function Connect() {
  return (
    <section className="main__connect">
      <div className="inner">
        <div className="content">
          <strong className="content__tit">
            패기넘치는 <br />
            마지막 문구!
          </strong>
          <div className="content__tag">
            <span className="tag tag--s">UX&#47;UI</span>
            <span className="tag tag--s">web publishing</span>
            <span className="tag tag--s">Web design</span>
            <span className="tag tag--s">Positive</span>
          </div>
          <p className="content__dsc">
            하고싶은말 간략하게 두줄정도? 또는 흘러가는 텍스트 애니메이션
            구현해보기
          </p>
        </div>
      </div>
    </section>
  );
}

export default Connect;

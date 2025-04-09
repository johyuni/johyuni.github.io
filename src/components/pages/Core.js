import React from "react";

function Core() {
  return (
    <section id="core" className="main__core">
      <div className="inner">
        <strong className="main__tit">핵심 역량</strong>

        <div className="main__content">
          <strong className="txt__tit">
            같은 목표를 가지면
            <br />더 멀리 갈 수 있다고 생각합니다.
          </strong>

          <ul className="list">
            <li className="list__item txt">
              <strong className="txt__body1">소통</strong>
              <p className="txt__body2">
                항상 밝고 쾌활한 커뮤니케이션으로 팀원들과 좋은 시너지를
                내는것에 자신이 있습니다. 더 좋은 결과를 위해 함께 고민하고
                실현할 수 있도록 하겠습니다.
              </p>
              <span className="txt__body3">
                &#35;조화 &#35;팀워크 &#35;서로돕기
              </span>
            </li>

            <li className="list__item txt">
              <strong className="txt__body1">기술</strong>
              <p className="txt__body2">
                견고하고 효율적인 코드작성을 추구합니다. 디자이너의 경험을 살려
                감각적이고 독보적인 인터페이스를 그려내는 인재가 되겠습니다.
              </p>
              <span className="txt__body3">
                &#35;미래지향 &#35;효율적인 &#35;섬세한
              </span>
            </li>

            <li className="list__item txt">
              <strong className="txt__body1">성장</strong>
              <p className="txt__body2">
                다양한 경험을 중요시 합니다. 정적 웹 페이지(Static Web Page)를
                기본으로 React, Vue, WebSquare 등 시대의 흐름에 구속받지 않는
                다양한 웹 개발 도구에 대한 경험으로 어떤 상황에서든 긍정적이고
                유연한 대응에 힘쓰겠습니다.
              </p>
              <span className="txt__body3">
                &#35;공존 &#35;윈윈&#40;win-win&#41; &#35;발전
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Core;

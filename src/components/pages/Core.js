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
                밝고 쾌활한 소통으로 팀원들과 조화를 이루며 긍정적인 시너지를
                만듭니다. 서로 돕고 배려하는 팀워크 문화를 지향하며, 함께
                고민하고 성장해 더 나은 결과를 추구합니다.
              </p>
              <span className="txt__body3">
                &#35;조화 &#35;팀워크 &#35;서로돕기
              </span>
            </li>

            <li className="list__item txt">
              <strong className="txt__body1">기술</strong>
              <p className="txt__body2">
                경험의 가치를 믿습니다. 정적 웹페이지부터 React, Vue, WebSquare
                등 다양한 웹 개발 도구를 다루며 어떤 환경에서도 유연하게 대응할
                수 있습니다. 견고하고 효율적인 코드, 감각적인 UI를 추구하며,
                사용자에게 더 친숙한 인터페이스를 만들어가겠습니다.
              </p>
              <span className="txt__body3">
                &#35;감각적인 &#35;효율적인 &#35;섬세한
              </span>
            </li>

            <li className="list__item txt">
              <strong className="txt__body1">성장</strong>
              <p className="txt__body2">
                “웹사이트 구축의 전 과정에 깊은 흥미를 가지고 있습니다.
                디자인부터 퍼블리싱, 프론트엔드 개발까지 늘 새로운 호기심으로
                임하며, 더 큰 목표를 향해 꾸준히 배우고 성장하겠습니다. 개인의
                성장을 넘어 함께 발전하는 가치를 추구합니다
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

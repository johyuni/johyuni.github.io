import React from "react";

function Profile() {
  return (
    <section id="profile" className="main__profile">
      <div className="inner">
        <div className="main__content">
          {/* left */}
          <div className="txt">
            <strong className="txt__header">
              밝은 에너지와 경청하는 자세로
              <br />
              꾸준히 성장하는 조현희입니다.
              <a
                href="https://m.site.naver.com/1G2Up"
                target="blank"
                className="txt__link"
              >
                더보기
              </a>
            </strong>
            <p className="txt__body3">
              디자인, 기획, 퍼블리싱 등 다양한 분야를 아우르며 상황에 맞는
              유연한 역량을 발휘해왔습니다. 밝은 에너지와 진심 어린 경청을
              바탕으로 사람들과 건강한 시너지를 만들고 끊임없는 배움과 도전을
              통해 꾸준히 성장하는 모습을 보여드리겠습니다.
            </p>
          </div>

          {/* right */}
          <div className="grid">
            <div className="grid__item">
              <strong className="grid__tit">Information</strong>
              <span>1995.02.06</span>
              <span>&#43;82&#41; 10&#45;4068&#45;2252</span>
              <span>2252hyun&#64;gmail.com</span>
            </div>

            <div className="grid__item">
              <strong className="grid__tit">Certificate</strong>
              <dl>
                <dt>2022. 04</dt>
                <dd>웹디자인 기능사</dd>
                <dt>2018. 01</dt>
                <dd>GTQ 1급</dd>
              </dl>
            </div>

            <div className="grid__item">
              <strong className="grid__tit">Education</strong>
              <dl>
                <dt>2022</dt>
                <dd>
                  반응형 웹디자인 &#38; 웹퍼블리셔 <br />
                  디지털 실무 양성과정 수료
                </dd>
                <dt>2015</dt>
                <dd>한국 폴리텍Ⅱ대학 인천캠퍼스 졸업</dd>
                <dt>2013</dt>
                <dd>경인여자고등학교 졸업</dd>
              </dl>
            </div>

            <div className="grid__item">
              <strong className="grid__tit">Tools</strong>
              <div className="tagbox">
                <span className="tag">HTML5</span>
                <span className="tag">CSS3</span>
                <span className="tag">Sass</span>
                <span className="tag">Media Query</span>
                <span className="tag">jQuery</span>
                <span className="tag">JavaScript</span>
                <span className="tag">React</span>
                <span className="tag">Figma</span>

                <span className="tag mo-view">Zeplin</span>
                <span className="tag mo-view"> Adobe XD</span>
                <span className="tag mo-view"> Adobe Photoshop</span>
                <span className="tag mo-view">Adobe Illustrator</span>
                <div className="tooltip">
                  <button className="tooltip__btn tag">...</button>
                  <div className="tooltip__panel">
                    Zeplin , Adobe XD, Adobe Photoshop, Adobe Illustrator
                  </div>
                </div>
              </div>
            </div>

            <div className="grid__item">
              <strong className="grid__tit">Experience</strong>
              <dl>
                <dt>2023. 11 &#126; 2024. 09</dt>
                <dd>주식회사 버치홀딩스 퍼블리셔</dd>
                <dt>2022. 05 &#126; 2023. 05</dt>
                <dd>주식회사 인스플래닛 퍼블리셔</dd>
                <dt>2021. 02 &#126; 2021. 08</dt>
                <dd>
                  제주항공 B2C 홈페이지 리뉴얼
                  <br />
                  프리랜서 디자이너
                </dd>
                <dt>2018. 04 &#126; 2020. 09</dt>
                <dd>주식회사 위아트 디자이너</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;

import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <section className="main__profile">
      <div className="inner">
        {/* left */}
        <div className="typo">
          <strong className="typo__header">
            밝은 에너지와 경청하는 자세로
            <br />
            꾸준히 성장하는 조현희입니다.
          </strong>
          <div className="typo__link">
            <Link to="">소개 더보기</Link>
          </div>
          <p className="typo__body3">
            간단한 소개글 영역입니다 간단한 소개글 영역입니다 간단한 소개글
            영역입니다 간단한 소개글 영역입니다 간단한 소개글 영역입니다 간단한
            소개글 영역입니다 간단한 소개글 영역입니다
          </p>
        </div>

        {/* right */}
        <div className="content">
          <div className="content__item">
            <strong className="content__tit">Information</strong>
            <span>1995.02.06</span>
            <span>&#43;82&#41; 10&#45;4068&#45;2252</span>
            <span>2252hyun&#64;gmail.com</span>
          </div>

          <div className="content__item">
            <strong className="content__tit">Education</strong>
            <dl>
              <dt>2022</dt>
              <dd>
                반응형 웹디자인 &#40;UIUX&#41; &#38; 웹퍼블리셔 <br />
                디지털 실무 양성과정 수료
              </dd>
              <dt>2015</dt>
              <dd>한국 폴리텍Ⅱ대학 인천캠퍼스 졸업</dd>
              <dt>2013</dt>
              <dd>경인여자고등학교 졸업</dd>
            </dl>
          </div>

          <div className="content__item">
            <strong className="content__tit">Experience</strong>
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

          <div className="content__item">
            <strong className="content__tit">Tools</strong>
            <div className="content__tag">
              <span className="tag tag--s">HTML5</span>
              <span className="tag tag--s">CSS3</span>
              <span className="tag tag--s">Sass</span>
              <span className="tag tag--s">Media Query</span>
              <span className="tag tag--s">jQuery</span>
              <span className="tag tag--s">JavaScript</span>
              <span className="tag tag--s">React</span>
              <span className="tag tag--s">Figma</span>
              <span className="tag tag--s">...</span>
              <div className="tooltip">
                Zeplin , Adobe XD, Adobe Photoshop, Adobe Illustrator
              </div>
            </div>
          </div>

          <div className="content__item">
            <strong className="content__tit">Certificate</strong>
            <dl>
              <dt>2022. 04</dt>
              <dd>웹디자인 기능사</dd>
              <dt>2018. 01</dt>
              <dd>GTQ 1급</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;

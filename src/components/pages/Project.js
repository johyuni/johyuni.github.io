import React from "react";
import { Link } from "react-router-dom";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

function Project() {
  return (
    <section className="main__project">
      <div className="inner">
        <strong className="typo__header">프로젝트</strong>

        <div className="content">
          <Swiper
            effect={"fade"}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="typo">
                <strong className="typo__tit">프로젝트 제목 01</strong>
                <p className="typo__body3">
                  프로젝트에 대한 간략한 설명 공간입니다. 프로젝트에 대한 간략한
                  설명 공간입니다.프로젝트에 대한 간략한 설명
                  공간입니다.프로젝트에 대한 간략한 설명 공간입니다.
                </p>
                <div className="typo__box">
                  <span className="num">1</span>
                  <span className="num">5</span>
                </div>
              </div>
              <div className="slide__img">
                <img className="img" src="" alt="프로젝트 대표 이미지 01" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="typo">
                <strong className="typo__tit">프로젝트 제목 02</strong>
                <p className="typo__body3">
                  프로젝트에 대한 간략한 설명 공간입니다. 프로젝트에 대한 간략한
                  설명 공간입니다.프로젝트에 대한 간략한 설명
                  공간입니다.프로젝트에 대한 간략한 설명 공간입니다.
                </p>
                <div className="typo__box">
                  <span className="num">2</span>
                  <span className="num">5</span>
                </div>
              </div>
              <div className="slide__img">
                <img className="img" src="" alt="프로젝트 대표 이미지 02" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="typo">
                <strong className="typo__tit">프로젝트 제목 03</strong>
                <p className="typo__body3">
                  프로젝트에 대한 간략한 설명 공간입니다. 프로젝트에 대한 간략한
                  설명 공간입니다.프로젝트에 대한 간략한 설명
                  공간입니다.프로젝트에 대한 간략한 설명 공간입니다.
                </p>
                <div className="typo__box">
                  <span className="num">3</span>
                  <span className="num">5</span>
                </div>
              </div>
              <div className="slide__img">
                <img className="img" src="" alt="프로젝트 대표 이미지 03" />
              </div>
            </SwiperSlide>
          </Swiper>

          {/* todo :: 여기에 프로젝트 링크추가  */}
          {/* todo :: map으로 돌릴지 고민해보고 개선 */}
          <div className="slide__link">
            <Link to="" target="" className="link">
              프로젝트 제목 01
            </Link>
            <Link to="" target="" className="link">
              프로젝트 제목 02
            </Link>
            <Link to="" target="" className="link">
              프로젝트 제목 03
            </Link>
            <Link to="" target="" className="link">
              프로젝트 제목 04
            </Link>
            <Link to="" target="" className="link">
              프로젝트 제목 05
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

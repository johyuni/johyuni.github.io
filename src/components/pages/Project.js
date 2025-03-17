import React from "react";
import { Link } from "react-router-dom";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

function Project() {
  return (
    <section className="main__project">
      <div className="inner">
        <strong className="main__tit">프로젝트</strong>

        <div className="main__content">
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
              <div className="txt">
                <strong className="txt__tit">프로젝트 제목 01</strong>
                <p className="txt__body3">
                  프로젝트에 대한 간략한 설명 공간입니다. 프로젝트에 대한 간략한
                  설명 공간입니다.프로젝트에 대한 간략한 설명
                  공간입니다.프로젝트에 대한 간략한 설명 공간입니다.
                </p>
                <div className="txt__box">
                  <span className="txt__body3">1</span>
                  <span className="txt__body3">5</span>
                </div>
              </div>
              <div className="imgbox">
                <img className="img" src="" alt="프로젝트 대표 이미지 01" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="txt">
                <strong className="txt__tit">프로젝트 제목 02</strong>
                <p className="txt__body3">
                  프로젝트에 대한 간략한 설명 공간입니다. 프로젝트에 대한 간략한
                  설명 공간입니다.프로젝트에 대한 간략한 설명
                  공간입니다.프로젝트에 대한 간략한 설명 공간입니다.
                </p>
                <div className="txt__box">
                  <span className="txt__body3">2</span>
                  <span className="txt__body3">5</span>
                </div>
              </div>
              <div className="imgbox">
                <img className="img" src="" alt="프로젝트 대표 이미지 02" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="txt">
                <strong className="txt__tit">프로젝트 제목 03</strong>
                <p className="txt__body3">
                  프로젝트에 대한 간략한 설명 공간입니다. 프로젝트에 대한 간략한
                  설명 공간입니다.프로젝트에 대한 간략한 설명
                  공간입니다.프로젝트에 대한 간략한 설명 공간입니다.
                </p>
                <div className="txt__box">
                  <span className="txt__body3">3</span>
                  <span className="txt__body3">5</span>
                </div>
              </div>
              <div className="imgbox">
                <img className="img" src="" alt="프로젝트 대표 이미지 03" />
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="list">
            <Link to="" target="" className="list__item">
              프로젝트 제목 01
            </Link>
            <Link to="" target="" className="list__item">
              프로젝트 제목 02
            </Link>
            <Link to="" target="" className="list__item">
              프로젝트 제목 03
            </Link>
            <Link to="" target="" className="list__item">
              프로젝트 제목 04
            </Link>
            <Link to="" target="" className="list__item">
              프로젝트 제목 05
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

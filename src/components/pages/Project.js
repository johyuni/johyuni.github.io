import React from "react";
import { Link } from "react-router-dom";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

function Project() {
  const list = [
    {
      link: "https://gray-ground-0e112d000.4.azurestaticapps.net",
      name: "[NUTS] 디자인 시스템 구축",
      // 넛츠는 이미지로 대체하기
    },
    {
      link: "https://gsgev.com",
      name: "[GS글로벌] T4K 전기트럭 브랜드 사이트 구축 ",
    },
    {
      link: "https://cupcms.cosmo.or.kr/index.vw",
      name: "[자원순환보증금] 보증금 처리지원금 관리시스템 및 모바일앱 고도화 유지보수",
    },
    {
      link: "https://www.jejuair.net/ko/main/base/index.do#",
      name: "[제주항공] B2C 홈페이지 및 판매 채널 구축",
    },
    {
      link: "https://limu.co.kr/shopinfo/company.html",
      name: "[리빙뮤지엄] B2C 홈페이지 및 판매 채널 구축",
    },
  ];
  return (
    <section id="project" className="main__project">
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

          {/* list */}
          <div className="list">
            {list.map((item) => (
              <Link to={item.link} target="_blank" className="list__item">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

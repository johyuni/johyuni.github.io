import React from "react";
import { Link } from "react-router-dom";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Swiper style
import "swiper/css";
import "swiper/css/effect-fade";

function Project() {
  const list = [
    {
      title: "디자인 시스템 구축",
      name: "[NUTS] 디자인 시스템 구축",
      dsc: "프로젝트에 대한 간략한 설명 공간입니다. 프로젝트에 대한 간략한 설명 공간입니다.프로젝트에 대한 간략한 설명 공간입니다.프로젝트에 대한 간략한 설명 공간입니다.",
      link: "https://gray-ground-0e112d000.4.azurestaticapps.net",
    },
    {
      title: "T4K 전기트럭 브랜드 사이트 구축",
      name: "[GS글로벌] T4K 전기트럭 브랜드 사이트 구축 ",
      dsc: "프로젝트에 대한 간략한 설명 공간입니다. 프로젝트에 대한 간략한 설명 공간입니다.프로젝트에 대한 간략한 설명 공간입니다.프로젝트에 대한 간략한 설명 공간입니다.",
      link: "https://gsgev.com",
    },
    {
      title: "보증금 처리지원금 관리시스템 및 모바일앱 고도화 유지보수",
      name: "[자원순환보증금] 보증금 처리지원금 관리시스템 및 모바일앱 고도화 유지보수",
      dsc: "프로젝트에 대한 간략한 설명 공간입니다. 프로젝트에 대한 간략한 설명 공간입니다.프로젝트에 대한 간략한 설명 공간입니다.프로젝트에 대한 간략한 설명 공간입니다.",
      link: "https://cupcms.cosmo.or.kr/index.vw",
    },
    {
      title: "항공권 B2C 홈페이지 및 판매 채널 구축",
      name: "[제주항공] B2C 홈페이지 및 판매 채널 구축",
      dsc: "프로젝트에 대한 간략한 설명 공간입니다. 프로젝트에 대한 간략한 설명 공간입니다.프로젝트에 대한 간략한 설명 공간입니다.프로젝트에 대한 간략한 설명 공간입니다.",
      link: "https://www.jejuair.net/ko/main/base/index.do#",
    },
    {
      title: "러그 판매 채널 구축",
      name: "[리빙뮤지엄] B2C 홈페이지 및 판매 채널 구축",
      dsc: "프로젝트에 대한 간략한 설명 공간입니다. 프로젝트에 대한 간략한 설명 공간입니다.프로젝트에 대한 간략한 설명 공간입니다.프로젝트에 대한 간략한 설명 공간입니다.",
      link: "https://limu.co.kr/shopinfo/company.html",
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
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, EffectFade]}
            className="mySwiper"
          >
            {list.map((item, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="imgbox">
                  <img
                    className="img"
                    src=""
                    alt={`프로젝트 대표 이미지 ${index + 1}`}
                  />
                </div>
                <div className="txt">
                  <strong className="txt__tit">{item.title}</strong>
                  <p className="txt__body2">{item.dsc}</p>
                  <div className="txt__box">
                    <span className="txt__body3">{index + 1}</span>
                    <span className="txt__body3">5</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* list */}
          <div className="list">
            {list.map((item, index) => (
              <Link
                to={item.link}
                target="_blank"
                className="list__item"
                key={item.name}
              >
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

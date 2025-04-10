import React from "react";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Swiper style
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

function Project() {
  const list = [
    {
      title: "NUTS 디자인 시스템 구축",
      name: "NUTS 디자인 시스템 구축",
      dsc: "Vue 기반 개발 환경에서 모든 프로젝트에 공통으로 사용할 수 있는 컴포넌트를 퍼블리싱 진행했습니다. (사내 내부프로젝트 보안상의 이유로 클릭시 이동되지 않습니다)",
      link: "",
    },
    {
      title: "GS글로벌 T4K 전기트럭 브랜드 사이트 구축",
      name: "GS글로벌 T4K 전기트럭 브랜드 사이트 구축",
      dsc: "React  기반 개발 환경에서 일부 공통 컴포넌트 및 화면 퍼블리싱, 결함관리, 통합테스트, 유지보수 등을 진행했습니다.",
      link: "https://gsgev.com",
    },
    {
      title: "COSMO 보증금 처리지원금 지급관리시스템 고도화 유지보수",
      name: "COSMO 보증금 처리지원금 지급관리시스템 고도화 유지보수",
      dsc: "WebSquare 기반 개발 환경에서 유지보수 및 기기테스트를 진행했습니다. ",
      link: "https://www.cosmo.or.kr/kor",
    },
    {
      title: "제주항공 B2C 홈페이지 및 판매 채널 구축",
      name: "제주항공 B2C 홈페이지 및 판매 채널 구축",
      dsc: "Adobe XD와 Zeplin을 활용한 에셋정의 및 화면구성 디자인 파트 작업을 진행했습니다.",
      link: "https://www.jejuair.net/ko/main/base/index.do#",
    },
    {
      title: "LIMU 브랜딩 및 B2C 판매 채널 구축",
      name: "LIMU 브랜딩 및 B2C 판매 채널 구축",
      dsc: "컨셉 및 촬영기획, 웹디자인, 협력사 커뮤니케이션 등 런칭에 필요한 모든 브랜딩 디자인 업무를 총괄했습니다.",
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
            modules={[Autoplay, EffectFade, Pagination]}
            className="mySwiper"
            pagination={{
              clickable: true,
            }}
          >
            {list.map((item, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="imgbox">
                  <a target="blank" href={item.link}>
                    <img
                      className="img"
                      src={""}
                      alt={`프로젝트 대표 이미지 ${index + 1}`}
                    />
                  </a>
                </div>

                <div className="txt">
                  <a target="blank" href={item.link}>
                    <strong className="txt__tit">{item.title}</strong>
                    <span className="txt__body2">{item.dsc}</span>
                  </a>
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
            {list.map((item) => (
              <a
                key={item.name}
                target="blank"
                href={item.link}
                className="list__item"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

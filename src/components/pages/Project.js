import { useState } from "react";
import { Link } from "react-router-dom";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Swiper style
import "swiper/css";
import "swiper/css/effect-fade";

function Project() {
  // 현재 활성화된 슬라이드 인덱스(순서)
  const [activeIndex, setActiveIndex] = useState(0);

  const list = [
    {
      class: "item1", // link list class
      name: "[NUTS] 디자인 시스템 구축", // 이름
      dsc: "프로젝트 설명입니다.",
      link: "https://gray-ground-0e112d000.4.azurestaticapps.net",
    },
    {
      class: "item2",
      name: "[GS글로벌] T4K 전기트럭 브랜드 사이트 구축 ",
      dsc: "프로젝트 설명입니다.",
      link: "https://gsgev.com",
    },
    {
      class: "item3",
      name: "[자원순환보증금] 보증금 처리지원금 관리시스템 및 모바일앱 고도화 유지보수",
      dsc: "프로젝트 설명입니다.",
      link: "https://cupcms.cosmo.or.kr/index.vw",
    },
    {
      class: "item4",
      name: "[제주항공] B2C 홈페이지 및 판매 채널 구축",
      dsc: "프로젝트 설명입니다.",
      link: "https://www.jejuair.net/ko/main/base/index.do#",
    },
    {
      class: "item5",
      name: "[리빙뮤지엄] B2C 홈페이지 및 판매 채널 구축",
      dsc: "프로젝트 설명입니다.",
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
            modules={[Autoplay, EffectFade]}
            className="mySwiper"
            activeIndex={activeIndex}
          >
            {list.map((item, index) => (
              <SwiperSlide
                key={index}
                className={`swiper-slide ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div className="txt">
                  <strong className="txt__tit">{item.name}</strong>
                  <p className="txt__body3">{item.dsc}</p>
                  {/* todo :: 버벅거리는거 해결 */}
                  <div className="txt__box">
                    <span className="txt__body3">{index + 1}</span>
                    <span className="txt__body3">5</span>
                  </div>
                </div>
                {/* img 최상단에 임폴트 시키고 각자 다른이미지 돌아가도록 */}
                <div className="imgbox">
                  <img
                    className="img"
                    src=""
                    alt={`프로젝트 대표 이미지 ${index + 1}`}
                  />
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
                className={`list__item ${item.class}`}
                key={item.name}
                onMouseEnter={() => setActiveIndex(index)}
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

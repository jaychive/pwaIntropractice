import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const MainSwiper = () => {
  const swiperInfo = [{
    id : 'reactSwip',
    workTitle : '리액트광고웹앱',
    workTime : '4주',
    coWork : '단독작업',
    app : ['illustrator', 'photoshop', 'vscode'],
    class : 'react'
  },
  {
    id : 'bootSwip',
    workTitle : '부트스트랩 퍼블리싱',
    workTime : '1주',
    coWork : '단독작업',
    app : ['vscode'],
    class : 'boot'
  },
  {
    id : 'sirSwip',
    workTitle : 'CMS 그누보드',
    workTime : '4주',
    coWork : '단독작업',
    app : ['illustrator', 'photoshop', 'vscode'],
    class : 'sir'
  }];

  return (
    <Swiper className='workSection'
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {
        swiperInfo.map((value)=>{
          return(
            <SwiperSlide className={value.class} key={value.id}>
              <h2 className="mb-0 lh-1">{value.workTitle}</h2>
              <strong>{value.workTime}</strong>
              <p className="mb-0">{value.coWork}</p>
              {
                value.app.map((value)=>{
                  return(
                    <span>{value}</span>
                  )
                })
              }
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default MainSwiper;
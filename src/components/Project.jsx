import React from 'react'
import './Style/project.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import { Link } from 'react-router-dom';

function Project() {
  return (
   <>
    <section className="project">
      <div className="container">
      <div className="heading"><h2>MY <span className="colorTx">Project</span></h2></div>

      <div className="project_video_youtube">
      <div className="box">
        <div className="image"><img src="/public/images/1.png" alt="" /></div>
        <Link to="https://youtu.be/q7dpPMcxAKk?si=qUxgzK8Xvs8FXnap" className='btn_to_video'>Click here to watch video</Link>
        </div>
      <div className="box bx_center">
        <div className="image"><img src="/public/images/2.png" alt="" /></div>
        <Link to="https://youtu.be/wmfrjxtVz0M?si=WcJ4oqDWGpznxakL" className='btn_to_video'>Click here to watch video</Link>
        </div>
      <div className="box">
        <div className="image"><img src="/public/images/3.png" alt="" /></div>
        <Link to="https://youtu.be/8YDKFR8V9ig?si=csLliviiDf5_BYoG" className='btn_to_video'>Click here to watch video</Link>
        </div>
    </div>

      <Swiper className='swiper_layout'
      // spaceBetween={20}
      centeredSlides={true}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      modules={[Autoplay, Pagination, Navigation]}>
      <SwiperSlide className='swiper-slide-bx'>
        <div className="image"><img src="/public/images/pj_1.png" alt=""/></div>
        <div className="content">
          <h2>Full Stack</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates cumque, sunt ipsum iste tempora molestiae quia iure consectetur velit mollitia modi eligendi voluptatibus voluptatem iusto? Pariatur, enim iusto? Cum doloribus architecto quos laboriosam molestias fugit dolores beatae, adipisci</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-bx'>
        <div className="image"><img src="/public/images/pj_2.png" alt=""/></div>
        <div className="content">
          <h2>Frontend With React</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates cumque, sunt ipsum iste tempora molestiae quia iure consectetur velit mollitia modi eligendi voluptatibus voluptatem iusto? Pariatur, enim iusto? Cum doloribus architecto quos laboriosam molestias fugit dolores beatae, adipisci</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-bx'>
        <div className="image"><img src="/public/images/pj_3.png" alt=""/></div>
         <div className="content">
          <h2>Frontend Shopping Web</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates cumque, sunt ipsum iste tempora molestiae quia iure consectetur velit mollitia modi eligendi voluptatibus voluptatem iusto? Pariatur, enim iusto? Cum doloribus architecto quos laboriosam molestias fugit dolores beatae, adipisci</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-bx'>
        <div className="image"><img src="/public/images/pj_4.png" alt=""/></div>
         <div className="content">
          <h2>Full Stack Register</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates cumque, sunt ipsum iste tempora molestiae quia iure consectetur velit mollitia modi eligendi voluptatibus voluptatem iusto? Pariatur, enim iusto? Cum doloribus architecto quos laboriosam molestias fugit dolores beatae, adipisci</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-bx'>
        <div className="image"><img src="/public/images/pj_5.png" alt=""/></div>
         <div className="content">
          <h2>Responsive Design</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates cumque, sunt ipsum iste tempora molestiae quia iure consectetur velit mollitia modi eligendi voluptatibus voluptatem iusto? Pariatur, enim iusto? Cum doloribus architecto quos laboriosam molestias fugit dolores beatae, adipisci</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-bx'>
        <div className="image"><img src="/public/images/pj_1.png" alt=""/></div>
         <div className="content">
          <h2>Full Stack Web</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates cumque, sunt ipsum iste tempora molestiae quia iure consectetur velit mollitia modi eligendi voluptatibus voluptatem iusto? Pariatur, enim iusto? Cum doloribus architecto quos laboriosam molestias fugit dolores beatae, adipisci</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-bx'>
        <div className="image"><img src="/public/images/pj_2.png" alt=""/></div>
         <div className="content">
          <h2>Frontend With React</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates cumque, sunt ipsum iste tempora molestiae quia iure consectetur velit mollitia modi eligendi voluptatibus voluptatem iusto? Pariatur, enim iusto? Cum doloribus architecto quos laboriosam molestias fugit dolores beatae, adipisci</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-bx'>
        <div className="image"><img src="/public/images/pj_3.png" alt=""/></div>
         <div className="content">
          <h2>Frontend Shopping Web</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates cumque, sunt ipsum iste tempora molestiae quia iure consectetur velit mollitia modi eligendi voluptatibus voluptatem iusto? Pariatur, enim iusto? Cum doloribus architecto quos laboriosam molestias fugit dolores beatae, adipisci</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-bx'>
        <div className="image"><img src="/public/images/pj_4.png" alt=""/></div>
         <div className="content">
          <h2>Full Stack Register</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates cumque, sunt ipsum iste tempora molestiae quia iure consectetur velit mollitia modi eligendi voluptatibus voluptatem iusto? Pariatur, enim iusto? Cum doloribus architecto quos laboriosam molestias fugit dolores beatae, adipisci</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-bx'>
        <div className="image"><img src="/public/images/pj_5.png" alt=""/></div>
         <div className="content">
          <h2>Responsive Design</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates cumque, sunt ipsum iste tempora molestiae quia iure consectetur velit mollitia modi eligendi voluptatibus voluptatem iusto? Pariatur, enim iusto? Cum doloribus architecto quos laboriosam molestias fugit dolores beatae, adipisci</p>
        </div>
      </SwiperSlide>
    
    </Swiper>

      </div>
    </section>

    <section className="mini_banner">
      <div className="container">
       <div className="content">
       <h2>Many more of my works can be found here. !</h2>
        
        <Link className='mini_banner_btn' to="https://github.com/ChatchawanDew404">My Github</Link>
       </div>
      </div>
    </section>
   </>
  )
}


export default Project



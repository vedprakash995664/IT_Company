import React, { useEffect } from 'react';
import './CSS/Technology.css';
import { FaReact, FaNode, FaPhp, FaLaravel, FaAndroid, FaCode, FaShieldAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const technologies = [
  { title: 'React', icon: <FaReact size={50} color="#61dafb" /> },
  { title: 'Node.js', icon: <FaNode size={50} color="#3C873A" /> },
  { title: 'PHP', icon: <FaPhp size={50} color="#777bb3" /> },
  { title: 'Laravel', icon: <FaLaravel size={50} color="#F1C40F" /> },
  { title: 'Flutter', icon: <FaAndroid size={50} color="#02569B" /> },
  { title: 'React Native', icon: <FaAndroid size={50} color="#A4C639" /> },
  { title: 'ASP.NET', icon: <FaCode size={50} color="#512bd4" /> },
  {
    title: 'AWS',
    icon: <img src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" alt="AWS" style={{ height: '50px' }} />,
  },
  {
    title: 'Azure',
    icon: <img src="https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg" alt="Azure" style={{ height: '50px' }} />,
  },
  {
    title: 'Google Cloud',
    icon: <img src="https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" alt="Google Cloud" style={{ height: '50px' }} />,
  },
  { title: 'Cybersecurity', icon: <FaShieldAlt size={50} color="#e74c3c" /> },
];

function TechnologyWorks() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="technology-works-container">
      <div className="text-left-section" data-aos="fade-up">
        <h2 className="section-title" style={{color:"#FFC107"}}>Technologies We Work With</h2>
        <p className="section-description text-white">
          We specialize in a wide range of modern technologies to build fast, secure, and scalable applications —
          from cloud platforms like AWS, Azure, and Google Cloud, to front-end frameworks like React and mobile development tools.
        </p>
      </div>

      <div className="slider-wrapper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {technologies.map((tech, index) => (
            <SwiperSlide key={index}>
              <div className="technology-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="technology-icon">{tech.icon}</div>
                <h3>{tech.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TechnologyWorks;

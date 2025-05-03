import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CSS/Reviews.css';
// Extended reviews with longer testimonials (minimum 20 words each)
const reviews = [
  {
    name: 'Dr. Sudha Tripathi',
    company: 'Indian Homeo',
    rating: 5,
    message: 'Duplex Technologies delivered an exceptional solution with professionalism and speed. Their team was attentive to our requirements and provided regular updates throughout the development process. The final product exceeded our expectations in both functionality and design.',
  },
  {
    name: 'Mr. Mak Malik',
    company: 'Milestone',
    rating: 4,
    message: 'Impressed by their innovation and reliable support throughout our project. The development team showed great expertise in suggesting improvements to our initial concept. Their responsive customer service and technical knowledge made our collaboration smooth and productive.',
  },
  {
    name: 'Anjali Sharma',
    company: 'EduCare Services',
    rating: 5,
    message: 'Their team is highly skilled and passionate about delivering quality solutions. They took the time to understand our educational platform needs and implemented features that greatly enhanced user experience. The attention to detail and commitment to excellence stands out.',
  },
  {
    name: 'Rahul Verma',
    company: 'TechNova Pvt Ltd',
    rating: 4,
    message: 'Great work ethic and commitment to delivering quality solutions on time. The team was proactive in identifying potential issues before they became problems and offered creative solutions. Their technical expertise and collaborative approach made them an ideal technology partner.',
  },
  {
    name: 'Priya Kapoor',
    company: 'GreenWorld NGO',
    rating: 5,
    message: "The best tech partnership we've had in years. TechVine understood our non-profit challenges and developed a platform that significantly improved our outreach capabilities. Their transparent communication and results-driven approach made the entire process seamless and enjoyable.'",
  },
  {
    name: 'Amit Desai',
    company: 'FinanceWise',
    rating: 4,
    message: "'Very happy with the application development and ongoing support provided by TechVine. They developed a secure and efficient financial application that met all compliance requirements. Their team's responsiveness to our feedback and ability to implement changes quickly was impressive.'",
  },
  {
    name: 'Sneha Rathi',
    company: 'FoodBites',
    rating: 5,
    message: 'Their UI/UX team is excellent and transformed our food delivery concept into a beautiful, functional application. The intuitive design helped increase our customer engagement and retention significantly. The development process was collaborative and they accommodated our feedback at every stage.',
  },
  {
    name: 'Vikram Singh',
    company: 'AutoMania',
    rating: 4,
    message: 'Top-quality tech partner for our automotive platform. The custom software solution they developed streamlined our inventory management and customer service processes. Their technical knowledge combined with industry understanding delivered exactly what our business needed.',
  },
];

const ReviewsPage = () => {
  return (
    <div className="review-container">
      <div className="review-section-header">
        <h2 style={{color:"#FFC107"}}>What Our Clients Say About TechVine Technologies</h2>
        <p className="review-subtitle text-white">
          Recognized for innovation and excellence, we take pride in our client relationships.
        </p>
      </div>

      <div className="review-swiper-wrapper-container">
        <Swiper
          slidesPerView={1}
          spaceBetween={60}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.review-swiper-button-next',
            prevEl: '.review-swiper-button-prev',
          }}
          speed={800}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 20 }
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="review-swiper"
        >
          {reviews.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="review-card">
                  <div className="review-card-content">
                    <p className="review-message">"{review.message}"</p>
                    <div className="review-stars">
                      {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                    </div>
                    <div className="review-reviewer-info">
                      <h4>{review.name}</h4>
                      <p className="review-company">{review.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        
        <button className="review-swiper-button-prev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="review-swiper-button-next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewsPage;
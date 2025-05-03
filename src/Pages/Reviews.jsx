import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CSS/Reviews.css';

const getInitials = (name) => {
  const parts = name.trim().split(' ');
  return parts.map(part => part[0]).join('').toUpperCase();
};

const getRandomColor = () => {
  const colors = ['#FF6B6B', '#48D1CC', '#7ED321', '#FFD166', '#FF9FF3', '#5F27CD', '#1DD1A1'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const reviews = [
  {
    name: 'Dr. Sudha Tripathi',
    company: 'Indian Homeo',
    rating: 5,
    message: 'Duplex Technologies delivered an exceptional solution with professionalism and speed.',
  },
  {
    name: 'Mr. Mak Malik',
    company: 'Milestone',
    rating: 4,
    message: 'Impressed by their innovation and reliable support throughout our project.',
  },
  {
    name: 'Anjali Sharma',
    company: 'EduCare Services',
    rating: 5,
    message: 'Their team is highly skilled and passionate. Highly recommended!',
  },
  {
    name: 'Rahul Verma',
    company: 'TechNova Pvt Ltd',
    rating: 4,
    message: 'Great work ethic and commitment to delivering quality.',
  },
  {
    name: 'Priya Kapoor',
    company: 'GreenWorld NGO',
    rating: 5,
    message: "'The best tech partnership we've had. Transparent and results-driven.'",
  },
  {
    name: 'Amit Desai',
    company: 'FinanceWise',
    rating: 4,
    message: 'Very happy with the application development and support.',
  },
  {
    name: 'Sneha Rathi',
    company: 'FoodBites',
    rating: 5,
    message: 'Their UI/UX team is excellent. Our app looks and works great!',
  },
  {
    name: 'Vikram Singh',
    company: 'AutoMania',
    rating: 4,
    message: 'Top-quality tech partner. We look forward to future projects.',
  },
];

const ReviewsPage = () => {
  return (
    <div className="review-container">
      <div className="review-section-header">
        <h2 style={{color:"#facc15"}}>What Our Clients Say About TechVine Technologies</h2>
        <p className="review-subtitle" style={{ color:' rgb(206, 206, 206)'}}>
          Recognized for innovation and excellence, we take pride in our client relationships.
        </p>
      </div>

      <div className="review-swiper-wrapper-container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
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
            1024: { slidesPerView: 2, spaceBetween: 40 }
          }}
          modules={[Autoplay, Navigation]}
          className="review-swiper"
        >
          {reviews.map((review, index) => {
            const initials = getInitials(review.name);
            const bgColor = getRandomColor();
            return (
              <SwiperSlide key={index}>
                <div className="review-card">
                  <div className="review-card-content">
                    <div className="review-avatar" style={{ backgroundColor: bgColor }}>
                      {initials}
                    </div>
                    <div className="review-stars">
                      {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                    </div>
                    <p className="review-message">"{review.message}"</p>
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
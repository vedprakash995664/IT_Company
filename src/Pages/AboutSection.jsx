import React, { useEffect } from 'react';
import './CSS/AboutSection.css';
import { FaArrowRight } from 'react-icons/fa'; // Importing the right arrow icon
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Animation will trigger only once
    });
    AOS.refresh(); // Ensure that AOS re-renders if needed
  }, []);

  return (
    <div className="about-section container py-5">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-md-6" data-aos="fade-up">
          <h2 className="section-title"  style={{color:"#facc15"}}>Techvine Technologies</h2>
          <p className="section-description">
            TechVine Technologies is a trusted leader in software development, known for delivering high-quality digital solutions that drive results. With a strong team of engineers, designers, and strategists, we bring your ideas to life using the latest technologies.
          </p>
          <p>
            Over the past decade, we've completed more than <strong>100 projects</strong> for startups, enterprises, and government organizations across 20+ countries. Our commitment to innovation and client satisfaction sets us apart in a highly competitive market.
          </p>
          <p>
            Whether it's building custom web platforms, enterprise-grade mobile apps, or implementing cloud and AI solutions, TechVine is your partner in digital success. We believe in long-term relationships and measurable growth.
          </p>
          <button className="btn-read-more mt-3" data-aos="fade-right">
            Read More <FaArrowRight />
          </button>
        </div>

        {/* Image Content */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src="/Images/e.avif"
            alt="About TechVine"
            className="img-fluid rounded shadow about-image"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

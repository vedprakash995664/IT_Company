import React, { useEffect, useState } from 'react';
import './CSS/About.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  const [countersActive, setCountersActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      disable: 'mobile' // Disable on mobile for better performance
    });
    AOS.refresh();
    
    // Add resize listener to handle responsive layout changes
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      AOS.refresh();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation for counting stats when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCountersActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 } // Lower threshold for better mobile triggering
    );

    const statsSection = document.querySelector('.aboutUs-stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) observer.unobserve(statsSection);
    };
  }, []);

  // Determine if we should use animations based on screen size
  const useAnimation = windowWidth > 768;

  return (
    <>
      <Header/>
      <div className="aboutUs-container">
        {/* Hero Section */}
        <div 
          className="aboutUs-hero" 
          data-aos={useAnimation ? "fade-down" : ""}
        >
          <div className="aboutUs-hero-overlay">
            <h1>About Us</h1>
            <p className="aboutUs-hero-subtitle">Innovating technology solutions since 2010</p>
          </div>
        </div>

        {/* Founders Section with alternating layout */}
        <div className="aboutUs-founders-section">
          <h2 
            className="aboutUs-section-title" 
            data-aos={useAnimation ? "fade-up" : ""}
          >
            Our Visionaries
          </h2>
          
          {/* Founder 1 - Image Left */}
          <div className="aboutUs-founder-container">
            <div 
              className="aboutUs-founder-image-wrapper"
            >
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="John Doe" 
                className="aboutUs-founder-image"
                loading="lazy" // Add lazy loading for better performance
              />
            </div>
            <div 
              className="aboutUs-founder-content"
            >
              <h3>John Doe</h3>
              <h4>CEO & Co-Founder</h4>
              <p>
                With over 15 years of experience in software development, John leads our technical 
                vision and ensures we deliver cutting-edge solutions to our clients. His expertise 
                in scalable architectures has helped numerous startups grow into industry leaders.
                John began his career at Microsoft where he developed enterprise solutions before founding 
                his first startup in 2008. His passion for innovation and problem-solving drives our 
                company culture of excellence and continuous learning.
              </p>
              <div className="aboutUs-founder-social">
                <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://github.com" aria-label="GitHub"><FaGithub /></a>
                <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
              </div>
            </div>
          </div>
          
          {/* You can add additional founders with reverse layout here */}
        </div>

        {/* Stats Section with Counting Animation */}
        <div 
          className="aboutUs-stats-section" 
          data-aos={useAnimation ? "fade-up" : ""}
        >
          <h2 className="aboutUs-section-title">Our Achievements</h2>
          <div className="aboutUs-stats-container">
            <div 
              className="aboutUs-stat-item" 
              data-aos={useAnimation ? "zoom-in" : ""} 
              data-aos-delay={useAnimation ? "100" : "0"}
            >
              <h3>
                {countersActive ? 
                  <Counter from={0} to={250} duration={2500} suffix="+" /> : 
                  "0+"
                }
              </h3>
              <p>Projects Completed</p>
            </div>
            <div 
              className="aboutUs-stat-item" 
              data-aos={useAnimation ? "zoom-in" : ""}
              data-aos-delay={useAnimation ? "200" : "0"}
            >
              <h3>
                {countersActive ? 
                  <Counter from={0} to={98} duration={2500} suffix="%" /> : 
                  "0%"
                }
              </h3>
              <p>Client Satisfaction</p>
            </div>
            <div 
              className="aboutUs-stat-item" 
              data-aos={useAnimation ? "zoom-in" : ""}
              data-aos-delay={useAnimation ? "300" : "0"}
            >
              <h3>
                {countersActive ? 
                  <Counter from={0} to={50} duration={2500} suffix="+" /> : 
                  "0+"
                }
              </h3>
              <p>Team Members</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div 
          className="aboutUs-team-section" 
          data-aos={useAnimation ? "fade-up" : ""}
        >
          <h2 className="aboutUs-section-title">Our Expert Team</h2>
          <div className="aboutUs-team-container">
            {/* Team Member Cards */}
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index} 
                {...member} 
                aosDelay={useAnimation ? (index % 4) * 100 : 0}
                useAnimation={useAnimation}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

// Counter Component for smooth counting animation
const Counter = ({ from, to, duration, suffix }) => {
  const [count, setCount] = useState(from);
  
  useEffect(() => {
    let start = from;
    const increment = (to - from) / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [from, to, duration]);

  return <>{count}{suffix}</>;
};

// Team Member Data
const teamMembers = [
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    name: "Michael Johnson",
    role: "Lead Developer",
    linkedin: "#",
    github: "#"
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "Sarah Williams",
    role: "UX Designer",
    linkedin: "#",
    github: "#"
  },
  {
    img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e",
    name: "David Chen",
    role: "DevOps Engineer",
    linkedin: "#",
    github: "#"
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Emily Rodriguez",
    role: "Product Manager",
    linkedin: "#",
    github: "#"
  },
];

// Team Member Card Component
const TeamMemberCard = ({ img, name, role, linkedin, github, aosDelay, useAnimation }) => (
  <div 
    className="aboutUs-team-member" 
    data-aos={useAnimation ? "flip-up" : ""}
    data-aos-delay={aosDelay}
  >
    <div className="aboutUs-team-member-image-container">
      <img 
        src={`${img}?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80`} 
        alt={name} 
        className="aboutUs-team-member-image"
        loading="lazy"
      />
    </div>
    <h3>{name}</h3>
    <p>{role}</p>
    <div className="aboutUs-team-social">
      <a href={github} aria-label="GitHub"><FaGithub /></a>
      <a href={linkedin} aria-label="LinkedIn"><FaLinkedin /></a>
    </div>
  </div>
);

export default AboutUs;
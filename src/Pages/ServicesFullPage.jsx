import React, { useEffect } from "react";
import "./CSS/ServicesFullPage.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: "fa-laptop-code",
    title: "Web Development",
    description: "Modern websites with responsive design and optimized performance.",
  },
  {
    icon: "fa-mobile-screen-button",
    title: "App Development",
    description: "iOS & Android apps tailored to your business needs.",
  },
  {
    icon: "fa-gamepad",
    title: "Game Development",
    description: "Cross-platform games built with Unity and Unreal Engine.",
  },
  {
    icon: "fa-chart-line",
    title: "Digital Marketing & SEO",
    description: "Improve your visibility and conversions with expert SEO strategies.",
  },
  {
    icon: "fa-calculator",
    title: "ERP / CRM / Billing Software",
    description: "Custom business software for automation and productivity.",
  },
  {
    icon: "fa-cloud",
    title: "Cloud Integration",
    description: "Seamless cloud setup and migration for your business scalability.",
  },
  {
    icon: "fa-cart-shopping",
    title: "E-commerce Solutions",
    description: "Sell online with custom-built e-commerce platforms.",
  },
  {
    icon: "fa-shield-halved",
    title: "Cybersecurity",
    description: "Protect your systems with expert security and compliance strategies.",
  },
];

const technologies = ["React", "Node.js", "Firebase", "Unity", "MongoDB", "MySQL", "SEO Tools", "AWS"];

const steps = [
  "Requirement Gathering",
  "UI/UX Design",
  "Development",
  "Testing",
  "Deployment & Support",
];

const benefits = [
  {
    icon: "fa-bolt",
    title: "Fast & Reliable",
    desc: "Speedy delivery with reliable quality control processes.",
  },
  {
    icon: "fa-users",
    title: "Expert Team",
    desc: "Our skilled team brings years of experience to the table.",
  },
  {
    icon: "fa-chart-simple",
    title: "Scalable Solutions",
    desc: "We build for future growth and performance.",
  },
];

const getStepIcon = (index) => {
  const icons = ["fa-clipboard-list", "fa-pen-nib", "fa-code", "fa-vial", "fa-rocket"];
  return icons[index] || "fa-circle";
};

const ServicesFullPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Header />
      <div className="servicesFullPage-page">
        <div className="servicesFullPage-hero-section">
          <div className="servicesFullPage-overlay">
            <h1 style={{color:"#FACC15"}}>Our Services</h1>
            <p>IT solutions designed to grow your business.</p>
          </div>
        </div>

        <div className="servicesFullPage-section">
          <h2 className="servicesFullPage-section-title" style={{color:'#FACC15'}}>What We Offer</h2>
          <div className="servicesFullPage-services-grid">
            {services.map((s, i) => (
              <div className="servicesFullPage-service-card" key={i} data-aos="fade-up">
                <div className="servicesFullPage-service-icon">
                  <i className={`fas ${s.icon}`}></i>
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="servicesFullPage-section servicesFullPage-tech-section">
          <h2 className="servicesFullPage-section-title" style={{color:"#FACC15"}}>Technologies We Use</h2>
          <div className="servicesFullPage-tech-list">
            {technologies.map((tech, i) => (
              <span key={i} className="servicesFullPage-tech-item">{tech}</span>
            ))}
          </div>
        </div>

        <div className="servicesFullPage-section">
          <h2 className="servicesFullPage-section-title" style={{color:"#FACC15"}}>Our Process</h2>
          <div className="servicesFullPage-steps-timeline">
            {steps.map((step, i) => (
              <div className="servicesFullPage-step-item" data-aos="fade-up" key={i}>
                <div className="servicesFullPage-step-icon-wrapper">
                  <div className="servicesFullPage-step-circle">
                    <i className={`fas ${getStepIcon(i)}`}></i>
                  </div>
                  {i < steps.length - 1 && <div className="servicesFullPage-step-line" />}
                </div>
                <p className="servicesFullPage-step-label">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="servicesFullPage-section">
          <h2 className="servicesFullPage-section-title" style={{color:"#FACC15"}}>Why Choose Us?</h2>
          <div className="servicesFullPage-benefits">
            {benefits.map((b, i) => (
              <div className="servicesFullPage-benefit" key={i} data-aos="fade-up">
                <div className="servicesFullPage-benefit-icon">
                  <i className={`fas ${b.icon}`}></i>
                </div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="servicesFullPage-cta-section">
          <h2>Have a project in mind?</h2>
          <button>Get a Free Quote</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesFullPage;
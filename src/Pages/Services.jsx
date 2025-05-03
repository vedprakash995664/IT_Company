import React, { useEffect } from 'react';
import './CSS/Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Smartphone,
  Code,
  Globe,
  Cloud,
  ShieldCheck,
  Palette,
  ArrowRight  // Import the icon you want
} from 'lucide-react';

const services = [
  {
    title: 'App Development',
    description: 'High-performance mobile apps for Android and iOS platforms.',
    icon: <Smartphone size={42} color="#2563eb" />,
  },
  {
    title: 'Software Development',
    description: 'Tailored software solutions that meet your business goals.',
    icon: <Code size={42} color="#16a34a" />,
  },
  {
    title: 'Website Development',
    description: 'Modern, responsive websites optimized for all devices.',
    icon: <Globe size={42} color="#7e22ce" />,
  },
  {
    title: 'Graphic Design',
    description: 'Creative visual designs for branding, marketing, and digital media.',
    icon: <Palette size={42} color="#dc2626" />,
  },
  {
    title: 'Cloud Integration',
    description: 'Secure and scalable cloud services for global reach.',
    icon: <Cloud size={42} color="#0284c7" />,
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your systems and data with industry-grade security.',
    icon: <ShieldCheck size={42} color="#ca8a04" />,
  },
];

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="services-container">
      <div className="services-header">
        <h2 style={{ color: '#facc15' }}>Our Software Development Services</h2>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

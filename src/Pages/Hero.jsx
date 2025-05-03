import Carousel from 'react-bootstrap/Carousel';
import './CSS/Hero.css'
function Hero() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src="/Images/sl.avif" alt="" className='img-fluid slider-img' />
        <Carousel.Caption>
          <h3>Innovative IT Solutions</h3>
          <p>Empowering your business with next-gen digital technology.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="/Images/sl1.avif" alt="" className='img-fluid slider-img' />
        <Carousel.Caption>
          <h3>Custom Software Development</h3>
          <p>Tailored applications designed to scale and perform.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img src="/Images/sl4.avif" alt="" className='img-fluid slider-img' />
        <Carousel.Caption>
          <h3>Secure & Scalable Cloud Services</h3>
          <p>Reliable cloud infrastructure to drive your innovation forward.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;

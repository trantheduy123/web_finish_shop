import Carousel from "react-bootstrap/Carousel";

function SliderCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item className='silder-h'>
        <img
          className='d-block w-100 '
          src='https://i.pinimg.com/564x/d8/dd/de/d8ddde355f704157afcb302945cc8b4d.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>10% off now + $5</h3>
          <p>for new Men's members</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='silder-h'>
        <img
          className='d-block w-100 '
          src='https://i.pinimg.com/564x/83/9e/77/839e775d24ac34925493fc47871f697e.jpg'
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3>Free shipping, no minimum</h3>
          <p>Free shipping valid through 02/28/2023. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='silder-h'>
        <img
          className='d-block w-100 '
          src='https://i.pinimg.com/736x/77/45/a2/7745a23e4c74e383bf6df391f90b5167.jpg'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Trending Now</h3>
          <p>Top sellers from $5.99</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderCarousel;

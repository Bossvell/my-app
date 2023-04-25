import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="/img/1.jpg"
          alt="First slide"
          height="500px"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="/img/2.jpg"
          alt="Second slide"
          height="500px"
        />

        <Carousel.Caption>
          <h3 class="text-warning">Второй слайд</h3>
          <p class="text-warning">Описание Второго слайда</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto "
          src="/img/3.jpg"
          alt="Third slide"
          height="500px"
        />

        <Carousel.Caption>
          <h3 class="text-info">Третий слайд</h3>
          <p class="text-info">
            Описание третьего слайда.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
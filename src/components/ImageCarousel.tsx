import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

const ImageCarousel = () => {
  return (
    <Carousel withIndicators height={200}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
    </Carousel>
  );
};

export default ImageCarousel;

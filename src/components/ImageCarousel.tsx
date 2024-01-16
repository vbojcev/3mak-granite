import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import classes from './carousel.module.css';
import { Image } from '@mantine/core';
import { IconArrowBigLeft, IconArrowBigRight } from '@tabler/icons-react';

const ImageCarousel = ({ images }: { images: Array<string> }) => {
  return (
    <Carousel
      nextControlIcon={<IconArrowBigRight />}
      previousControlIcon={<IconArrowBigLeft />}
      controlSize={40}
      className={classes.carousel}
      withIndicators={true}
    >
      {images.map((img) => (
        <Carousel.Slide className={classes.slide}>
          <Image
            className={classes.image}
            radius="md"
            src={`images/${img}.jpg`}
            fit="contain"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

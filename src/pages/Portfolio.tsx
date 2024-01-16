import ImageCarousel from '../components/ImageCarousel';

const kitchens = [
  'kitchen1',
  'kitchen2',
  'kitchen3',
  'kitchen4',
  'kitchen5',
  'kitchen6',
];

const waterfalls = [
  'waterfall1',
  'waterfall2',
  'waterfall3',
  'waterfall4',
  'waterfall5',
  'waterfall6',
  'waterfall7',
];

const Portfolio = (/*{ mb }: { mb: boolean | undefined }*/) => {
  return (
    <>
      <h1>Kitchens</h1>
      <ImageCarousel images={kitchens} />
      <h1>Waterfall Fixtures</h1>
      <ImageCarousel images={waterfalls} />
    </>
  );
};

export default Portfolio;

import ImageCarousel from '../components/ImageCarousel';

const Portfolio = ({ mb }: { mb: boolean | undefined }) => {
  return (
    <>
      <h1>Our Portfolio {mb ? 'mobile' : 'desktop'}</h1>
      <ImageCarousel />
    </>
  );
};

export default Portfolio;

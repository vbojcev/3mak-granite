const Portfolio = ({ mb }: { mb: boolean | undefined }) => {
  return (
    <>
      <h1>Our Portfolio {mb ? 'mobile' : 'desktop'}</h1>
    </>
  );
};

export default Portfolio;

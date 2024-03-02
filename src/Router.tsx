import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

const Router = ({ page, mb }: { page: string; mb: boolean | undefined }) => {
  return (
    <div
      className={
        page != 'portfolio' ? (mb ? 'mainMobile' : 'main') : 'mainMobile'
      }
    >
      {page === 'about' ? (
        <About />
      ) : page === 'contact' ? (
        <Contact />
      ) : (
        <Portfolio />
      )}
    </div>
  );
};

export default Router;

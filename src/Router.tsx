import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

const Router = ({ page, mb }: { page: string; mb: boolean | undefined }) => {
  return (
    <div
      className={
        page != 'portfolio' ? (mb ? 'mainMobile' : 'main') : 'mainMobile'
      }
    >
      {page === 'home' ? (
        <Home />
      ) : page === 'contact' ? (
        <Contact />
      ) : (
        <Portfolio />
      )}
    </div>
  );
};

export default Router;

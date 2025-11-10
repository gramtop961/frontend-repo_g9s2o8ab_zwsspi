import HeaderHero from './components/HeaderHero';
import AboutServices from './components/AboutServices';
import ResumePortfolioCerts from './components/ResumePortfolioCerts';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white scroll-smooth">
      <HeaderHero />
      <AboutServices />
      <ResumePortfolioCerts />
      <SiteFooter />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import HeroPage from './Components/heroPage';
import ProductCategoryCards from './Components/productCategoryCards';
import IntroContent from './Components/introContent';
import FeaturedAreaNew from './Components/featuredAreaNew';
import FeatureAreaDeserve from './Components/featureAreaDeserve';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroPage />
      <ProductCategoryCards />
      <IntroContent />
      <FeaturedAreaNew />
      <FeatureAreaDeserve />
    </div>
  );
}

export default App;

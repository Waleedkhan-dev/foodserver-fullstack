import BestSellsPage from '@/components/BestSells/BestSellsPage';
import Card from '@/components/Card';
import DealPage from '@/components/DealOfDay/DealPage';
import HeroPage from '@/components/HeroSection/HeroPage';
import ProductPage from '@/components/Products/ProductPage';
import StayHomePage from '@/components/StayHome/StayHomePage';
// import RegisterPage from './register/page';

export default function Home() {
  return (
    <div>
      <HeroPage />
      <Card />
      <ProductPage />
      <BestSellsPage />
      <DealPage />
      <StayHomePage />
    </div>
  );
}

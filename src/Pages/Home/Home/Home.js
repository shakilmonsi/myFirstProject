import React from 'react';
import Services from '../../Shared/services/Services';
import FollowedProducts from '../../Shared/FollowedProducts/FollowedProducts';
import TrendingDealsInElectronics from './TrendingDealsInElectronics/TrendingDealsInElectronics';
import Heros from './Heror/Heros';
import BesnessPattner from './besnesspattner/BesnessPattner';
import ExploreOurTopHomBusiness from './ExploreOurTopHomeBusiness/ExploreOurTopHomBusiness';
import TopDealsOfheWeek from './TopDealsOfheWeek/TopDealsOfheWeek';
import Servicses from './services/Servicses';
import Catagrytrowelproducts from './shercomponent/catagrytrowelproducts/Catagrytrowelproducts';
import Trustedsmss from './TrustedBrand/TrustedBrandss/TrustedBrandss';
import MadilHeroBannerThard from '../../madilherobannerthard/MadilHeroBannerThard';
import ExptorOurtopHomePromotor from './exploreOutopHomePromotor/ExptorOurtopHomePromotor';
import ExploreOuropBusinessSellers from './ExploreOuropBusinessSeller/ExploreOuropBusinessSeller/ExploreOuropBusinessSellers';
import SpecialSaleOffers from './SpecialSaleOffer/SpecialSaleOffers/SpecialSaleOffers';
import NewArivalsBanner from './NewArrivalsBanner/NewArivalsBanner';
import DealsYouMighLikeWeeklyOffers from './DealsYouMighLikeWeeklyOffers/DealsYouMighLikeWeeklyOffer/DealsYouMighLikeWeeklyOffers';
import FlashSales from './FlashSale/FlashSale/FlashSales/FlashSales';

const Home = () => {
    return (
        <div>
     <Heros></Heros>
     <ExptorOurtopHomePromotor></ExptorOurtopHomePromotor>
     <FlashSales></FlashSales>
     <DealsYouMighLikeWeeklyOffers></DealsYouMighLikeWeeklyOffers>
     <NewArivalsBanner></NewArivalsBanner>

     <TopDealsOfheWeek></TopDealsOfheWeek>
<SpecialSaleOffers></SpecialSaleOffers>
       <Services></Services>
       <Trustedsmss></Trustedsmss>
       <ExploreOuropBusinessSellers></ExploreOuropBusinessSellers>
       <FollowedProducts></FollowedProducts>
       <ExploreOurTopHomBusiness></ExploreOurTopHomBusiness>

       <MadilHeroBannerThard></MadilHeroBannerThard>
       <FollowedProducts></FollowedProducts>
       <Catagrytrowelproducts></Catagrytrowelproducts>
       <TrendingDealsInElectronics></TrendingDealsInElectronics>
      

      
  
       <Servicses></Servicses>


            
        </div>
    );
};

export default Home;
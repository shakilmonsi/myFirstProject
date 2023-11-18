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

const Home = () => {
    return (
        <div>
     <Heros></Heros>
     <ExploreOurTopHomBusiness></ExploreOurTopHomBusiness>
     <TopDealsOfheWeek></TopDealsOfheWeek>

       <Services></Services>
       <FollowedProducts></FollowedProducts>
       <Catagrytrowelproducts></Catagrytrowelproducts>
       <TrendingDealsInElectronics></TrendingDealsInElectronics>
      
<Trustedsmss></Trustedsmss>
      
  
       <Servicses></Servicses>


            
        </div>
    );
};

export default Home;
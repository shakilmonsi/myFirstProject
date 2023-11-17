import React from 'react';
import Services from '../../Shared/services/Services';
import FollowedProducts from '../../Shared/FollowedProducts/FollowedProducts';
import TrendingDealsInElectronics from './TrendingDealsInElectronics/TrendingDealsInElectronics';
import Heros from './Heror/Heros';
import TrustedBrand from './TrustedBrand/TrustedBrand';
import BesnessPattner from './besnesspattner/BesnessPattner';
import ExploreOurTopHomBusiness from './ExploreOurTopHomeBusiness/ExploreOurTopHomBusiness';
import TopDealsOfheWeek from './TopDealsOfheWeek/TopDealsOfheWeek';

const Home = () => {
    return (
        <div>
     <Heros></Heros>
     <ExploreOurTopHomBusiness></ExploreOurTopHomBusiness>
     <TopDealsOfheWeek></TopDealsOfheWeek>

       <Services></Services>
       <FollowedProducts></FollowedProducts>
       <TrendingDealsInElectronics></TrendingDealsInElectronics>
       <TrustedBrand></TrustedBrand>
       <BesnessPattner></BesnessPattner>


            
        </div>
    );
};

export default Home;
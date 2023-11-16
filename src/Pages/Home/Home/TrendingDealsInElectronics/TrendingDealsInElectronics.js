import React from 'react';
import trendingDealsinElectronics from "../../../../assets/TrendingDealsinElectronics/mobile-1.png";
import trendingDealsinElectronics1 from "../../../../assets/TrendingDealsinElectronics/slider-img-1.png";
import trendingDealsinElectronics3 from "../../../../assets/TrendingDealsinElectronics/pngwing 31 (1).png";
import trendingDealsinElectronics4 from "../../../../assets/TrendingDealsinElectronics/pngwing 34.png";
import TrendingDealsInElectronic from './TrendingDealsInElectronic/TrendingDealsInElectronic';

const TrendingDealsInElectronics = () => {
        const servicesData = [
                {
                        id: 1,
                        name: 'Fluoride Treatment',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: trendingDealsinElectronics,
                price: 8750.00,
                        delprice: 910.00,

                },
                {
                        id: 2,
                        name: 'Cavity Filling',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: trendingDealsinElectronics3,
                        price: 8750.00,
                        delprice: 910.00,
                },
                {
                        id: 3,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: trendingDealsinElectronics1,
                        price: 8750.00,
                        delprice: 10.00,
                },
                {
                        id: 4,
                        name: 'Teeth Whitening',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: trendingDealsinElectronics4,
                        parseIntrice: 8750.00,
                        delprice: 910.500,
                },
                {
                        id: 5,
                        name: 'Teeth Whitening',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: trendingDealsinElectronics,
                        price: 8750.00,
                        delprice: 910.00,


                },
                
                {
                        id: 6,
                        name: 'Teeth Whitening',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: trendingDealsinElectronics4,
                        price: 8750.00,
                        delprice: 910.00,


                },
        ]
   return (
                <div>
                        <section className='row mt-4 px-2 ' style={{ backgroundColor: "#FFFFFF" }}>
                                <h2>Followed Products</h2>

                                {
                                        servicesData.map(servic => <TrendingDealsInElectronic
                                                key={servic.id}
                                                service={servic}
                                        ></TrendingDealsInElectronic>)
                                }
                        </section>


                </div>
        );
}

export default TrendingDealsInElectronics;
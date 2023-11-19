import React from 'react';
import"./trendingdealsinelectionic.css"
import trendingDealsinElectronics from "../../../../assets/TrendingDealsinElectronics/mobile-1.png";
import trendingDealsinElectronics1 from "../../../../assets/TrendingDealsinElectronics/slider-img-1.png";
import trendingDealsinElectronics3 from "../../../../assets/TrendingDealsinElectronics/pngwing 31 (1).png";
import trendingDealsinElectronics4 from "../../../../assets/TrendingDealsinElectronics/pngwing 34.png";
import TrendingDealsInElectronic from './TrendingDealsInElectronic/TrendingDealsInElectronic';
import { Link } from 'react-router-dom';

const TrendingDealsInElectronics = () => {
        const servicesData = [
                {
                        id: 1,
                        name: 'Fluoride Treatment',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: trendingDealsinElectronics,
                        price: 8750.00,
                        delprice: 3910.00,

                },
                {
                        id: 2,
                        name: 'Cavity Filling',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: trendingDealsinElectronics3,
                        price: 8750.00,
                        delprice: 3910.00,
                },
                {
                        id: 3,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: trendingDealsinElectronics1,
                        price: 8750.00,
                        delprice: 3310.00,
                },
                {
                        id: 4,
                        name: 'Teeth Whitening',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: trendingDealsinElectronics4,
                        parseIntrice: 8750.00,
                        delprice: 3910.500,
                },
                {
                        id: 5,
                        name: 'Teeth Whitening',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: trendingDealsinElectronics,
                        price: 8750.00,
                        delprice: 9310.00,


                },

                {
                        id: 6,
                        name: 'Teeth Whitening',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: trendingDealsinElectronics4,
                        price: 8750.00,
                        delprice: 9310.00,


                },
        ]
        return (
               
                        <div className=' trending_dealsin_electronices' style={{ backgroundColor: "#F5F7FB" }}>
                                <div className='d-flex justify-content-between'>
                                        <h4 style={{ color: "#000", fontSize: "22px", fontFamily: "inter", fontWeight: 500, lineHeight: "normal" }}>Trending Deals In Electronics</h4>
                                        <Link to="/" className='' style={{ color: "#000", fontFamily: "inter", fontSize: "18px", fontWeight: 500, fontStyle: "normal", lineHeight: "normal" }}>View All</Link>

                                </div>


                               <div className='row'>
                                <div  className='gap-3 d-flex'>
                                {
                                        servicesData.map(servic => <TrendingDealsInElectronic
                                                key={servic.id}
                                                service={servic}
                                        ></TrendingDealsInElectronic>)
                                }


                                </div>
                               </div>

                                
                        </div>


             
        );
}

export default TrendingDealsInElectronics;
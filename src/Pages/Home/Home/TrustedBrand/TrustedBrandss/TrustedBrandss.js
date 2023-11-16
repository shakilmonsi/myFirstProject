import React from 'react';
import ss from "../../../../../assets/TrustedBrand/Group 5418.png"
import TrustedBrand from '../TrustedBrand';

const Trustedsmss=()=> {
     
        const servicesData = [
                {
                        id: 1,
                        name: 'Fluoride Treatment',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: ss,
                price: 8750.00,
                        delprice: 910.00,

                },
                {
                        id: 2,
                        name: 'Cavity Filling',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: ss,
                        price: 8750.00,
                        delprice: 910.00,
                },
                {
                        id: 3,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: ss,
                        price: 8750.00,
                        delprice: 10.00,
                },
                {
                        id: 4,
                        name: 'Teeth Whitening',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: ss,
                        parseIntrice: 8750.00,
                        delprice: 910.500,
                },
                {
                        id: 5,
                        name: 'Teeth Whitening',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: ss,
                        price: 8750.00,
                        delprice: 910.00,


                },
                
                {
                        id: 6,
                        name: 'Teeth Whitening',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: ss,
                        price: 8750.00,
                        delprice: 910.00,


                },
        ]
   return (
                <div>
                        <section className='row mt-4 px-2 ' style={{ backgroundColor: "#FFFFFF" }}>
                                <h2>Followed Products</h2>

                                {/* {
                                        servicesData.map(servic => <TrendingDealsInElectronic
                                                key={servic.id}
                                                service={servic}
                                        ></TrendingDealsInElectronic>)
                                } */}
                                {
                                        servicesData.map(service=><TrustedBrand 
                                                key={service.id}
                                                service={service}
                                        ></TrustedBrand>)
                                }
                        </section>


                </div>
        );
}


export default Trustedsmss;
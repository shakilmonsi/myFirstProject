import React from 'react';
import fluoride from "../../../assets/FollowedProduct/pngwing 62.png"
import fluoride2 from "../../../assets/FollowedProduct/pngwing 63.png"
import fluoride3 from "../../../assets/FollowedProduct/pngwing 65.png"
import fluoride4 from "../../../assets/FollowedProduct/pngwing 68.png"

import FollowedProduct from './FollowedProduct/FollowedProduct';
const FollowedProducts = () => {

    const servicesData = [
        {
            id: 1,
            price: 8750.00,
            delprice: 2300.333,
            name: 'Fluoride Treatment',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: fluoride
            
        },
        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride
        },
        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride
        },
        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride
        },
        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride
        },
        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride
        },
        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride
        },
        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride
        },
        {
            id: 3,
            price: 8750.00,
            delprice: 2300.333,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride
        },
        {
            id: 4,
            delprice: 2300.333,
            price: 8750.00,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride2
        },
        {
            id: 5,
            delprice: 2300.333,
            price: 8750.00,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride3
        },
        {
            id: 6,
            delprice: 2300.333,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
             img: fluoride4,
             price: 8750.00,
        },
    ]
    return (
        <section className='row px-2' style={{ backgroundColor: "#FFFFFF" }}>
            <h2>Followed Products</h2>
            {
                servicesData.map(service => <FollowedProduct
                    key={service.id}
                    service={service}
                ></FollowedProduct>)
            }



        </section>
    );
}

export default FollowedProducts;
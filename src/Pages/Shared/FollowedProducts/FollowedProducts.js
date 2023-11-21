import React from 'react';
import "./followedprodects.css"
import fluoride from "../../../assets/FollowedProduct/pngwing 62.png";
import fluoride2 from "../../../assets/FollowedProduct/pngwing 63.png";
import fluoride3 from "../../../assets/FollowedProduct/pngwing 65.png";
import fluoride4 from "../../../assets/FollowedProduct/pngwing 68.png";

// oprer  data golo product  img 
import reding from "../../../assets/iconreting/rating.svg";
import widthreding from "../../../assets/iconreting/withcolerrating.svg";
import hardicon from "../../../assets/hardicons/hardicon.svg";
import grayverifyde from "../../../assets/grayverifyde/verified.svg"
import thredot from "../../../assets/thredoticon/thredot.svg";
import verifide from "../../../assets/verifydeicon/image 110.png"
import FollowedProduct from './FollowedProduct/FollowedProduct';
import { Link } from 'react-router-dom';

const FollowedProducts = () => {

    const servicesData = [
        {
            id: 1,
            price: 8750.00,
            delprice: 2300.333,
            name: 'Fluoride Treatment',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: fluoride,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            grayverifyde:grayverifyde,
            thredot:thredot,
            verifide:verifide,
            offers: 5 ,

        },
        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride


        },
        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride
        },
        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride
        },
        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride
        },
        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride
        },
        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride
        },
        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride
        },
        {
            id: 3,
            price: 8750.00,
            delprice: 2300.333,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride
        },
        {
            id: 4,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride2
        },
        {
            id: 5,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            verifide:verifide,
            grayverifyde:grayverifyde,
            thredot:thredot,

          offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', img: fluoride3
        },
        {
            id: 6,
            delprice: 2300.333,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: fluoride4,
            price: 8750.00,
        },
        {
            id: 6,
            delprice: 2300.333,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: fluoride4,
            price: 8750.00,
        },
        {
            id: 6,
            delprice: 2300.333,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: fluoride4,
            price: 8750.00,
        },
        {
            id: 6,
            delprice: 2300.333,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: fluoride4,
            price: 8750.00,
        },
        {
            id: 6,
            delprice: 2300.333,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: fluoride4,
            price: 8750.00,
        },
        {
            id: 6,
            delprice: 2300.333,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: fluoride4,
            price: 8750.00,
        },
        {
            id: 6,
            delprice: 2300.333,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: fluoride4,
            price: 8750.00,
        },
        {
            id: 6,
            delprice: 2300.333,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: fluoride4,
            price: 8750.00,
        },
        {
            id: 6,
            delprice: 2300.333,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: fluoride4,
            price: 8750.00,
        },
        {
            id: 6,
            delprice: 2300.333,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: fluoride4,
            price: 8750.00,
        },
        {
            id: 6,
            delprice: 2300.333,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: fluoride4,
            price: 8750.00,
        },
        {
            id: 6,
            delprice: 2300.333,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: fluoride4,
            price: 8750.00,
        },
        {
            id: 6,
            delprice: 2300.333,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: fluoride4,
            price: 8750.00,
        },
        {
            id: 6,
            delprice: 2300.333,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
            offers: 5 ,
            name: 'Teeth Whitening',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: fluoride4,
            price: 8750.00,
        },
    ]
    return (
        <section className='' style={{ backgroundColor: "#FFFFFF" }}>
             <div className='d-flex justify-content-between'>
                                <h4 style={{color:"#000", fontSize:"22px",fontFamily:"inter",fontWeight:500,lineHeight:"normal"}}>Followed Products</h4>
                                <Link to="/" className='' style={{color:"#000",fontFamily:"inter",fontSize:"18px",fontWeight:500,fontStyle:"normal",lineHeight:"normal"}}>View All</Link>

                        </div>

                        <div className='row'>

<div className='d-flex grid_followedProduct_item'>
 


            {
                servicesData.map(service => <FollowedProduct
                    key={service.id}
                    service={service}
                ></FollowedProduct>)
            }

</div>
         </div>

        </section>
    );
}

export default FollowedProducts;
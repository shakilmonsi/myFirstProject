import React from 'react';
import { Link } from 'react-router-dom';
// css link   import  
import "./flashsales.css"

// import  logo  link 
import flashsalelogo from "../../../../../../assets/flash_sale/flashsalelogo.svg"

import deko from "../../../../../../assets/flash_sale/1.png";
import tata from "../../../../../../assets/flash_sale/tata2.png";
import fationshop3 from "../../../../../../assets/flash_sale/fationshop3.png";
import under4 from "../../../../../../assets/flash_sale/under4.png";
import marder5 from "../../../../../../assets/flash_sale/marder5.png";
import jori6 from "../../../../../../assets/flash_sale/jori6.png";
import FlashsaleCard from '../FlashSaleCard/FlashsaleCard';

const FlashSales = () => {
        const flashsalesData = [
                {
                        id: 1,
                        name: 'Fluoride Treatment',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: deko,
                        price: 8750.00,
                        delprice: 3910.00,

                },
                {
                        id: 2,
                        name: 'Cavity Filling',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: tata,
                        price: 8750.00,
                        delprice: 3910.00,
                },
                {
                        id: 3,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: fationshop3,
                        price: "BDT 8750.00",
                        delprice: 3310.00,
                },
                {
                        id: 4,
                        name: 'Cavity Filling',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: under4,
                        price: 8750.00,
                        delprice: 3910.00,
                },
                {
                        id: 5,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: marder5,
                        price: "BDT 8750.00",
                        delprice: 3310.00,
                },
                {
                        id: 6,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: jori6,
                        price: "BDT 8750.00",
                        delprice: 3310.00,
                },

        ]

        return (
                <section className='mt-4'>


                        <div className='d-flex justify-content-between'>
                                 
                                 <div className='d-flex gap-4'>
                                <div  className='d-flex gap-1'>
                                        <div className='d-flex ms-4'>
                                        <img src={flashsalelogo} alt='' style={{width:"26px", height:"45px", flexShrink:0, color:"#F85606"}}></img>
                                        <h6 className='plashsale_text_style_setup'>Flash Sale</h6>
                                        </div>
                                        <div className='d-flex'>
                                                <h3>10 <br></br><span>Days</span> </h3>: 
                                                <h3>15 <br></br><span>Hours</span> </h3>:   
                                                <h3>21 <br></br><span>Min</span> </h3>:   
                                                <h3>45 <br></br><span>Sec</span> </h3>       
                                                </div>    
                                </div>
                               

                                <div>
                                <h4 style={{
                                        color: "#000", fontSize: "22px", fontFamily: "inter",
                                        fontWeight: 500, lineHeight: "normal"
                                }}>Weekly Offer</h4> 
                                </div>

                                 </div>
                                 <div>
                                 <Link to="/" className='' style={{ color: "#000", fontFamily: "inter", fontSize: "18px", fontWeight: 500, fontStyle: "normal", lineHeight: "normal" }}>View All</Link>

                                 </div>
                          


                        </div>
                        <div className='row'>
                        <div className='d-flex gap-4 '>
                        {
        flashsalesData.map(servic => <FlashsaleCard
                key={servic.id}
                service={servic}
        ></FlashsaleCard>)
        
}

                        </div>
                        </div>

        



                </section>
        );
}

export default FlashSales;
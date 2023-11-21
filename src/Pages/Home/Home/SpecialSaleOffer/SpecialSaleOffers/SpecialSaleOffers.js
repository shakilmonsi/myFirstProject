import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import leptop from "../../../../../assets/SpecialSaleOffer_slider/leptop.png"
import backgraund from "../../../../../assets/SpecialSaleOffer_slider/backgraund.png"
//// oper data golo banner _er ;

// import mobile from "../../../../../assets/spexialSaleOffer_product/mobile-1.png"
// import pngwing from "../../../../../assets/spexialSaleOffer_product/pngwing 33.png"
// import watch from "../../../../../assets/spexialSaleOffer_product/watch-9.png"
// oper _er  data golo  product data ;

// import reding from "../../../../../assets/iconreting/rating.svg";
// import withcolerrating from "../../../../../assets/iconreting/withcolerrating.svg";
// import hardicon from "../../../../../assets/hardicons/hardicon.svg";
// import grayverifyde from "../../../../../assets/grayverifyde/verified.svg"
// import thredot from "../../../../../assets/thredoticon/thredot.svg";
// import verifide from "../../../../../assets/verifydeicon/grayverified.svg"
// import shopingcardicon from "../../../../../assets/shopingcardiconbutton/shopingicon.svg"







const SpecialSaleOffers = () => {
        // specialSaleoffersSeclectOptionData = [
        //         {
        //                 id: 1,
        //                 delprice: 2300.333,

        //                 redingicon: reding,
        //                 widthredingicon: withcolerrating,
        //                 hardicon: hardicon,
        //                 thredot: thredot,
        //                 verifide: verifide,
        //                 shopingcardicon:shopingcardicon,
        //                 offers: 5,

        //                 name: 'Teeth Whitening',
        //                 description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
        //                 img: mobile,
        //                 price: 8750.00,
        //         },
        // ];

        // specialSaleoffersOutOfStocksData = [
        //         {
        //                 id: 6,
        //                 delprice: 2300.333,
        //                 redingicon: reding,
        //                 widthredingicon: withcolerrating,
        //                 hardicon: hardicon,
        //                 thredot: thredot,
        //                 verifide: verifide,
        //                 offers: 5,
        //                 name: 'Teeth Whitening',
        //                 description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
        //                 img: pngwing,
        //                 price: 8750.00,
        //         },
        // ];


        // specialSaleoffersAddToCardData = [
        //         {
        //                 id: 6,
        //                 delprice: 2300.333,
        //                 redingicon: reding,
        //                 widthredingicon: withcolerrating,
        //                 hardicon: hardicon,
        //                 thredot: thredot,
        //                 verifide: verifide,
        //                 offers: 5,
        //                 name: 'Teeth Whitening',
        //                 description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
        //                 img: watch,
        //                 price: 8750.00,
        //         },
        // ];

        // setup  banner data 
        const bannerData = [
                {
                        id: 1,
                        name: "New Arrivals",
                        description: " Mega sele android phone ",

                        view: 'Only This Weeks',
                        bannerImg: leptop,
                        bgClass: "bg-secondary", // Replace with the appropriate Bootstrap background class
                },

        ];

        return (
                <section className='mt-5  ms-4'>
                        <div className='d-flex justify-content-between'>
                                <h4 style={{
                                        color: "#000", fontSize: "22px", fontFamily: "inter",
                                        fontWeight: 500, lineHeight: "normal"
                                }}>Explore Our Top Promoter</h4>
                                <Link to="/" className='' style={{ color: "#000", fontFamily: "inter", fontSize: "18px", fontWeight: 500, fontStyle: "normal", lineHeight: "normal" }}>View All</Link>

                        </div>

                        <Row className='mt-3'>
                                <Col lg="6">
                                        <div className=''>
                                                <div className="row">
                                                        <div className="d-flex gap-2">
                                                                {
                                                                        bannerData?.map(banner => <div key={banner.id} className="" style={{ borderRadius: "10px", backgroundColor: "#A8B696", height: "400px", width: "847px" }}>
                                                                                <div className='d-flex  ' style={{ gap: 60, padding: "75px", }} >
                                                                                        <div className='' style={{
                                                                                                marginTop: -10,
                                                                                        }} >
                                                                                                <p className='' style={{ fontFamily: "inter", fontSize: "22px", fontStyle: "normal", fontWeight: 700, lineHeight: "normal", color: "#FFFFFF" }}>{banner.name}</p>
                                                                                                <h4 className='' style={{ fontFamily: "inter", fontSize: "52px", fontStyle: "normal", fontWeight: 700, lineHeight: "normal", color: "#FFFFFF" }}>{banner.description}</h4>
                                                                                                <p className=' special_offer_banner_vew_text ' style={{ color: "#FFFFFF" }}>{banner.view}</p>
                                                                                                <button style={{
                                                                                                        color: "#FFFFFF", width: "140px", height: "46px",
                                                                                                        flexShrink: 0,
                                                                                                        borderRadius: "10px", backgroundColor: "#FFF"
                                                                                                }} className=' '>
                                                                                                        <span style={{ fontFamily: "inter", fontSize: "12px", fontStyle: 'normal', fontWeight: 500, lineHeight: "normal", color: "#000000" }} className=''
                                                                                                        > shop now</span></button>
                                                                                        </div>
                                                                                        <dev style={{
                                                                                                backgroundColor: "#AFBE9B",
                                                                                                with: "363px", height: "319px",
                                                                                                background: `url(${backgraund})`
                                                                                        }}>
                                                                                                <img className='mb-2' src={banner.bannerImg} alt="" style={{
                                                                                                        margin: -15, width: "318px", height: "303px", flexShrink: 0
                                                                                                }} />
                                                                                        </dev>


                                                                                </div>


                                                                        </div>)
                                                                }

                                                        </div>
                                                </div>
                                        </div>
                                </Col>






                <Col lg="6">
         
<div className='d-flex'>
<div className="card" style={{ width: "18rem" }}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>

<div className="card" style={{ width: "18rem" }}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>

<div className="card" style={{ width: "18rem" }}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>

</div>



                                </Col>
                        </Row>
                </section>

        );
}

export default SpecialSaleOffers;
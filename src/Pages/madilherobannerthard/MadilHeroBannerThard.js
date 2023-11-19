import React from 'react';
import "./madinlherobannerthard.css"
import bag from "../../assets/madilherothrad/bag.png"
import  leptop from "../../assets/madilherothrad/leptop.png"
import watch from "../../assets/madilherothrad/watch.png"



const MadilHeroBannerThard = () => {
        const bannerData = [

                {
                        id: 1,
                        name: "New Arrivals",
                        discription: "Mega Sale Android Phone",
                        view: 'Only This Weeks',
                        bannerImg: leptop,
                },

                {
                        id: 1,
                        name: "New Arrivals",
                        discription: "EID Sale Android Phone",
                       
                        view: 'Only This Weeks',
                        bannerImg: bag,
                },

                {
                        id: 1,
                        name: "New Arrivals",
                        discription: "New Year SaleAndroid Phone",
                        
                        view: 'Only This Weeks',
                        bannerImg: watch,
                },

        ]



        return (

                <div className="row">
                        <div className="d-flex p-4 m-4  gap-3">
                                <div className="d-flex hero_banner_setup">
                                        <div>
                                                <h4>banner toys</h4>
                                                <p>best collection onder</p>
                                                <button>shop now</button>
                                        </div>
                                        <img src={leptop} alt="" style={{ width: "240px", height: "216px", flexShrink: 0 }} />
                                </div>

                                <div className="d-flex  hero_banner_setup">
                                        <div>
                                                <h4>banner toys</h4>
                                                <p>best collection onder</p>
                                                <button>shop now</button>
                                        </div>
                                        <img src={bag} alt="" />
                                </div>

                                <div className="d-flex  hero_banner_setup">
                                        <div>
                                                <h4>banner toys</h4>
                                                <p>best collection onder</p>
                                                <button>shop now</button>
                                        </div>
                                        <img src={watch} alt="" />
                                </div>


                        </div>


                </div>



        );
}

export default MadilHeroBannerThard;
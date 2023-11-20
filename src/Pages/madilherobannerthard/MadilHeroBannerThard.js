import React from 'react';
import "./madinlherobannerthard.css"
import bag from "../../assets/madilherothrad/bag.png"
import leptop from "../../assets/madilherothrad/leptop.png"
import watch from "../../assets/madilherothrad/watch.png"



const MadilHeroBannerThard = () => {
        const bannerData = [
                {
                  id: 1,
                  name: "New Arrivals",
                  description: "Mega Sale Android Phone",
                  view: 'Only This Weeks',
                  bannerImg: leptop,
                  bgClass: "bg-primary", // Replace with the appropriate Bootstrap background class
                },
                {
                  id: 2, // Make sure each item has a unique ID
                  name: "New Arrivals",
                  description: "EID Sale Android Phone",
                  view: 'Only This Weeks',
                  bannerImg: bag,
                  bgClass: "bg-dark", // Replace with the appropriate Bootstrap background class
                },
                {
                  id: 3, // Make sure each item has a unique ID
                  name: "New Arrivals",
                  description: "New Year Sale Android Phone",
                  view: 'Only This Weeks',
                  bannerImg: watch,
                  bgClass: "bg-secondary", // Replace with the appropriate Bootstrap background class
                },
              ];
              



        return (
<div className='madilbanner_thrad'>
                <div className="row">
                        <div className="d-flex p-4 m-4  gap-3">
                                {
                                        bannerData?.map(banner=> <div key={banner.id} className={`hero_banner_setup mx-auto 
                                         ${banner.bgClass}`}>
                                                <div className='d-flex ' style={{padding:"40px", }} >
                                                <div className='' >
                                              <p className='name_in_new_arrivals_text'>{banner.name}</p>
                                             <h4 className='rilige_description_setup_text'>{banner.description}</h4>
                                             <p className='banner_text_setup'>{banner.view}</p>
                                                <button style={{color:"#FFFFFF"}} className=' banner_btn_setup'><span className='mx-auto btn_text_setup' 
                                                style={{color:"#000000"}}> shop now</span></button>
                                        </div>
                                        <img className='mb-2' src={banner.bannerImg} alt="" style={{ width: "240px", height: "216px", flexShrink: 0 }} />
                               
                                                </div>
                                     
                               
                                </div>)
                                }
                              
                        </div>
                </div>
                </div>
        );
}

export default MadilHeroBannerThard;
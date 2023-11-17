import React from 'react';
import "./xploreOurTopHomeBusiness.css";
import fluoride from "../../../../assets/ExploreOurTopHomeBusiness/alamin.png";
import usericon from "../../../../assets/usersicon/user.svg"
import homeseller from "../../../../assets/homesellericone/home seller.png";
import starretting from "../../../../assets/iconreting/rating.svg";
import withcolor from "../../../../assets/iconreting/withcolerrating.svg";




const ExploreOurTopHomBusiness = () => {
  const exploreOurTopHomBusiness = [
    {
      id: 1,
      name: "addas",
      bessimg: fluoride,
    },
    {
      id: 2,
      name: "apple",
      bessimg: fluoride,
    },
    {
      id: 3,
      name: "asls",
      bessimg: fluoride,
    },

  ];


  return (
    <div className='mt-5'>
      <div className='d-flex justify-between'>
        <h4 className='' >ddddddddddddddddddd</h4>
        <p className=''>sfddddddhfdfdfd</p>
      </div>
      <div className='row '>
        <div className=' d-flex  grid_colams gap-5'>

          <div className="card mt-5" style={{ width: "164px", height: "188px", flexShrink: 0 }}>
            <img src={fluoride} style={{ borderRadius: "63.818px", width: "63.818px", height: "63.818px", flexShrink: 0 }} className="card-img-top mx-auto" alt="..." />
            <div className="card-body">


              <div className='d-flex gap-1'>
                <img src={homeseller} style={{ width: "18px", width: "18px" , color:""}} alt=''></img>
                <h5 className='mt-2' style={{ fontSize: "14px", color: "#2A2A2A", fontFamily: "Inter", lineHeight: "normal", fontStyle: "normal" }}>shakib</h5>
              </div>


              <div className='d-flex gap-2'>
                <div>
                  <img  src={starretting} alt='' style={{width:"10px", height:"10x", color:"#F5B100"}}></img>
                  <img src={starretting} alt='' style={{width:"10px", height:"10x", color:"#F5B100"}}></img>
                  <img src={starretting} alt='' style={{width:"10px", height:"10x", color:"#F5B100"}}></img>
                  <img src={starretting} alt='' style={{width:"10px", height:"10x", color:"#F5B100"}}></img>
                  <img src={withcolor} alt=''style={{width:"10px", height:"10x", backgroundColor:""}}></img>
                </div>
                <h5 className='mt-1' style={{fontSize:"13px", fontWeight:500,
                 fontStyle:"normal",lineHeight:"normal",color:"#6A6969",flexShrink:0}}>4.5</h5>
              </div>
              <div className='d-flex gap-2'>
                <div className='d-flex gap-1'>
                  <img className='mt-1' src={usericon} alt='' style={{
                    width: "9px",
                    height: "11px", color: "#424242", flexShrink: 0
                  }}></img>
                  <p className=' ' style={{ widows: "auto", fontWeight: 500, fontSize: "13px", color: "#868585" }}>13.3k</p>

                </div >
                <div className='' >
                  <button className=' rounded mb-3' style={{ width: "61px", height: "24px", 
                  backgroundColor: "#424242" }}>
                    <span style={{ color: '#FFFFFF',fontSize:"9px" }}>Follow</span>
                  </button>         </div>

              </div>

            </div>
          </div>
       
          </div>


         
        </div>

      </div>


  










  );
}

export default ExploreOurTopHomBusiness;
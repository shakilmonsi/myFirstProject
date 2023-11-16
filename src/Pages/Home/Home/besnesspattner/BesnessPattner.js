import React from 'react';
import "./besness.css";
import addas from "../../../../assets/TrustedBrand/addas.png";
import apple from "../../../../assets/TrustedBrand/apple.png"
import  asls from "../../../../assets/TrustedBrand/asls.png"
import bollore from "../../../../assets/TrustedBrand/bollore.png"
import nike from "../../../../assets/TrustedBrand/nike.png"
import online from "../../../../assets/TrustedBrand/online.png"
import samsung from "../../../../assets/TrustedBrand/samsung.png"
import nokia from "../../../../assets/TrustedBrand/nokia.png"
import bollore1 from "../../../../assets/TrustedBrand/bollore.png"

const BesnessPattner = () => {
  // Declare besnessData using const, let, or var
  const besnessData = [
    {
      id: 1,
      name: "addas",
      bessimg: addas,
    },
    {
      id: 2,
      name: "apple",
      bessimg: apple,
    },
    {
      id: 3,
      name: "asls",
      bessimg: asls,
    },
    {
      id: 4,
      name: "bollore",
      bessimg: bollore,
    },
    {
      id: 5,
      name: "nike",
      bessimg: nike,
    },
    {
      id: 6,
      name: "online",
      bessimg: online,
    },
    {
      id: 7,
      name: "nokia",
      bessimg: nokia,
    },
    {
      id: 8           ,
      name: "samsung",
      bessimg: samsung,
    },
    {
      id: 9,
      name: "bollore1",
      bessimg: bollore1,
    },
 
  ];

  
  return (
  
      <div className="top-players" style={{}}>
        {besnessData?.map(onlymane => 
          <div className="player" key={onlymane.id} style={{width:"171px",height:"112px", backgroundColor:""}}>
            <img src={onlymane.bessimg} alt="" />
          </div>
        )}
      </div>

  );
}
export default BesnessPattner;
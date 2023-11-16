import React from 'react';
import "./xploreOurTopHomeBusiness.css";
import fluoride from "../../../../assets/ExploreOurTopHomeBusiness/alamin.png"

const ExploreOurTopHomBusiness = () => {
        const ExploreOurTopHomBusiness = [
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
                <div className="top-players" style={{}}>
                {ExploreOurTopHomBusiness?.map(onlymane => 
                  <div className="player" key={onlymane.id} style={{width:"171px",height:"112px", backgroundColor:""}}>
                    <img src={onlymane.bessimg} alt="" />
                  </div>
                )}
              </div>
            
              );
            }

export default ExploreOurTopHomBusiness;
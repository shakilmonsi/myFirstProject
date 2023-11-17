import React from 'react';
import hardicon from  "../../../../assets/hardicons/hardicon.svg"
import thredot from  "../../../../assets/thredoticon/thredot.svg"

const TopDealsOfheWeek=() =>{
        return (
                <div>
                        <div className="max-width mt-5 mb-5">
  <div
    className="card"
    style={{ width: 266, height: 407, backgroundColor: "rgb(228, 223, 223)" }}
  >
    <div className="position-relative ">
      <img
        style={{ backgroundColor: "rgb(215, 223, 220)" }}
        src="https://w7.pngwing.com/pngs/54/14/png-transparent-castle-cement-sack-art-portland-cement-concrete-flexible-intermediate-bulk-container-bag-cement-accessories-gunny-sack-material.png"
        className="card-img-top p-2 "
        alt="..."
      />
      <p
        className="position-absolute"
        style={{
          top: 10,
          left: 10,
          backgroundColor: "rgb(255, 81, 0)",
          padding: 2,
          borderRadius: 20,
          color: "white"
        }}
      >
        5% OFF
      </p>
      <div
        className="position-absolute"
        style={{
          top: 10,
          right: 20,
          borderRadius: "50%",
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "rgb(216, 211, 211)"
        }}
      >
        <img src={hardicon} width="15px" alt="" />
      </div>
      <div
        className="position-absolute"
        style={{
          top: 35,
          right: 20,
          borderRadius: "50%",
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "rgb(216, 210, 210)"
        }}
      >
        <img
          src={thredot}
          width="15px"
          alt=""
        />
      </div>
    </div>
    <div className="card-body">
      <h6 className="card-title ms-2 me-2 mt-2">
        Direct Sales by Manufactures Warm Imitation far blanket...
      </h6>
      <div className="d-flex justify-content-between me-2 ms-2 mt-2 ">
        <p className="card-text text-black ">
          <span className="text-warning ">
            <i className="fas fa-star star-rating" />
            <i className="fas fa-star star-rating" />
            <i className="fas fa-star star-rating" />
            <i className="fas fa-star star-rating" />
            <i className="far fa-star star-rating" />
          </span>{" "}
          (169)
        </p>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/217/217853.png"
            width="20px"
            height="20px"
            alt=""
          />{" "}
          <span style={{ color: "rgb(202, 133, 5)", font: "bold" }}>1000</span>
        </div>
      </div>
      <div className="d-flex gap-2  ms-2 ">
        <p>Sold by: </p>
        <img
          className="mt-1"
          src="https://static.thenounproject.com/png/4303663-200.png"
          width="20px"
          height="20px"
          alt=""
        />
        <p>Mr. Mohammad</p>
      </div>
      <div className="ms-2 d-flex justify-content-between me-2">
        <h4>BDT 8750.00</h4>{" "}
        <p style={{ color: "rgb(255, 94, 0)" }}>
          <s>9693.00</s>
        </p>
      </div>
      <a href="#" className="btn btn-dark d-block ">
        <img src="./cart-256.png" width="30px" alt="" /> ADD TO CART
      </a>
    </div>
  </div>
</div>

                        
                </div>
        );
}

export default TopDealsOfheWeek;
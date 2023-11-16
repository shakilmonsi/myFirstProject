import React from 'react';

const TrendingDealsInElectronic = ({ service }) => {
        const { name, description, img, delprice, price } = service;

        return (
                <div className='col-md-3 col-lg-2 col-sm-2 mt-2 '>
                        <div className="card " style={{ width: "", height: "313px", borderRadius: "10px 10px 10px " }}>
                                <div className='' style={{ width: '', height: "", backgroundColor: "#F4F4F4" }}>
                                        <img src={img} style={{ width: '230px', height: "180px" }} className="img-fluid" alt="..." />
                                </div>

                                <div className="card-body">

                                        <p className="card-text">

                                                {description}
                                        </p>
                                        <div className='mb-3  ' style={{ width: "", height: "19px", }}>
                                                <b className='ms-2' style={{ fontSize: '16px', color: "#2A2A2A" }}
                                                >BDT {price} </b>

                                                <del className='ms-5 ps-5' style={{ color: "#FF5530" }}>{delprice}</del>
                                        </div>

                                </div>

                        </div>


                </div>
        );
}

export default TrendingDealsInElectronic;
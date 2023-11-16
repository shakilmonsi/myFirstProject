import React from 'react';
import "./FollowedProduct.css"
import { FaStar } from "react-icons/fa";
import { GoUnverified } from "react-icons/go";
const FollowedProduct = ({ service }) => {
        const { name, description, img, price, delprice } = service;

        return (
                <div className=' col-md-2 col-sm-4 mt-2 '>
                        <div className="card  " style={{ width: "250px", height: "407px" }}>
                                <div className='' style={{ width: '240', height: "180px", backgroundColor: "#F4F4F4" }}>
                                        <img src={img} style={{ width: '230', height: "180px" }} className="img-fluid" alt="..." />
                                </div>
                                <div className="card-body">
                                        <h5 className="card-title"></h5>
                                        <p className="card-text">
                                                {description}
                                        </p>
                                </div>

                                {/* star and verified  setup  */}
                                <div className='mb-3  d-flex' style={{ width: "w-auto", height: "19px", }}>
                                        <b className='ms-2' style={{ fontSize: '16px', color: "#F08200 " }}
                                        ><FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar /> </b>
                                        <span style={{ color: " #C7511F33" }}><FaStar /></span>
                                        <p className='ms-5 ps-5'>
                                                <GoUnverified className='' style={{ width: "16px", height: "16px", color: "#FFCC3A" }} /> <span style={{ color: "#FFCC3A" }}>1000</span> </p>

                                </div>


                                {/* user Sold by setup   */}
                                <div className='d-flex p-1'>
                                        <h5 className='' style={{ fontSize: "12px" }}>Sold by :</h5>
                                </div>

                                {/* price setup  and          */}
                                <div className='mb-3 ' style={{ width: "", height: "19px", }}>
                                        <b className='ms-2' style={{ fontSize: '16px', color: "#2A2A2A" }}
                                        >BDT {price} </b>

                                        <del className='ms-5 ps-5' style={{ color: "#FF5530" }}>{delprice}</del>
                                </div>

                                {/* card butto setup  */}
                                <button className='m-auto rounded mb-3' style={{ width: "240px", height: "40px", backgroundColor: "#3F3F3F" }}>
                                        <span style={{ color: '#FFFFFF' }}>Add card</span>
                                </button>

                        </div>


                </div>
        );
}

export default FollowedProduct;
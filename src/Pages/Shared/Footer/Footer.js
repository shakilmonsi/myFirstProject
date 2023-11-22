import React from 'react';
// import css link 
import "./footer.css"
// import img and logo link 
import closslogo from"../../../assets/footerAll_icon/close.svg"
//Download Our App import

import apple from"../../../assets/footerAll_icon/apple.svg"
import playstore from"../../../assets/footerAll_icon/playstore.svg"
// import Follow US logo
import facebook from"../../../assets/footerAll_icon/facebook.png"
import instagram from"../../../assets/footerAll_icon/instagram.png"
import whatsapp from"../../../assets/footerAll_icon/whatsapp.png"
import email from"../../../assets/footerAll_icon/email.png"



import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='mt-3' style={{marginLeft:0}}>

      <footer className="footer  " style={{
        backgroundColor: "#EA4D00"

      }}>
       
          <div className=" row  pading_option_setup " >
            <div className="d-flex grid_footer_item">
              <div>
               
                <ul>
                <h6 className='footer_title_text_style'>Company Information</h6>
                  <Link  to="/"   className='style_to_link_text'>users add</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>contact your</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>order add</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>newProduct add</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>oldProduct add</Link>
                </ul>
              </div>
              <div className='style_to_link_text'>
               
                <ul>
                <h6  className='footer_title_text_style'>Brands</h6>
                  <Link  to="/"   className='style_to_link_text'>users add</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>contact your</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>order add</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>newProduct add</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>oldProduct add</Link>
                </ul>
              </div>
              <div>
              
                <ul>
                  <h6 className='footer_title_text_style'>Categories</h6>
                  <Link  to="/"   className='style_to_link_text'>users add</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>contact your</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>order add</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>newProduct add</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>oldProduct add</Link>
                </ul>
              </div>
              <div>
                <ul> 
                  <h6 className='footer_title_text_style'>Market & Sell</h6>
                  <Link  to="/"   className='style_to_link_text'>users add</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>contact your</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>order add</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>newProduct add</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>oldProduct add</Link>
                </ul>
              </div>
              <div>
                <ul>
                  <h6 className='footer_title_text_style'>Customer Service</h6>
                  <Link  to="/"   className='style_to_link_text'>How to Order</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>Track Your Order</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>FAQ</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>Contact us</Link>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text'>Return / Refund Policy</Link>
                  <Link  to="/"   className='style_to_link_text'>Terms & Conditions</Link>
                  <Link  to="/"   className='style_to_link_text'>Privacy Policy</Link>
                  <Link  to="/"   className='style_to_link_text'></Link>
                </ul>
              </div>
              <div>
            
                <ul>
                  <h6 className='footer_title_text_style'>Follow US</h6>
                  <br></br>
                  <div className='d-flex gap-3  faceBook_logo_setup' style={{color:"#F1F1F1"}}><img src={facebook} alt=''></img>  <Link  to="/"   className='style_to_link_text'>facebook</Link>   </div>
                  
                  <br></br>
                  <div className='d-flex gap-3  Instagram_logo_setup' style={{color:"#F1F1F1"}}><img src={instagram} alt=''></img>  <Link  to="/"   className='style_to_link_text'>Instagram</Link>   </div>
 
                  <br></br>
                  <div className='d-flex gap-3  faceBook_logo_setup' style={{color:"#F1F1F1"}}><img src={whatsapp} alt=''></img>  <Link  to="/"   className='style_to_link_text'>WhatsApp</Link>   </div>
 
                  <br></br>
                  <div className='d-flex gap-3  email_logo_setup' style={{color:"#F1F1F1"}}><img src={email} alt=''></img>  <Link  to="/"   className='style_to_link_text'>Email</Link>   </div>
 
                  
                
               
                </ul>
              </div>

{/* Download Our App   and playstore section  */}


              <div>
               
                <ul>
                  <h6 className='footer_title_text_style'>Download Our App</h6>
                  <p  to="/"   className='style_to_link_text'>Get the Cart24 mobile   app for FREE from here</p>
           
               
               
                  <img className='apple_playstore_logo' src={apple} alt='' style={{marginLeft:50}}></img>
                <br></br>
                  <img  className='apple_playstore_logo' src={playstore} alt='' style={{marginLeft:50}}></img>

      
                </ul>
              </div>
             
              <div>
              <img src={closslogo} alt=''></img>
              </div>

          </div>
         





          </div>

      
      </footer>
      <div className="row">
        <div className="col-lg-12">
          <div className="footer__copyright">
            <div className="footer__copyright__text">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
            <div className="footer__copyright__payment">
              <img src="img/payment-item.png" alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
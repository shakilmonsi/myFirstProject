import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import "./footer.css"
const Footer = () => {
    return (
        <div className='mt-3'>
        <footer className="footer "   style={{
          backgroundColor:"#EA4D00"
         
        }}>
     <div className="container"  >
       <div className=" row d-flex" >
        
         <div className=" col-md-3 col-sm-6">
           <div className="footer__widget">
           
             <ul>
             <h6>Useful Links</h6>
               <li>
                 <a href="#">About Us</a>
               </li>
              
               <li>
                 <a href="#">Privacy Policy</a>
               </li>
               <li>
                 <a href="#">Our Sitemap</a>
               </li>
             </ul>
             
             <ul>
                <h6>Useful Links</h6>
               <li>
                 <a href="#">Who We Are</a>
               </li>
               <li>
                 <a href="#">Our Services</a>
               </li>
              
               <li>
                 <a href="#">Testimonials</a>
               </li>
             </ul>
       
         
           </div>
         </div>
         <div className=" col-md-3 col-sm-6">
           <div className="footer__widget">
           
             <ul>
             <h6>Useful Links</h6>
               <li>
                 <a href="#">About Us</a>
               </li>
              
               <li>
                 <a href="#">Privacy Policy</a>
               </li>
               <li>
                 <a href="#">Our Sitemap</a>
               </li>
             </ul>
             
             <ul>
                <h6>Useful Links</h6>
               <li>
                 <a href="#">Who We Are</a>
               </li>
               <li>
                 <a href="#">Our Services</a>
               </li>
              
               <li>
                 <a href="#">Testimonials</a>
               </li>
             </ul>
       
         
           </div>
         </div>
         <div className=" col-md-3 col-sm-6">
           <div className="footer__widget">
           
             <ul>
             <h6>Useful Links</h6>
               <li>
                 <a href="#">About Us</a>
               </li>
              
               <li>
                 <a href="#">Privacy Policy</a>
               </li>
               <li>
                 <a href="#">Our Sitemap</a>
               </li>
             </ul>
             
             <ul>
                <h6>Useful Links</h6>
               <li>
                 <a href="#">Who We Are</a>
               </li>
               <li>
                 <a href="#">Our Services</a>
               </li>
              
               <li>
                 <a href="#">Testimonials</a>
               </li>
             </ul>

           </div>
         </div>
         <div className=" col-md-3 col-sm-6">
           <div className="footer__widget">
           
             <ul>
             <h6>Useful Links</h6>
               <li>
                 <a href="#">About Us</a>
               </li>
              
               <li>
                 <a href="#">Privacy Policy</a>
               </li>
               <li>
                 <a href="#">Our Sitemap</a>
               </li>
             </ul>
             
             <ul>
                <h6>Useful Links</h6>
               <li>
                 <a href="#">Who We Are</a>
               </li>
               <li>
                 <a href="#">Our Services</a>
               </li>
              
               <li>
                 <a href="#">Testimonials</a>
               </li>
             </ul>
       
         
           </div>
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
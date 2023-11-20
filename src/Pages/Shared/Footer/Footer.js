import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import "./footer.css"
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='mt-3'>
      <footer className="footer " style={{
        backgroundColor: "#EA4D00"

      }}>
       
          <div className=" row  pading_option_setup " >
            <div className="d-flex grid_footer_item">
              <div className='j'>
                <h6>Company Information</h6>
                <ul>
                  <Link to="/">users add</Link>
                  <br></br>
                  <Link to="/">contact your</Link>
                  <br></br>
                  <Link to="/">order add</Link>
                  <br></br>
                  <Link to="/">newProduct add</Link>
                  <br></br>
                  <Link to="/">oldProduct add</Link>
                </ul>
              </div>
              <div>
                <h6>Useful Links</h6>
                <ul>
                  <Link to="/">users add</Link>
                  <br></br>
                  <Link to="/">contact your</Link>
                  <br></br>
                  <Link to="/">order add</Link>
                  <br></br>
                  <Link to="/">newProduct add</Link>
                  <br></br>
                  <Link to="/">oldProduct add</Link>
                </ul>
              </div>
              <div>
                <h6>Useful Links</h6>
                <ul>
                  <Link to="/">users add</Link>
                  <br></br>
                  <Link to="/">contact your</Link>
                  <br></br>
                  <Link to="/">order add</Link>
                  <br></br>
                  <Link to="/">newProduct add</Link>
                  <br></br>
                  <Link to="/">oldProduct add</Link>
                </ul>
              </div>
              <div>
                <h6>Useful Links</h6>
                <ul>
                  <Link to="/">users add</Link>
                  <br></br>
                  <Link to="/">contact your</Link>
                  <br></br>
                  <Link to="/">order add</Link>
                  <br></br>
                  <Link to="/">newProduct add</Link>
                  <br></br>
                  <Link to="/">oldProduct add</Link>
                </ul>
              </div>
              <div>
                <h6>Useful Links</h6>
                <ul>
                  <Link to="/">users add</Link>
                  <br></br>
                  <Link to="/">contact your</Link>
                  <br></br>
                  <Link to="/">order add</Link>
                  <br></br>
                  <Link to="/">newProduct add</Link>
                  <br></br>
                  <Link to="/">oldProduct add</Link>
                </ul>
              </div>
              <div>
                <h6>Useful Links</h6>
                <ul>
                  <Link to="/">usersadd</Link>
                  <br></br>
                  <Link to="/">contactyour</Link>
                  <br></br>
                  <Link to="/">orderadd</Link>
                  <br></br>
                  <Link to="/">newProductadd</Link>
                  <br></br>
                  <Link to="/">oldProductadd</Link>
                </ul>
              </div>
              <div>
                <h6>Useful Links</h6>
                <ul>
                  <Link to="/">users add</Link>
                  <br></br>
                  <Link to="/">contact your</Link>
                  <br></br>
                  <Link to="/">order add</Link>
                  <br></br>
                  <Link to="/">newProduct add</Link>
                  <br></br>
                  <Link to="/">oldProduct add</Link>
                </ul>
              </div>
              <div>
              +
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
import React, { useContext } from 'react';
import "./header.css"

const Header = () => {
   

    return (
      <section>
              <header className="header">
  <div className="header__top">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="header__top__left">
            <ul>
              <li>
                <i className="fa fa-envelope" /> 
                Deliver to
                
              </li>
              <li>Bangladesh</li>
              <li>Track order</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="header__top__right">
            <div className="header__top__right__social">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
              <a href="#">
                <i className="fa fa-pinterest-p" />
              </a>
            </div>

            

            
            <div className="header__top__right__language">


            <div className="header__top__right__auth">
             
            </div>
              <img src="img/language.png" alt="" />
              <div>English</div>
              <span className="arrow_carrot-down" />
              <ul>
                <li>
                  <a href="#">Spanis</a>
                </li>
                <li>
                  <a href="#">English</a>
                </li>
              </ul>
            </div>
            <div className="header__top__right__auth">
              <a href="#">
              account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>


<section className="hero">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="hero__categories">
          <div className="hero__categories__all">
            <i className="fa fa-bars" />
            <span>All departments</span>
          </div>
          <ul>
        
           
 
          </ul>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="hero__search">
          <div className="hero__search__form">
            <form action="#">
             
              <input type="text" placeholder="What do yo u need?" />
          
            </form>
          </div>
         <div className='d-flex text-item-center' >
         <div className="hero__search__phone">
            <div className="hero__search__phone__icon">
              <i className="fa fa-phone" />
            </div>
            <div className="hero__search__phone__text">
              <h5>Account</h5>
         
            </div>
          </div>
          <div className="hero__search__phone">
            <div className="hero__search__phone__icon">
              <i className="fa fa-phone" />
            </div>
            <div className="hero__search__phone__text">
              <h5>Account</h5>
            
            </div>
          </div>
         </div>
        </div>
       
      </div>
    </div>
  </div>
</section>


      </section>
  
    
    );
};

export default Header;
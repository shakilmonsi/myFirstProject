import "./header.css";
import headerimg from "../../../assets/headerimg/image 133.png";

const Header = () => {
   

    return (
<nav>
  <div className="" style={{ backgroundColor: "rgb(255, 123, 0)", height: 25 }}>
    <div className="max-width d-flex justify-content-between align-items-center text-white">
      <div className="d-flex gap-2">
        <div className="d-flex">
          <img
            className="pt-1"
            src="https://static-00.iconduck.com/assets.00/location-position-icon-1640x2048-6jqx3f7e.png"
            width="15px"
            height={20}
            alt=""
          />
          <p>Deliver to</p>
        </div>
        <p>Bangladesh</p>
        <p>|</p>
        <div className="d-flex">
          <img
            className="pt-1"
            src="./icons8-delivery-50.png"
            width="20px"
            height={20}
            alt=""
          />
          <p>Track Order</p>
        </div>
      </div>
      <div className="d-flex gap-1">
        <img
          className="pt-1"
          src="./icons8-delivery-50.png"
          width="20px"
          height={20}
          alt=""
        />
        <p>
          Free Delivery from <span>50 SAR</span> and Free returns within 60
          days.
        </p>
      </div>
      <div className="d-flex gap-3">
        <div className="d-flex gap-1">
          <img
            className="pt-2"
            src="https://cdn-icons-png.flaticon.com/128/4372/4372537.png"
            width="15px"
            height="20px"
            alt=""
          />
          <p>Top Deals</p>
        </div>
        <p>BDT</p>
        <p>|</p>
        <p>EN</p>
        <p>Dark</p>
      </div>
    </div>
  </div>
  <div className="navbar max-width bg-body-tertiary">
    <div className="container-fluid">
      <div className="position-relative">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <img
          src={headerimg}
          style={{width: "104px", height:"27px"}}
          alt=""
        />
      
      </div>
      <div
        className="collapse navbar-collapse position-absolute toggle-position"
        id="navbarTogglerDemo03"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active taxt-primary" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </li>
        </ul>
      </div>
      <form className="d-flex" role="search">
        <span className="search-icon position-absolute z-1 opacity-50">
          <img
            src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
            alt="Search Icon"
            width={20}
          />
        </span>
        <input
          className="form-control position-relative text-center custom-search-input"
          type="search"
          placeholder="Search for Products, Categories, Sellers etc."
          aria-label="Search"
        />
        <span className="filter-icon position-absolute z-1 opacity-50">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6590/6590958.png"
            alt="Search Icon"
            width={20}
          />
        </span>
        <span className="scan-icon position-absolute z-1 opacity-50">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/new-version-of-star-selected-icon/scan-28.png"
            alt="Search Icon"
            width={20}
          />
        </span>
      </form>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5035/5035563.png"
            width="30px"
            alt=""
          />
          <button className="btn">Sell</button>
        </div>
        <div className="border-2 border-dark bord">
          <img
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
            width="30px"
            alt=""
          />
          <button className="btn">Account</button>
        </div>
      </div>
    </div>
  </div>
</nav>

  
    
    );
};

export default Header;
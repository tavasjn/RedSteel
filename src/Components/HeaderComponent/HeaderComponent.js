import React, { useEffect } from "react";
import axios from "axios";

// React Redux Below //

import { connect } from "react-redux";
import { getUser, logout } from "../../redux/reducer";
import { withRouter } from "react-router-dom";

// React Redux Above //

// ---------------- //

// Material UI Below //

import './Header.css';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// Material UI Above //

// ---------------- //

// Random Imports like photos //
import logo from '../../assets/redsteel_logo.png';
import { API_DOMAIN } from "../../Config";

// Random Imports like photos above //

function HeaderComponent(props) {
  useEffect(() => {
    if (!props.user.loggedIn) {
      props.getUser();
    }
  }, []);

  const userLogin = () => {
    window.location.href = `http://${API_DOMAIN}:5000/api/login`;
  };

  const logoutUser = () => {
    console.log("hitting logout", props);
    const { cart } = props;
    axios
      .post("/api/cart", { cart })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    props.logout();

    props.history.push("/");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id="home-product-page-header">
      <div id="left-header-1-stuff">
        <a href="/#/">
          <img
            id="logo"
            src={logo}
            alt="pic"
          />
        </a>
      </div>
      <div>
        <a href='/#/shirts'>Shirts</a>
      </div>
      <div>
        <a href='/#/hoodies'>Hoodies</a>
      </div>
      <div>
        <a href='/#/accessories'>Accessories</a>
      </div>
      <div>
        <a href='/#/about'>About Us</a>
      </div>
      <div className="cart-user-icons">
        <div>
          <a href="/#/cart">
            <ShoppingCartIcon></ShoppingCartIcon>
          </a>
        </div>
        {props.loggedIn ? (
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <img
                src={props.user.user_image}
                className="user-image"
                alt="pic"
              />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>{props.user.user_name}</MenuItem>
              <MenuItem onClick={() => logoutUser()}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <img
            src="https://static.thenounproject.com/png/2366460-200.png"
            onClick={() => userLogin()}
            className="user-icon"
            alt="pic"
          ></img>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    loggedIn: state.loggedIn,
    cart: state.cart
  };
};

const mapDispatchToProps = {
  getUser,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HeaderComponent));

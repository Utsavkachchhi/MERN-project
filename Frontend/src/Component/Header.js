import React, { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "../navbar.css";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import { TextField, Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../redux/actions/productsActions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import Swal from 'sweetalert2'
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const products = useSelector((state) => state.allProducts.filteredItems);
  const [loggedin, setLoggedin] = useState(false);
  const dispatch = useDispatch();

  const carts = useSelector((state) => state.handleCart);
  console.log("carts in header",carts);
  useEffect(() => {
    let quantity = 0;
    carts?.cart?.cart?.forEach((element) => {
      if (element.quantity) {
          quantity += element.quantity;
      }
    });
   
    setProductCount(quantity);
  }, [carts]);

  useEffect(() => {
    if (search == null || search == "")
      dispatch(searchProduct(search, products));
  }, [search]);
  dispatch(searchProduct(search, products));

  const inputHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  //  searchProduct(search,products);
  };

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    return location.pathname === "/product"
      ? setShowSearch(true)
      : setShowSearch(false);
  }, [location.pathname]);

  const LogoutApi = () => {
    const token = localStorage.getItem("mytoken");
    const userid = localStorage.getItem("userid");
    
    localStorage.removeItem("mytoken");
    localStorage.removeItem("userid");

    setLoggedin(false);
    Swal.fire({
      // position: 'top-end',
      icon: 'success',
      html: '<b>' + 'you have successfully logged out' + '</b>',
      showConfirmButton: false,
      timer: 3500
    }); 
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("mytoken")) {
      setLoggedin(true);
    }
  }, localStorage.getItem("mytoken"));

  // LogoutApi();
  return (
    <>
      <nav className="main-nav" style={{display: "none"}}>
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>U</span>tsav
            <span>T</span>ech
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>

            <li>
              <NavLink to="/product">Product</NavLink>
            </li>

            <li>
              <NavLink to="/order">Orders</NavLink>
            </li>

            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>

            <li>
              {/* <div className={ {active} ? 'search displayNone' : 'search' }> */}

              {showSearch && (
                <div>
                  <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    label="Search"
                    autoComplete="off"
                    value={search}
                  />
                </div>
              )}

              {/* </div> */}
            </li>

            <li>
            {loggedin ? <Link to="/cart">
                <Badge badgeContent={productCount} color="secondary">
                  <ShoppingCartIcon sx={{ fontSize: 25 }} />
                </Badge>
              </Link>  :  <Link to="/">
                <Badge badgeContent={productCount} color="secondary">
                  <ShoppingCartIcon sx={{ fontSize: 25 }} />
                </Badge>
              </Link>}

             
            </li>

            <li>
              {loggedin ? <LogoutIcon onClick={LogoutApi} /> : <LoginIcon />}
            </li>
          </ul>
          {/* <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div> */}
        </div>
         <div className="social-media">
          {/* <ul className="social-media-desktop">
            <li>
              <a
                href=""
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul> */}

           <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>  
      </nav>

      <nav className="containerMain">
        {/* 1st logo part  */}
        <div className="logo logoMain">
          <h2>
            <span>U</span>tsav
            <span>T</span>ech
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className="menuBarMain">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/order">Orders</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
          {/* <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div> */}
        </div>
         <div className="rightMenu">
           <ul className="social-media-desktop">
           <li>
              {/* <div className={ {active} ? 'search displayNone' : 'search' }> */}

              {showSearch && (
                <div className="searchBox"> 
                  <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    label="Search"
                    autoComplete="off"
                    value={search}
                  />
                </div>
              )}

              {/* </div> */}
            </li>

            <li>
            {loggedin ? <Link to="/cart">
                <Badge badgeContent="25" color="secondary">
                  <ShoppingCartIcon sx={{ fontSize: 25 }} />
                </Badge>
              </Link>  :  <Link to="/login">
                <Badge badgeContent="25" color="secondary">
                  <ShoppingCartIcon sx={{ fontSize: 25 }} />
                </Badge>
              </Link>}

             
            </li>

            <li>
              {loggedin ? <LogoutIcon onClick={LogoutApi} /> : <LoginIcon />}
            </li>
          </ul>
        </div>  
      </nav>
    </>
  );
};

export default Header;

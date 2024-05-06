import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../styles/Header.css";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearUserInfo } from "../redux/userDetailsReducer";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state?.user?.user);

  const handleLogout = () => {
    // Handle logout functionality here
    navigate("/signin");
    dispatch(clearUserInfo());
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <nav className="header">
      <>
        {/* Header logo */}
        {/* <img className="header-logo" src={logo} alt="skill boost header Logo" /> */}
        <Link to="/" className="no-link">
          <span>TravelGenie</span>
        </Link>

        {/* Adding search-icon */}
        {/* <div className="header-search">
        <input type="text" className="header-searchInput"></input>
        <SearchIcon className="header-searchIcon" />
      </div> */}

        <div className="header-nav">
          <div className="header-tabs">
            <div className="header-tab-container">
              <Link to="/tour-list" className="header-tab">
                Tour Services
              </Link>
            </div>
            <div className="header-tab-container">
              <Link to="/package-list" className="header-tab">
                Travel Packages
              </Link>
            </div>
          </div>
          <div className="header-user">
            <Link className="header-user" onClick={toggleDropdown}>
              <AccountCircleIcon fontSize="large" />
            </Link>
            {showDropdown && (
              <div className="dropdown">
                <Button onClick={handleLogout}>Logout</Button>
              </div>
            )}
          </div>
        </div>
      </>
    </nav>
  );
};

export default Header;

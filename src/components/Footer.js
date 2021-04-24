import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

const Footer = (props) => {
  return (
    <Nav>
      <NavMenu>
        <a>
          <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
      </NavMenu>
      <NavMenu>
        <a>
          <img src="/images/original-icon.svg" alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
      </NavMenu>

      <Logo>
        <a href="/home">
          <img src="/images/logo.svg" alt="Disney+" />
        </a>
      </Logo>

      <NavMenu>
        <a>
          <img src="/images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
      </NavMenu>
      <NavMenu>
        <a>
          <img src="/images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;

  @media (min-width: 900px) {
    display: none;
  }
`;

const Logo = styled.div`
  width: 80px;
  margin-left: 30%;
  padding: 0;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
  }
  @media (max-width: 648px) {
    margin-left: auto;
    padding: 0;
  }
`;

const NavMenu = styled.div`
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0px;
  padding-top: 20px;
  position: relative;

  margin-top: 10px;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;

      @media (max-width: 648px) {
        height: 20px;
      }
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
      @media (max-width: 648px) {
        display: none;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

export default Footer;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'


const navOptions = [
  {title: "HOME", logo:"/images/home-icon.svg"},
  {title: "SEARCH", logo:"/images/search-icon.svg"},
  {title: "WATCHLIST", logo:"/images/watchlist-icon.svg"},
  {title: "ORIGINALS", logo:"/images/original-icon.svg"},
  {title: "MOVIES", logo:"/images/movie-icon.svg"},
  {title: "SERIES", logo:"/images/series-icon.svg"},
];


export const Header = () => {
  
  const [topbar, setTopbar] = useState<boolean>(true);
  const navigate = useNavigate()


  return (
    <>
      <Nav>
        <Logo src={"/images/logo.svg"} />
        <NavMenu>
        {navOptions.map((d:any) => (
                  <a>
                      <img src={d?.logo} />
                      <span>{d?.title}</span>
                  </a>
                ))}
        </NavMenu>
        <UserImg 
        onClick={() => navigate("/login")}
        src='https://i.insider.com/5c90f413dd086163cf01d593?width=1136&format=jpeg'/>      
      </Nav>
      </>
  )
};



const Nav = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  color: white;
  overflow-x: hidden;
  width:100%;

  @media only screen and (max-width: 550px) {
    width:100%;
  }
`

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
display: flex;
flex: 1;
margin-left: 25px;
align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    @media only screen and (max-width: 850px) {
      padding: 0 8px;
    }

    @media only screen and (max-width: 850px) {
      display: none;
    }


    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      margin-left: 1px;
      letter-spacing: 1.42px;
      position: relative;

      
    @media only screen and (max-width: 850px) {
      font-size: 11px;
    }

      &::after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  
      @media only screen and (max-width: 600px) {
        width: 36px;
        height:36px;
    }

`

const Opac = styled.div`
  height: 70px;
  background-color: transparent;
  display: flex; 
`



// i want a json file for movies with images in disney plus hotstar?
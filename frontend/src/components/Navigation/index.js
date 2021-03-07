import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo from "./SkinTnT-logo.png"

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
      </>
    );
  }

  return (
    <ul id="top-nav-bar">
      <li>
        <NavLink to='/'>
        <img src={logo} id="nav-bar-logo" />
        </NavLink>
      </li>
      <li id="nav-buttons">
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;

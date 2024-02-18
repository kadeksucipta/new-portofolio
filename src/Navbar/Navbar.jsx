import React from 'react';
import "./Navbar.css"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBriefcase, faCircleInfo, faCode, faHome, faHomeUser, faHouse, faInfo } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const goToHome = () => {
      navigate("/dashboard");
    };
    const goToAbout = () => {
      navigate("/tentang");
    };
    const goToSkill = () => {
      navigate("/skill");
    };

  return (
    <div className="container">
        <div className="navbar">
         
            <li className="child-desk">
              <h4 className='title-navbar' onClick={() => goToHome()}><FontAwesomeIcon className='icon-navbar' icon={faHouse} /> Home</h4>
            </li>
            <li className="child-desk">
              <h4 className='title-navbar' onClick={() => goToAbout()}><FontAwesomeIcon className='icon-navbar' icon={faCircleInfo} /> About</h4>
            </li>
            <li className="child-desk">
              <h4 className='title-navbar' onClick={() => goToSkill()}><FontAwesomeIcon className='icon-navbar' icon={faCode} /> Skills</h4>
            </li>
            {/* <li className="child-desk">
              <h4 className='title-navbar'><FontAwesomeIcon className='icon-navbar' icon={faBriefcase} /> Experience</h4>
            </li> */}
          
        </div>
      </div>
  );
}

export default Navbar;

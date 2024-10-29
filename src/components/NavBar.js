import React,{useState} from 'react';

function NavBar() {
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
           <a href='/' className='navbar-logo' title='Homepage'>
           <img src='./logo.png' alt='SKH Logo'/>
           </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

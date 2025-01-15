import React from 'react';


function Navbar() {

   
  return (
            <nav class="navbar bg-transparent" style={{position: 'fixed', height:'8vh',zIndex:1}}>
            <div class="container-fluid">
                <a class="navbar-brand text-white fw-bold" style={{marginLeft:'2rem'}} href="/">
                Bootstrap
                </a>
            </div>
            </nav>
  );
}

export default Navbar;

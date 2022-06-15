import React from 'react'
import Logo from '../img/airbnb-logo.svg'
function Header() {
    return (
        // start header section 
        <header> 
            <nav className='navbar'>
                <img src={Logo} alt='logo' />
            </nav> 

            <div className='home' id='home'>
                
            </div> 
        </header>
    )
}

export default Header
import React from 'react'
import Logo from '../img/airbnb-logo.svg'
// Images
import Img1 from '../img/image1.png'
import Img2 from '../img/image2.png'
import Img3 from '../img/image3.png'
import Img4 from '../img/image4.png'
import Img5 from '../img/image5.png'
import Img6 from '../img/image6.png'
import Img7 from '../img/image7.png'
import Img8 from '../img/image8.png'
import Img9 from '../img/image9.png'


function Header() {
    return (
        // start header section 
        <header> 
            <nav className='navbar'>
                <img src={Logo} alt='logo' />
            </nav> 

            <div className='home' id='home'>
                <div className='home-img'>
                    <div className='div-img single'>
                        <img src={Img1} alt='' />
                    </div>

                    <div className='div-img up'>
                        <img src={Img2} className='one' alt='' />
                        <img src={Img3} className='two' alt='' />
                    </div>

                    <div className='div-img down'>
                        <img src={Img4} className='two' alt='' />
                        <img src={Img5} className='one' alt='' />
                    </div>

                    <div className='div-img up'>
                        <img src={Img6} className='one' alt='' />
                        <img src={Img7} className='two' alt='' />
                    </div>

                    <div className='div-img down'>
                        <img src={Img8} className='two' alt='' />
                        <img src={Img9} className='one' alt='' />
                    </div>
                </div>

                <div className='home-content'>
                    <h1>Online Experiences</h1>
                    <p>
                        Join unique interactive activities led by <br />one-of-a-kind hosts—all without leaving <br />home.
                    </p>
                </div>
            </div> 
        </header>
    )
}

export default Header
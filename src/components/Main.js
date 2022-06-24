import React from 'react'
import ImgCard1 from '../img/card1.png'
import ImgCard2 from '../img/card2.png'
import ImgCard3 from '../img/card3.png'

function Main() {
    return (
        <main>
            <div className='card'>
                <div className='img-card'>
                    <img src={ImgCard1} alt='' />
                    <button>SOLD OUT</button>
                </div>

                <div className='card-content'>
                    <div className='rating'>
                        <i class="ri-star-fill"></i>
                        <span className='num'>5.0</span>
                        <span className='rate'>(6).USA</span>
                    </div>
                    <p>
                        Life lessons with Katie Zaferes
                    </p>
                    <div className='salary'>
                        From $136 / <span>person</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
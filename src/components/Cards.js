import React from 'react'

function Cards() {
    return (
        <div className='card'>
            <div className='img-card'>
                <img src='' alt='' />
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
    )
}

export default Cards
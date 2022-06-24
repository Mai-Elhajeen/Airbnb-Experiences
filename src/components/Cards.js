import React from 'react'

function Cards(props) {
    return (
        <div className='card'>
            <div className='img-card'>
                <img src={props.img} alt='' />
                <button>SOLD OUT</button>
            </div>

            <div className='card-content'>
                <div className='rating'>
                    <i class="ri-star-fill"></i>
                    <span className='num'>{props.rating}</span>
                    <span className='rate'>({props.review}).USA</span>
                </div>
                <p>
                    {props.title}
                </p>
                <div className='salary'>
                    From ${props.price} / <span>person</span>
                </div>
            </div>
        </div>
    )
}

export default Cards
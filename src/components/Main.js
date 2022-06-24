import React from 'react'
import Cards from './Cards'
import ImgCard1 from '../img/card1.png'
import ImgCard2 from '../img/card2.png'
import ImgCard3 from '../img/card3.png'

function Main() {
    return (
        <main>
            <Cards 
                img={ImgCard1}
                rating={5.0}
                review={6}
                country='USA'
                title='Life lessons with Katie Zaferes'
                price={150}
            />

            <Cards 
                img={ImgCard2}
                rating={4.9}
                review={8}
                country='Canada'
                title='Wedding lessons with Sara'
                price={230}
            />

            <Cards 
                img={ImgCard3}
                rating={3.7}
                review={5.7}
                country='USA'
                title='Sport lessons with Dived'
                price={95}
            />
        </main>
    )
}

export default Main
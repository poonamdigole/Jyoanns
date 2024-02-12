import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeProductCard from '../Home/HomeProductCard';



function HomeCarousel({data, section}) {

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items:5 },
    };

    const items = data.slice(0,10).map((item) => <HomeProductCard product ={item}/>)

    return (
        <div >
            <div>
                <h1  className='text-2xl m-5 text-center font-bold'>{section}</h1>
                <AliceCarousel
                   autoPlay
                   autoPlayInterval={1000}
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                />
            </div>

        </div>
    )
}

export default HomeCarousel




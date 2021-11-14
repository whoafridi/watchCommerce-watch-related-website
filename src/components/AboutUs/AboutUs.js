import React from 'react'

const AboutUs = () => {
    const url = `https://images.antiquesatlas.com/dealer-stock-images/thevintagewristwatch/A_gents_1950s_Rotary_Triple_da_as170a2945z-1.jpg`
    return (
        <div className="container mt-3">
            <h1>Welcome to watchCommerce</h1>
            <img style={{width:"100%"}} src={url} alt="lol" />
            <p>
            Since 2020, It's been amazing journey at ProCourier.
            </p>
        </div>
    )
}

export default AboutUs;
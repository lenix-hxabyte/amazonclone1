import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="lenix3.jpg" alt=""/>
        <div className="home_row">
        <Product 
            id="3"
            title="ninaivugale"
            price={40}
            rating={4}
            image="cover art 1001.jpg"
        />
        <Product 
            id="2"
            title="dont stop"
            price={30}
            rating={4}
            image="dont final.jpg"
        />
        
         <Product 
            id="1"
            title="buzzkill"
            price={600}
            rating={4}
            image="buzz img.jpg"
        />

        </div>
        </div>
    )
}

export default Home

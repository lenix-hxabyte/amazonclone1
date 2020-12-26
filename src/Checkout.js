import React from 'react'
import { useStateValue} from "./StateProvider"
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import CurrencyFormat from "react-currency-format"
import Subtotal from "./Subtotal"

function Checkout() {
    const [{basket}, ] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" src="dark lenix.jpg" alt=""/>
            {basket?.length === 0 ? (
                <div>
                    <h2>cart it emptyyy</h2>
                    <p> you hvae no items in the basket...please add on or more stuff</p>
                </div>
            ) : (
                <div>
                    <h1 className="checkout_title"> Your shoping basket </h1>
                    {basket?.map((item )=>{
                        console.log(item);
                        return (
                        
                        <CheckoutProduct 
                        id={item.id} 
                         title={item.title}
                          image={item.image}                                     
                          price={item.price}
                          rating={item.rating}
            
                        />
                    )})}
                    
                     
                </div>
            )}
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                    </div>
            )}
        </div>
    )
}

export default Checkout

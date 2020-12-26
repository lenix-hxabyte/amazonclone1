import React from 'react'
import "./Subtotal.css"
import  CurrencyFormat  from "react-currency-format"
import { ShoppingBasket } from '@material-ui/icons'
import { useStateValue} from "./StateProvider"
import { getBasketTotal} from "./reducer"
function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value) => (
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                </p>
                
                </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
           <button>Proceed to CheckOut</button>
        
        </div>
    )
}

export default Subtotal 

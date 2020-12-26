import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue} from "./StateProvider"
function Header() {

    const[{ basket }, dispatch ] = useStateValue();
 
    return (
        <nav className="header">
            <Link to="/" >
            <img 
            className="header_logo"
            src="hexabyte2.jpg"
            alt=""
            />
            </Link>

        <div className="header_search">
            <input type="text" className="header_searchInput"/>
            <SearchIcon className="header_searchIcon"/>
     </div>  
     <div className="header_nav">
         <Link to="/login" className="header_link">
         <div className="header_option">
             <span className="header_optionLiOne">
                 Hello Lenix
             </span>
             <span className="header_optionLiTwo">Sign Outt</span>

         </div>
         </Link>

<Link className="header_link">
         <div className="header_option">
             <span className="header_optionLiOne">
                Returns
             </span>
             <span className="header_optionLiTwo"> & Orders</span>

         </div>
         </Link>
<Link to = "/checkout" className="header_link">
         <div className="header_optionBasket">
           
                 <ShoppingBasketIcon /> 
                   
            
             <span className="header_optionLiTwo header_basketCount">
                 {basket?.length}</span>

         </div>
         </Link>


     </div>
     
      </nav>
    )
}

export default Header

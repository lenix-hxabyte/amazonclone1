import React, {useEffect} from "react"
import './App.css';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout" 
import Login from "./Login"
import LoginContainer from "./LoginContainer";
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will urn only when app com loads
    auth.onAuthStateChanged(authUser => {
      console.log ('THE USER IS >>>', authUser);
      if(authUser){
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
      })
    }
  , [])
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       <Switch>
         <Route path="/checkout">
           <Header />
           <Checkout />
         </Route>
         <Route path="/Login">
            
          <Login />
          <LoginContainer />
         </Route>
         <Route path="/">
           <Header />
           <Home />
           <h1>HOME PAGE!!!</h1>
          
         </Route>
       </Switch>
      
      </header>
    </div>
    </Router>
  );
}

export default App;

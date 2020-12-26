import React from "react"
import './App.css';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout" 
import Login from "./Login"
function App() {
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

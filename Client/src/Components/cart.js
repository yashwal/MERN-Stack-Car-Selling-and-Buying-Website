import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './cart.css'
import Navlink from'./Navlink'


function cart() {
 return( 
    <div className='Nmain-div'>
    <div className='Ncontainer'>
        
        <Navlink />
    <div class="cartcontainer">
        
        <h3>There are no items in your cart</h3>
        <button>
        <a href="/Accessories">Continue Shopping</a></button>
           
        
    </div>
       
       
    
      
    </div>
    </div>
  );
    
}

export default cart;
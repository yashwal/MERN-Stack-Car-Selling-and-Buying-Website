import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './cbc.css'

var addtocarthandler= (a)=>{
console.log(a);
}
function fm() {
    return( 
        <div className='body'>
        
       <div className='vbnmain-div'>
       <div className='vbncontainer'>
           
          
             <nav>
                 <div class="nav2">
                 <div style={{ display: 'flex', flexDirection: 'row' }}>
                  
                     
                   <NavLink to='/Accessories'>
                         <div className='nav-cbc'>
                             <span>Car Body Covers</span>
                         </div>
                       </NavLink>

                       <NavLink to='/cwb'>
                         <div className='nav-cwb'>
                             <span>Car Wiper Blades</span>
                         </div>
                       </NavLink>

                       <NavLink to='/fm'>
                         <div className='nav-fm'>
                             <span>Foot Mat</span>
                         </div>
                       </NavLink>

                       <NavLink to='/cmf'>
                         <div className='nav-cmf'>
                             <span>Car Mud Flap</span>
                          </div>
                      </NavLink>
                      <NavLink to='/cart'>
                         <div className='nav-cart'>
                             <span>Cart</span>
                          </div>
                      </NavLink>
             </div>
             </div>
             </nav>
             

         <div class="title">
            <h3>Foot Mat</h3>
        </div>      
      
       

    <div class="wrapper">
        
        
        <div class="menu">
            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0147632_5d-premium-custom-fitted-car-mats-for-volkswagen-polo-gt-black_375.jpeg" alt=""/>
                <div class="menu-content">
                    <h4>5D premium custom fitted<span>₹2000</span></h4>
                    <p>volkwagen polo gt</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0110100_curly-luxury-custom-fitted-car-foot-mats-for-skoda-rapid-black-grey_375.jpeg" alt=""/>
                <div class="menu-content">
                    <h4>Aero waterproof heat resistent cover <span>₹2600</span></h4>
                    <p>skoda rapid grey</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0122920_7d-luxury-custom-fitted-car-mats-for-volkswagen-polo-black_375.jpeg" alt=""/>
                <div class="menu-content">
                    <h4>7D custom fitted luxury mat <span>₹2600</span></h4>
                    <p>tata nexon 2020</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0130358_5d-premium-custom-fitted-car-mats-for-audi-a3-2019-tan_375.jpeg" alt=""/>
                <div class="menu-content">
                    <h4>7D custom fitted luxury mat <span>₹2600</span></h4>
                    <p>volkwagen black</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0130304_5d-premium-custom-fitted-car-mats-for-audi-a5-cabriolet-coffee_375.jpeg" alt=""/>
                                <div class="menu-content">
                    <h4>7D custom fitted luxury mat<span>₹4500</span></h4>
                    <p>Volkswagen-Black</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0144641_uls-7d-economy-custom-fitted-car-mats-for-jaguar-xf-2018-beige_375.jpeg" alt="" />
                <div class="menu-content">
                    <h4>7D custom Economy mat<span>₹2300</span></h4>
                    <p>jaguar beige</p>
                    <button >Add to Cart</button>
                </div>
            </div>

            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0123160_7d-luxury-custom-fitted-car-mats-for-volkswagen-vento-manual-black_375.jpeg" alt="" />
                <div class="menu-content">
                    <h4>7D custom fitted luxury mat <span>₹4500</span></h4>
                    <p>Volkswagen-Black</p>
                    <button >Add to Cart</button>
                </div>
            </div>

            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0130404_5d-premium-custom-fitted-car-mats-for-audi-a8-2013-beige_375.jpeg" alt=""/>
                <div class="menu-content">
                    <h4>7D custom fitted luxury mat<span>₹4900</span></h4>
                    <p>honda jazz beige</p>
                    <button onClick={addtocarthandler(8)}>Add to Cart
                      
                    </button>
                </div>
            </div>
          
        </div>
    </div>
  </div>
    </div>
    </div>
    
    
       
     ); }

export default  fm;
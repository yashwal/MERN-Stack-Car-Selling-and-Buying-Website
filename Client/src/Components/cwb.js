import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './cbc.css'

var addtocarthandler= (a)=>{
console.log(a);
}
function cwb() {
    return( 
        <div className='body'>

       <div className='qasmain-div'>
       <div className='ssacontainer'>
           
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
            <h3>Car Wiper Blades</h3>
        </div>      
      
       

    <div class="wrapper">
        
        
        <div class="menu">
            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0083632_f8-series-premium-silicon-wiper-blade-18_375.jpeg" alt=""/>
                <div class="menu-content">
                    <h4>F8 series premium silicone<span>₹349</span></h4>
                    <p>18"</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0083633_f8-series-premium-silicon-wiper-blade-19_375.jpeg" alt=""/>
                <div class="menu-content">
                    <h4>F8 series premium silicone<span>₹349</span></h4>
                    <p>19"</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
            <img src="https://www.autofurnish.com/content/images/thumbs/0083642_autofurnish-f8-series-premium-silicon-wiper-blades-d18-p16_375.jpeg" alt=""/>
                <div class="menu-content">
                    <h4>F8 series premium silicone<span>₹599</span></h4>
                    <p>(D)18" (P)16"</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0083627_f8-series-premium-silicon-wiper-blade-12_375.jpeg" alt="" />
                <div class="menu-content">
                    <h4>F8 series premium silicone <span>₹349</span></h4>
                    <p>12"</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0083631_f8-series-premium-silicon-wiper-blade-16_375.jpeg" alt="" />
                <div class="menu-content">
                    <h4>F8 series premium silicone<span>₹349</span></h4>
                    <p>16"</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
            <img src="https://www.autofurnish.com/content/images/thumbs/0083645_autofurnish-f8-series-premium-silicon-wiper-blades-d20-p17_375.jpeg" alt=""/>
                <div class="menu-content">
                    <h4>F8 series premium silicone<span>₹599</span></h4>
                    <p>(D)19" (P)17"</p>
                    <button >Add to Cart</button>
                </div>
            </div>

            <div class="single-menu">
            <img src="https://www.autofurnish.com/content/images/thumbs/0083646_autofurnish-f8-series-premium-silicon-wiper-blades-d20-p18_375.jpeg" alt=""/>
                <div class="menu-content">
                    <h4>F8 series premium silicone <span>₹599</span></h4>
                    <p>(D)20" (P)18"</p>
                    <button >Add to Cart</button>
                </div>
            </div>

            <div class="single-menu">
            <img src="https://www.autofurnish.com/content/images/thumbs/0083640_autofurnish-f8-series-premium-silicon-wiper-blades-for-chevrolet-aveo-d16-p16_375.jpeg" alt=""/>
                <div class="menu-content">
                    <h4>F8 series premium silicone<span>₹599</span></h4>
                    <p>Chevrolet Aveo (D)16" (P)16"</p>
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

export default  cwb;
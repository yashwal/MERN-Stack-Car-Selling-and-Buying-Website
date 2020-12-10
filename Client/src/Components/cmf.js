import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './cbc.css'

var addtocarthandler= (a)=>{
console.log(a);
}
function cmf() {
    return( 
        <div className='body'>

       <div className='Cmain-div'>
       <div className='Ccontainer'>
           
          
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
            <h3>Car Sun Shades</h3>
        </div>      
      
       

    <div class="wrapper">
        
        
        <div class="menu">
            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0120948_custom-fit-car-sun-shades-curtains-mesh-for-mahindramarazzo-4-pcs_375.jpeg" alt=""/>
                <div class="menu-content">
                    <h4>Car automatic side window shade <span>₹2000</span></h4>
                    <p>tata tigor.</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0111087_magnetic-sun-shades-for-renault-kwid-4-pcs_375.jpeg" alt=""/>
                <div class="menu-content">
                    <h4>Car automatic side window shade <span>₹2600</span></h4>
                    <p>tata altroz 2020</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
            <img src="https://www.autofurnish.com/content/images/thumbs/0105254_car-auto-window-sun-shade-mesh-type-set-of-2_375.jpeg" alt=""/>
             <div class="menu-content">
                    <h4>Custom Fit Sun Shades <span>₹2600</span></h4>
                    <p>tata nexon 2020</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
            <img src="https://www.autofurnish.com/content/images/thumbs/0120916_custom-fit-car-sun-shades-curtains-mesh-for-maruti-suzuki-dzire-2012-2016-4-pcs_375.jpeg" alt=""/>
                <div class="menu-content">
                    <h4>Car automatic side window shade <span>₹260</span></h4>
                    <p>beat</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
            <img src="https://www.autofurnish.com/content/images/thumbs/0102202_car-automatic-side-window-sun-shade-set-of-4pcs-for-chevrolet-aveo-u-va-2006-2012_375.jpeg" alt=""/>
            <div class="menu-content">
                
                    <h4>Car automatic side window shade<span>₹450</span></h4>
                    <p>chevrolet</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
            <img src="https://www.autofurnish.com/content/images/thumbs/0102202_car-automatic-side-window-sun-shade-set-of-4pcs-for-chevrolet-aveo-u-va-2006-2012_375.jpeg" alt=""/>
             <div class="menu-content">
                    <h4>Car automatic side window shade<span>₹2300</span></h4>
                    <p>jaguar</p>
                    <button >Add to Cart</button>
                </div>
            </div>

            <div class="single-menu">
            <img src="https://www.autofurnish.com/content/images/thumbs/0102202_car-automatic-side-window-sun-shade-set-of-4pcs-for-chevrolet-aveo-u-va-2006-2012_375.jpeg" alt=""/>
            <div class="menu-content">
                    <h4>Car automatic side window shade <span>₹4500</span></h4>
                    <p>Volkswagen</p>
                    <button >Add to Cart</button>
                </div>
            </div>

            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0102244_car-automatic-side-window-sun-shade-set-of-4pcs-for-honda-jazz-2017_375.jpeg" alt="" />
                <div class="menu-content">
                    <h4>Car automatic side window shade<span>₹4900</span></h4>
                    <p>4pc honda jazz</p>
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

export default  cmf;
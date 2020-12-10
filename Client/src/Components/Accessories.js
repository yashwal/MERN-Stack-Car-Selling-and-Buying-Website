import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './cbc.css'

var addtocarthandler= (a)=>{
console.log(a);
}
function Accessories() {
    return( 
        <div className='body'>
       <div className='Accmain-div'>
       <div className='Acccontainer'>
           
           
             
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
                      <NavLink to='/Home'><div className='Accnav-home'>
                      <span>Home</span></div> 
                  </NavLink>

             </div>
             </div>
             </nav>
             

         <div class="title">
            <h3>Car Body Covers</h3>
        </div>      
      
       

    <div class="wrapper">
        
        
        <div class="menu">
            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0083536_acho-premium-100-waterproof-car-body-cover-for-tata-tigor-acho-silver_375.jpeg" alt="" />
                <div class="menu-content">
                    <h4>Acho Premium 100% waterproof cover <span>₹2000</span></h4>
                    <p>Cover for tata tigor. silver.</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0144817_aero-waterproof-heat-resistant-mirror-and-antenna-pocket-car-body-cover-compatible-with-tata-altroz-_375.jpeg" alt="" />
                <div class="menu-content">
                    <h4>Aero waterproof heat resistent cover <span>₹2600</span></h4>
                    <p>tata altroz 2020</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0135451_aero-waterproof-heat-resistant-mirror-and-antenna-pocket-car-body-cover-compatible-with-tata-nexon-a_375.jpeg" alt="" />
                <div class="menu-content">
                    <h4>Aero waterproof heat resistent cover <span>₹2600</span></h4>
                    <p>tata nexon 2020</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
                <img src="https://www.autofurnish.com/content/images/thumbs/0105314_parachute-blue-car-body-cover-for-hyundai-santro-2018-parachute-blue_375.jpeg" alt=""/>
                <div class="menu-content">
                    <h4>Acho Premium 100% waterproof cover<span>₹260</span></h4>
                    <p>santro parachute blue</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
            <img src="https://www.autofurnish.com/content/images/thumbs/0129978_stylish-aqua-stripe-car-body-cover-for-volvo-s60-2016-arc-blue_375.jpeg" alt=""/>
            <div class="menu-content">
                    <h4>Acho Premium 100% waterproof cover<span>₹450</span></h4>
                    <p>volvo s60 arc blue</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div class="single-menu">
                
            <img src="https://www.autofurnish.com/content/images/thumbs/0146065_dual-tone-silver-blue-car-body-cover-for-hyundai-verna-2017-sporty-blue_375.jpeg" alt=""/>
            <div class="menu-content">
                    <h4>Aero waterproof heat resistent cover <span>₹2300</span></h4>
                    <p>hyundai verna - sporty blue</p>
                    <button >Add to Cart</button>
                </div>
            </div>

            <div class="single-menu">
            <img src="https://www.autofurnish.com/content/images/thumbs/0129999_stylish-red-stripe-car-body-cover-for-honda-civic-2019-attire-aqua_375.jpeg" alt=""/>
                <div class="menu-content">
                    <h4>Aero waterproof heat resistent cover <span>₹4500</span></h4>
                    <p>honda civic aqua</p>
                    <button >Add to Cart</button>
                </div>
            </div>

            <div class="single-menu">
            <img src="https://www.autofurnish.com/content/images/thumbs/0104998_acho-car-body-cover-for-maruti-swift-2018-acho-red_375.jpeg" alt=""/>
            <div class="menu-content">
                    <h4>Aero waterproof heat resistent cover <span>₹4900</span></h4>
                    <p>Maruti swift acho red</p>
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

export default  Accessories;
import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './GClass.css'
import GclassVideo from './video/Gclass.mp4'


function GClass() {
    return (
      <div className='G8main-div'>
      <div className='G8container'>
          <div className='G8section'>
          <div className='G8content'>
          <nav>
            <div className='G8div-header'>
               
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <NavLink to='/Home'><div className='G8nav-home' style={{color:'white'}}>
                        <span>Home</span></div> 
                    </NavLink>
                    
                    <NavLink to='/AClass'>
                      <div className='G8nav-lambo'>
                         <div className='G8lambo'>
                          A-Class
                         </div>
                      </div>
                    </NavLink>
                    <NavLink to='/CClass'>
                    <div className='G8nav-tesla'>
                          <span>C-Class</span>
                      </div>
                    </NavLink>
                    <NavLink to='/GClass'>
                      <div className='G8nav-ferari'>
                          <span>G-Class</span>
                      </div>
                    </NavLink>
                    <NavLink to='/SClass'>
                      <div className='G8nav-benz'>
                          <span>S-Class</span>
                      </div>
                    </NavLink>
                    
                </div>
            </div>
        </nav>
      <div>
          <div className='div-G81a' style={{position:'relative',top:'450px',alignItems:'center',fontSize:'22px',color:'white'}}>
              <div><span> 218 mph (350 km/h) </span><span> |</span>
              <span> 2 seater </span><span> |</span>
              <span> 0-62-mph in 2.8 sec </span>
          </div>
          </div>
          <div className='div-G81b' style={{position:'relative',top:'460px',alignItems:'center',fontSize:'12px',color:'white',left:'20px'}}>
              <div><span>63 units capacity</span> <span></span><span> | </span>
              <span> len-4843mm | wid-2273mm </span><span>|</span>
              <span> Horsepower: 544 to 566 kW</span>
          </div>
          </div>
        <span className='G8span'>
        
        </span>
        </div>
         
          </div>
          </div>
      
          <div className='G8section'>
          <div className='G8content'>
          <div>
              <video autoPlay loop muted>
                  <source src={GclassVideo} type='video/mp4' />
                 <div>"Lamborghini, you may be able to drive a tractor,
                  but you will never be able to handle a Ferrari properly.
                  This was the time when I finally decided to make a perfect sports car."
                  – Ferruccio Lamborghini</div> 
              </video>
            </div>
            <div>
            
            </div>
          </div>
          </div>

          <div className='G8section'>
          <div className='G8content'>
          <div className='div-Ga3a' style={{position:'relative',top:'460px',alignItems:'center',fontSize:'22px',color:'white',left:'450px', top:'200px',display:'flex',flexDirection:'column'}}>
          <span >Displays - 6 inch Touchscreen</span>
              <span>Music System</span>
              <span>HD Display</span>
              </div>
              <div className='div-m33b' style={{position:'relative',top:'360px',alignItems:'center',fontSize:'22px',color:'black',fontFamily:'Poppins,sans-serif'}}>
                <p>The inside of G-class is unlike any other car. 
                  You can use your smartphone as a key, and access all driver controls in the central 6-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat.
                  </p></div>
              </div>
            </div>
            


          <div className='G8section'>
          <div className='G8content'>

          <div><span style={{color:'white',fontSize:'1.6em',position:'relative',top:'10px'}}>Designed for Efficiency</span>
          <span className='G8allist' style={{ color:'white', position:'relative',left:'-380px',top:'0px'}}><ol> 
          <li>ARAI Mileage - 7.69kmpl</li>
          <li> City Mileage - 3.22 kmpl</li>
          <li> Fuel Type - Petrol</li>
          <li>Engine Displacement (cc) - 6498</li>
          <li> Max Power (bhp@rpm) - 770bhp@8500rpm</li> </ol>
          </span>
          <span  className='G8arlist' style={{ color:'white', position:'relative',left:'380px',top:'-100px'}} ><ol>
          <li> Max Torque (nm@rpm) - 720Nm@6750rpm</li>
          <li> Seating Capacity- 2</li>
          <li> TransmissionType - Automatic</li>
          <li> Boot Space (Litres) - 110</li>
          <li> Fuel Tank Capacity - 90</li>
          <li> Body Type - Coupe</li>
                                         </ol> </span></div>
          </div></div>
          <div className='G8section'>
          <div className='G8content'>
          <div><Footer /></div>
          </div></div>
      
      </div>
      </div>
     
  );
    
}

export default GClass;

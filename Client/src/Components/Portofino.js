import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './Portofino.css'
import FerrariVideo from './video/Ferrari3.mp4'


function Portofino() {
    return (
      <div className='Pomain-div'>
      <div className='Pocontainer'>
          <div className='Posection'>
          <div className='Pocontent'>
          <nav>
            <div className='Podiv-header'>
               
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <NavLink to='/Home'><div className='Ponav-home'>
                        <span>Home</span></div> 
                    </NavLink>
                    
                    <NavLink to='/Portofino'>
                      <div className='Ponav-lambo'>
                         <div className='Polambo'>
                          Portofino
                         </div>
                      </div>
                    </NavLink>
                    <NavLink to='/812'>
                      <div className='Ponav-tesla'>
                          <span>812</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Roma'>
                      <div className='Ponav-ferari'>
                          <span>Roma</span>
                      </div>
                    </NavLink>
                    <NavLink to='/GTC4'>
                      <div className='Ponav-benz'>
                          <span>GTC 4</span>
                      </div>
                    </NavLink>
                    
                </div>
            </div>
        </nav>
      <div>
          <div className='div-Po1a' style={{position:'relative',top:'450px',alignItems:'center',fontSize:'22px',color:'white'}}>
              <div><span> 218 mph (350 km/h) </span><span> |</span>
              <span> 2 seater </span><span> |</span>
              <span> 0-62-mph in 2.8 sec </span>
          </div>
          </div>
          <div className='div-Po1b' style={{position:'relative',top:'460px',alignItems:'center',fontSize:'12px',color:'white',left:'20px'}}>
              <div><span>63 units capacity</span> <span></span><span> | </span>
              <span> len-4843mm | wid-2273mm </span><span>|</span>
              <span> Horsepower: 544 to 566 kW</span>
          </div>
          </div>
        <span className='Pospan'>
        
        </span>
        </div>
         
          </div>
          </div>
      
          <div className='Posection'>
          <div className='Pocontent'>
          <div>
              <video autoPlay loop muted>
                  <source src={FerrariVideo} type='video/mp4' />
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

          <div className='Posection'>
          <div className='Pocontent'>
          <div className='div-Po3a' style={{position:'relative',alignItems:'center',fontSize:'22px',color:'white',left:'400px',top:'250px',display:'flex',flexDirection:'column'}}>
          <span >HD Display</span><br />
              <span>WIFI - CONECTION</span><br />
              <span>AMAZING MUSIC SYSTEM</span>
              </div>
              <div className='div-Po3b' style={{position:'relative',top:'330px',alignItems:'center',fontSize:'22px',color:'black',fontFamily:'Poppins,sans-serif'}}>
                <p>Interior fabric materials include carbon fibers found on the cockpit, doors, seats, and console that match very nicely with the leather and Alcantara upholstery. Do not forget about the little details! Take note of the cross-stitching located across the dashboard of your car.
                  </p></div>
              </div>
            </div>
            


          <div className='Posection'>
          <div className='Pocontent'>

          <div><span style={{color:'black',fontSize:'1.6em',position:'relative',top:'10px'}}>Designed for Efficiency</span>
          <span className='Pollist' style={{ color:'black', position:'relative',left:'-380px',top:'0px'}}><ol> 
          <li>ARAI Mileage - 9.0kmpl</li>
          <li> City Mileage - 3.22 kmpl</li>
          <li> Fuel Type - Petrol</li>
          <li>Engine Displacement (cc) - 3855</li>
          <li> Max Power (bhp@rpm) - 591.79bhp@7500rpm</li> </ol>
          </span>
          <span  className='Porlist' style={{ color:'black', position:'relative',left:'380px',top:'-100px'}} ><ol>
          <li> Max Torque (nm@rpm) -760Nm@3000-5250rpm</li>
          <li> Seating Capacity- 4</li>
          <li> TransmissionType - Automatic</li>
          <li> Boot Space (Litres) - 110</li>
          <li> Fuel Tank Capacity - 81</li>
          <li> Body Type - Convertable</li>
                                         </ol> </span></div>
          </div></div>
          <div className='Posection'>
          <div className='Pocontent'>
          <div><Footer /></div>
          </div></div>
      
      </div>
      </div>
     
  );
    
}

export default Portofino;

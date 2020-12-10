import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './Huracan.css'
import HuracanVideo from './video/Huracan2cut.mp4'


function Huracan() {
    return (
      <div className='Humain-div'>
      <div className='Hucontainer'>
          <div className='Husection'>
          <div className='Hucontent'>
          <nav>
            <div className='Hudiv-header'>
               
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <NavLink to='/Home'><div className='Hunav-home'>
                        <span>Home</span></div> 
                    </NavLink>
                    
                    <NavLink to='/Aventador'>
                      <div className='Hunav-lambo'>
                         <div className='Hulambo'>
                          Aventador
                         </div>
                      </div>
                    </NavLink>
                    <NavLink to='/Huracan'>
                      <div className='Hunav-tesla'>
                          <span>Huracan</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Urus'>
                      <div className='Hunav-ferari'>
                          <span>Urus</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Concept'>
                      <div className='Hunav-benz'>
                          <span>Concept</span>
                      </div>
                    </NavLink>
                    
                </div>
            </div>
        </nav>
      <div>
          <div className='div-Hur1a' style={{position:'relative',top:'450px',alignItems:'center',fontSize:'22px',color:'white'}}>
              <div><span> 200 mph (320 km/h ) </span><span> |</span>
              <span> 2 seater </span><span> |</span>
              <span> 8 km/l </span>
          </div>
          </div>
          <div className='div-Hur1b' style={{position:'relative',top:'460px',alignItems:'center',fontSize:'12px',color:'white',left:'20px'}}>
              <div><span>83 L fuel tank capacity</span> <span></span><span> | </span>
              <span> len-4780mm | wid-2030mm </span><span>|</span>
              <span> Horsepower: 449 to 471 kW</span>
          </div>
          </div>
        <span className='Huspan'>
        
        </span>
        </div>
         
          </div>
          </div>
      
          <div className='Husection'>
          <div className='Hucontent'>
          <div>
              <video autoPlay loop muted>
                  <source src={HuracanVideo} type='video/mp4' />
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

          <div className='Husection'>
          <div className='Hucontent'>
          <div className='div-aven3a' style={{position:'relative',alignItems:'center',fontSize:'22px',color:'white',left:'450px',top:'150px',display:'flex',flexDirection:'column'}}>
              <span >HD Display</span><br />
              <span>WIFI - CONECTION</span><br />
              <span>AMAZING MUSIC SYSTEM</span>
              </div>
              <div className='div-aven3b' style={{position:'relative',top:'330px',alignItems:'center',fontSize:'22px',color:'black',fontFamily:'Poppins,sans-serif'}}>
                <p>Interior fabric materials include carbon fibers found on the cockpit, doors, seats, and console that match very nicely with the leather and Alcantara upholstery. Do not forget about the little details! Take note of the cross-stitching located across the dashboard of your car.
                  </p></div>
              </div>
            </div>
            

          <div className='Husection'>
          <div className='Hucontent'>

          <div><span style={{color:'white',fontSize:'1.6em',position:'relative',top:'10px'}}>Designed for Efficiency</span>
          <span className='Hllist' style={{ color:'white', position:'relative',left:'-380px',top:'0px'}}><ol> 
          <li>ARAI Mileage - 11.24 kmpl</li>
          <li> City Mileage - 7.19 kmpl</li>
          <li> Fuel Type - Petrol</li>
          <li>Engine Displacement (cc) - 5204</li>
          <li> Max Power (bhp@rpm) - 572.6bhp@8000rpm</li> </ol>
          </span>
          <span  className='Hrlist' style={{ color:'white', position:'relative',left:'380px',top:'240px'}} ><ol>
          <li> Max Torque (nm@rpm) - 540Nm@6500rpm</li>
          <li> Seating Capacity- 2</li>
          <li> TransmissionType - Automatic</li>
          <li> Boot Space (Litres) - 110</li>
          <li> Fuel Tank Capacity - 90</li>
          <li> Body Type - Coupe</li>
          </ol></span></div>
          </div></div>
          <div className='Husection'>
          <div className='Hucontent'>
          <div><Footer /></div>
          </div></div>
      
      </div>
      </div>
     
  );
    
}

export default Huracan;

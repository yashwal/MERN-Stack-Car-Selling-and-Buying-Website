import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './Aventador.css'
import LamboVideo from './video/lambo2cut.mp4'

function Aventador() {
    return (
      <div className='Avmain-div'>
      <div className='Avcontainer'>
          <div className='Avsection'>
          <div className='Avcontent'>
          <nav>
            <div className='Avdiv-header'>
               
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <NavLink to='/Home'><div className='Avnav-home'>
                        <span>Home</span></div> 
                    </NavLink>
                    
                    <NavLink to='/Aventador'>
                      <div className='Avnav-lambo'>
                         <div className='Avlambo'>
                          Aventador
                         </div>
                      </div>
                    </NavLink>
                    <NavLink to='/Huracan'>
                      <div className='Avnav-tesla'>
                          <span>Huracan</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Urus'>
                      <div className='Avnav-ferari'>
                          <span>Urus</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Concept'>
                      <div className='Avnav-benz'>
                          <span>Concept</span>
                      </div>
                    </NavLink>
                    
                </div>
            </div>
        </nav>
      <div>
          <div className='div-aven1a' style={{position:'relative',top:'450px',alignItems:'center',fontSize:'22px',color:'white'}}>
              <div><span> 217 mph (349 km/h) </span><span> |</span>
              <span> 2 seater </span><span> |</span>
              <span> 5-6 km/l </span>
          </div>
          </div>
          <div className='div-aven1b' style={{position:'relative',top:'460px',alignItems:'center',fontSize:'12px',color:'white',left:'20px'}}>
              <div><span>85 L fuel tank capacity</span> <span></span><span> | </span>
              <span> len-4843mm | wid-2273mm </span><span>|</span>
              <span> Horsepower: 544 to 566 kW</span>
          </div>
          </div>
        <span className='Avspan'>
        
        </span>
        </div>
         
          </div>
          </div>
      
          <div className='Avsection'>
          <div className='Avcontent'>
          <div>
              <video autoPlay loop muted>
                  <source src={LamboVideo} type='video/mp4' />
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

          <div className='Avsection'>
          <div className='Avcontent'>
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
            


          <div className='Avsection'>
          <div className='Avcontent'>

          <div><span style={{color:'white',fontSize:'1.6em',position:'relative',top:'10px'}}>Designed for Efficiency</span>
          <span className='llist' style={{ color:'white', position:'relative',left:'-380px',top:'0px'}}><ol> 
          <li>ARAI Mileage - 7.69kmpl</li>
          <li> City Mileage - 3.22 kmpl</li>
          <li> Fuel Type - Petrol</li>
          <li>Engine Displacement (cc) - 6498</li>
          <li> Max Power (bhp@rpm) - 770bhp@8500rpm</li> </ol>
          </span>
          <span  className='rlist' style={{ color:'white', position:'relative',left:'380px',top:'240px'}} ><ol>
          <li> Max Torque (nm@rpm) - 720Nm@6750rpm</li>
          <li> Seating Capacity- 2</li>
          <li> TransmissionType - Automatic</li>
          <li> Boot Space (Litres) - 110</li>
          <li> Fuel Tank Capacity - 90</li>
          <li> Body Type - Coupe</li>
                                         </ol> </span></div>
          </div></div>
          <div className='Avsection'>
          <div className='Avcontent'>
          <div><Footer /></div>
          </div></div>
      
      </div>
      </div>
     
  );
    
}

export default Aventador;












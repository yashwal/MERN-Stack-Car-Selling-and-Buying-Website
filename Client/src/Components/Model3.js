import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './Model3.css'
import TeslaVideo from './video/tesla3.mp4'


function Model3() {
    return (
      <div className='m3main-div'>
      <div className='m3container'>
          <div className='m3section'>
          <div className='m3content'>
          <nav>
            <div className='m3div-header'>
               
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <NavLink to='/Home'><div className='m3nav-home'>
                        <span>Home</span></div> 
                    </NavLink>
                    
                    <NavLink to='/Model3'>
                      <div className='m3nav-lambo'>
                         <div className='m3lambo'>
                          Model 3
                         </div>
                      </div>
                    </NavLink>
                    <NavLink to='/ModelS'>
                      <div className='m3nav-tesla'>
                          <span>Model S</span>
                      </div>
                    </NavLink>
                    <NavLink to='/ModelX'>
                      <div className='m3nav-ferari'>
                          <span>Model X</span>
                      </div>
                    </NavLink>
                    <NavLink to='/ModelY'>
                      <div className='m3nav-benz'>
                          <span>Model Y</span>
                      </div>
                    </NavLink>
                    
                </div>
            </div>
        </nav>
      <div>
          <div className='div-m31a' style={{position:'relative',top:'450px',alignItems:'center',fontSize:'22px',color:'white'}}>
              <div><span> From 0-60 mph </span><span> |</span>
              <span> 28cu ft </span><span> |</span>
              <span>402 mi</span>
          </div>
          </div>
          <div className='div-m31b' style={{position:'relative',top:'460px',alignItems:'center',fontSize:'12px',color:'white',left:'20px'}}>
              <div><span>In 2.3 sec</span> <span></span><span> | </span>
              <span>Best in Class Storage</span><span>|</span>
              <span> Range (EPA est.)</span>
          </div>
          </div>
        <span className='m3span'>
        
        </span>
        </div>
         
          </div>
          </div>
      
          <div className='m3section'>
          <div className='m3content'>
          <div>
              <video autoPlay loop muted>
                  <source src={TeslaVideo} type='video/mp4' />
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

          <div className='m3section'>
          <div className='m3content'>
          <div className='div-m33a' style={{position:'relative',alignItems:'center',fontSize:'22px',color:'white',left:'400px',top:'250px',display:'flex',flexDirection:'column'}}>
              <span >Displays - 15" Center Touchscreen</span>
              <span>Over-the-air Software Updates</span>
              <span>Battery & Drive Unit - 8 years or 120,000 mi</span>
              </div>
              <div className='div-m33b' style={{position:'relative',top:'360px',alignItems:'center',fontSize:'22px',color:'black',fontFamily:'Poppins,sans-serif'}}>
                <h1>Built Around the Driver</h1>
                <p>The inside of Model 3 is unlike any other car. 
                  You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat.
                  </p></div>
              </div>
            </div>
            


          <div className='m3section'>
          <div className='m3content'>

          <div><span style={{color:'black',fontSize:'1.6em',position:'relative',top:'10px'}}>Designed for Efficiency</span>
          <span className='m3llist' style={{ color:'black', position:'relative',left:'-380px',top:'0px'}}><ol> 
          <li>Battery - Long Range</li>
          <li>Weight - 4,065 lbs</li>
          <li>Acceleration - 3.1s 0-60 mph</li>
          <li>Range - 315 miles</li>
          <li> Drive - Dual Motor All-Wheel Drive</li> </ol>
          </span>
          <span  className='m3rlist' style={{ color:'black', position:'relative',left:'380px',top:'-100px'}} ><ol>
          <li> Seating - 5 Adults</li>
          <li> Wheels - 20"</li>
          <li> Weight - 4,065 lbs</li>
          <li> Cargo - 15 cu ft</li>
          <li> Supercharging Max/ Payment Type - 250 kW max; Pay Per Use</li>
          <li>Onboard Charger Max - 11.5 kW max (48A)</li>
                                         </ol> </span></div>
          </div></div>
          <div className='m3section'>
          <div className='m3content'>
          <div><Footer /></div>
          </div></div>


         






      
      </div>
      </div>
     
  );
    
}

export default Model3;

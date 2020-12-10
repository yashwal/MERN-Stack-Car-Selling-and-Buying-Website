import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './Tesla.css'
import Typical from 'react-typical'
import TesNavigation from'./TesNavigation'

function Tesla() {
    return (
      <div className='Tmain-div'>
      <div className='Tcontainer'>
          <div className='Tsection'>
          <div className='Tcontent'>
              
          <nav>
            <div className='Tdiv-header'>
               
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <NavLink to='/Home'><div className='Tnav-home'>
                        <span>Home</span></div> 
                    </NavLink>
                    <NavLink to='/Model3'>
                      <div className='Tnav-lambo'>
                         <div className='Tlambo'>
                          Model3
                         </div>
                      </div>
                    </NavLink>
                    <NavLink to='/ModelS'>
                      <div className='Tnav-tesla'>
                          <span>ModelS</span>
                      </div>
                    </NavLink>
                    <NavLink to='/ModelX'>
                      <div className='Tnav-ferari'>
                          <span>ModelX</span>
                      </div>
                    </NavLink>
                    <NavLink to='/ModelY'>
                      <div className='Tnav-benz'>
                          <span>ModelY</span>
                      </div>
                    </NavLink>
             
                </div>
            </div>
        </nav>

    
      <div> 
      <div className='typing'>
       <Typical
        steps={['Tesla', 2000, 'Tesla Model 3', 3000]}
        loop={Infinity}
        wrapper="p"
      />
      <Typical
        steps={['Want to', 2000, 'Want to Explore ?', 3000]}
        loop={Infinity}
        wrapper="p"
      />
      </div>


<div className='Hcontent'>          
  <button><Link to="/Model3">Click Here</Link></button>
</div>
        
        </div>
        </div></div>



      
<div className='Tsection'>
  <div className='Tcontent'>
    <TesNavigation />
    <div> <div className='typing'>
       <Typical
        steps={['Tesla', 2000, 'Tesla Model S', 3000]}
        loop={Infinity}
        wrapper="p"
      />
      <Typical
        steps={['Want to', 2000, 'Want to Explore ?', 3000]}
        loop={Infinity}
        wrapper="p"
      />
      </div>
<div className='Hcontent'>          
  <button><Link to="/Models">Click Here</Link></button>
</div></div>
          </div>
          </div>


          <div className='Tsection'>
          <div className='Tcontent'>
          <TesNavigation />

          <div> <div className='typing'>
       <Typical
        steps={['Tesla', 2000, 'Tesla Model X', 3000]}
        loop={Infinity}
        wrapper="p"
      />
      <Typical
        steps={['Want to', 2000, 'Want to Explore ?', 3000]}
        loop={Infinity}
        wrapper="p"
      />
      </div>
<div className='Hcontent'>          
  <button><Link to="/Modelx">Click Here</Link></button>
</div></div>
          </div></div>


          <div className='Tsection'>
          <div className='Tcontent'>
    <TesNavigation />

          <div> <div className='typing'>
       <Typical
        steps={['Tesla', 2000, 'Tesla Model Y', 3000]}
        loop={Infinity}
        wrapper="p"
      />
      <Typical
        steps={['Want to', 2000, 'Want to Explore ?', 3000]}
        loop={Infinity}
        wrapper="p"
      />
      </div>
<div className='Hcontent'>          
  <button><Link to="/Modely">Click Here</Link></button>
</div></div>
          </div></div>
          <div className='Tsection'>
          <div className='Tcontent'>
          <div><Footer /></div>
          </div></div>
      
      </div>
      </div>
  );
    
}

export default Tesla;












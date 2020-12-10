import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './Ferrari.css'
import Typical from 'react-typical'
import FerNavigation from './FerNavigation'


function Ferrari() {
    return (
      <div className='Femain-div'>
      <div className='Fecontainer'>
          <div className='Fesection'>
          <div className='Fecontent'>
              
          <nav>
            <div className='Fediv-header'>
               
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <NavLink to='/Home'><div className='Fenav-home'>
                        <span>Home</span></div> 
                    </NavLink>
                    <NavLink to='/Portofino'>
                      <div className='Fenav-lambo'>
                         <div className='Felambo'>
                          Portofino
                         </div>
                      </div>
                    </NavLink>
                    <NavLink to='/812'>
                      <div className='Fenav-tesla'>
                          <span>812</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Roma'>
                      <div className='Fenav-ferari'>
                          <span>Roma</span>
                      </div>
                    </NavLink>
                    <NavLink to='/GTC4'>
                      <div className='Fenav-benz'>
                          <span>GTC4</span>
                      </div>
                    </NavLink>
             
                </div>
            </div>
        </nav>
      <div>
      <div className='typing'>
       <Typical
        steps={['Ferrari', 2000, 'Ferrari Portofino', 3000]}
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
  <button><Link to="/Portofino">Click Here</Link></button>
</div>
        </div>
         
          </div>
          </div>

      
          <div className='Fesection'>
          <div className='Fecontent'>
            <FerNavigation/>
          <div> <div className='typing'>
       <Typical
        steps={['Ferrari', 2000, 'Ferrari 812', 3000]}
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
  <button><Link to="/812">Click Here</Link></button>
</div></div>
          </div>
          </div>


          <div className='Fesection'>
          <div className='Fecontent'>
            <FerNavigation/>
          <div> <div className='typing'>
       <Typical
        steps={['Ferrari', 2000, 'Ferrari Roma', 3000]}
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
  <button><Link to="/Roma">Click Here</Link></button>
</div></div>
          </div></div>


          <div className='Fesection'>
          <div className='Fecontent'>
            <FerNavigation/>
          <div> <div className='typing'>
       <Typical
        steps={['Ferrari', 2000, 'Ferrari GTC 4', 3000]}
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
  <button><Link to="/Gtc4">Click Here</Link></button>
</div></div>
          </div></div>
          <div className='Fesection'>
          <div className='Fecontent'>
          <div><Footer /></div>
          </div></div>
      
      </div>
      </div>
  );
    
}

export default Ferrari;


import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './Benz.css'
import Typical from 'react-typical'
import BenNavigation from './BenNavigation'
import Navigation from './Navlink';

function Benz() {
    return (
      <div className='Bemain-div'>
      <div className='Becontainer'>
          <div className='Besection'>
          <div className='Becontent'>
              
          <nav>
            <div className='Bediv-header'>
               
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <NavLink to='/Home'><div className='Benav-home'>
                        <span>Home</span></div> 
                    </NavLink>
                    <NavLink to='/Aclass'>
                      <div className='Benav-lambo'>
                         <div className='Belambo'>
                          A-Class
                         </div>
                      </div>
                    </NavLink>
                    <NavLink to='/Cclass'>
                      <div className='Benav-tesla'>
                          <span>C-Class</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Gclass'>
                      <div className='Benav-ferari'>
                          <span>G-Class</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Sclass'>
                      <div className='Benav-benz'>
                        <span>S-Class</span>
                  </div>
                    </NavLink>
                </div>
            </div>
        </nav>
      <div>
      <div className='typing'>
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
</div>
        </div>
         
          </div>
          </div>

      
          <div className='Besection'>
          <div className='Becontent'>
            <BenNavigation/>
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
          </div>
          </div>


          <div className='Besection'>
          <div className='Becontent'>
          <BenNavigation/>

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

          <div className='Besection'>
          <div className='Becontent'>
          <BenNavigation/>

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
          <div className='Besection'>
          <div className='Becontent'>
          <div><Footer /></div>
          </div></div>
      
      </div>
      </div>
  );
    
}

export default Benz;


import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './Lamborgini.css'
import Typical from 'react-typical'
import LamNavigation from './LamNavlink'


function Lamborgini() {
    return (
      <div className='Lammain-div'>
      <div className='Lamcontainer'>

          <div className='Lamsection'>
          <div className='Lamcontent'>
              
          <nav>
            <div className='Lamdiv-header'>
               
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <NavLink to='/Home'><div className='Lamnav-home'>
                        <span>Home</span></div> 
                    </NavLink>
                    <NavLink to='/Aventador'>
                      <div className='Lamnav-lambo'>
                         <div className='Lamlambo'>
                          Aventador
                         </div>
                      </div>
                    </NavLink>
                    <NavLink to='/Huracan'>
                      <div className='Lamnav-tesla'>
                          <span>Huracan</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Urus'>
                      <div className='Lamnav-ferari'>
                          <span>Urus</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Concept'>
                      <div className='Lamnav-benz'>
                          <span>Concept</span>
                      </div>
                    </NavLink>
             
                </div>
            </div>
        </nav>
      <div className='typing'>
       <Typical
        steps={['Lamborgini', 2000, 'Lamborgini Aventador', 3000]}
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
  <button><Link to="/Aventador">Click Here</Link></button>
</div>
        
         
 </div>
    </div>

      


          <div className='Lamsection'>
          <div className='Lamcontent'>
            <div><LamNavigation /></div>
          <div>
          <div className='typing'>
       <Typical
        steps={['Lamborgini', 2000, 'Lamborgini Huracan', 3000]}
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
  <button><Link to="/Huracan">Click Here</Link></button>
</div></div>
          </div>
          </div>


          <div className='Lamsection'>
          <div className='Lamcontent'>
          <div><LamNavigation /></div>
          <div><div className='typing'>
       <Typical
        steps={['Lamborgini', 2000, 'Lamborgini Urus', 3000]}
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
  <button><Link to="/urus">Click Here</Link></button>
</div></div>
          </div></div>


          <div className='Lamsection'>
          <div className='Lamcontent'>
          <div><LamNavigation /></div>
          <div><div className='typing'>
       <Typical
        steps={['Lamborgini', 2000, 'Lamborgini Concept', 3000]}
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
  <button><Link to="/Concept">Click Here</Link></button>
</div></div>
          </div></div>
          <div className='Lamsection'>
          <div className='Lamcontent'>
          <div><Footer /></div>
          </div></div>
      
      </div>
      </div>
  );
    
}

export default Lamborgini;

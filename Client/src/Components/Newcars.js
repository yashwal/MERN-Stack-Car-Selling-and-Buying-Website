import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './Newcars.css'
import Navigation from './Navlink'

function Newcars() {
    return (
      <div className='Nmain-div'>
      <div className='Ncontainer'>
          <div className='Nsection'>
          <div className='Ncontent'>
          <nav>
            <div className='Ndiv-header'>
               
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <NavLink to='/Home'><div className='Nnav-home'>
                        <span>Home</span></div> 
                    </NavLink>
                    
                    <NavLink to='/Lamborgini'>
                      <div className='Nnav-lambo'>
                         <div className='Nlambo'>
                          Lamborgini
                         </div>
                      </div>
                    </NavLink>
                    <NavLink to='/Tesla'>
                      <div className='Nnav-tesla'>
                          <span>Tesla</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Ferrari'>
                      <div className='Nnav-ferari'>
                          <span>Ferrari</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Benz'>
                      <div className='Nnav-benz'>
                          <span>Benz</span>
                      </div>
                    </NavLink>
                    
                </div>
            </div>
        </nav>
      <div className='indiv'>
      <div class="slider-wrapper">
     
     <div class="slider">
          <div class="slider-text1">Lamborgini</div>
          <div class="slider-text2">World's Largest company</div>
          <div class="slider-text3">Very good company</div>
     </div>


     <div class="header_content">
    
            <button><Link to="/lamborgini">Veiw Models</Link></button>
        </div>

</div>
      </div>
         
          </div>
          </div>

          <div className='Nsection'>
          <div className='Ncontent'>
            <div><Navigation/></div>

          <div> <div class="slider-wrapper">
                   
     <div class="slider">
          <div class="slider-text1">Tesla</div>
          <div class="slider-text2">World's Largest company</div>
          <div class="slider-text3">Very good company</div>
     </div>

     <div class="header_content">
    
    <button><Link to="/Tesla">Veiw Models</Link></button>
</div>


</div></div>
          </div>
          </div>


          <div className='Nsection'>
          <div className='Ncontent'>

          <div><Navigation/></div>
          <div> <div class="slider-wrapper">
     
     <div class="slider">
          <div class="slider-text1">Ferrari</div>
          <div class="slider-text2">World's Largest company</div>
          <div class="slider-text3">Very good company</div>
     </div>

     <div class="header_content">
    
    <button><Link to="/Ferrari">Veiw Models</Link></button>
</div>


</div></div>
          </div></div>


          <div className='Nsection'>
          <div className='Ncontent'>

          <div><Navigation/></div>
          <div> <div class="slider-wrapper">
     
     <div class="slider">
          <div class="slider-text1">Benz</div>
          <div class="slider-text2">World's Largest company</div>
          <div class="slider-text3">Very good company</div>
     </div>

     <div class="header_content">
    
    <button><Link to="/benz">Veiw Models</Link></button>
</div>


</div></div>
          </div></div>
          <div className='Nsection'>
          <div className='Ncontent'>
          <div><Footer /></div>
          </div></div>
      
      </div>
      </div>
  );
    
}

export default Newcars;





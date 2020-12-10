import React from 'react';
import {NavLink,Link} from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return(
            <div>
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
            </div>
            )
    }
    
}

export default Navigation;
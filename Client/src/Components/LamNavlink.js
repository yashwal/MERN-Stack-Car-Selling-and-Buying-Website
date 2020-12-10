import React from 'react';
import {NavLink,Link} from 'react-router-dom';



class LamNavigation extends React.Component {
    render() {
        return(
            <div>
                 <nav>
            <div className='Ndiv-header'>
               
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <NavLink to='/Home'><div className='Nnav-home'>
                        <span>Home</span></div> 
                    </NavLink>
                    
                    <NavLink to='/Aventador'>
                      <div className='Nnav-lambo'>
                         <div className='Nlambo'>
                          Aventador
                         </div>
                      </div>
                    </NavLink>
                    <NavLink to='/Huracan'>
                      <div className='Nnav-tesla'>
                          <span>Huracan</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Urus'>
                      <div className='Nnav-ferari'>
                          <span>Urus</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Concept'>
                      <div className='Nnav-benz'>
                          <span>Concept</span>
                      </div>
                    </NavLink>
                    
                    
                </div>
            </div>
        </nav>
            </div>
            )
    }
    
}

export default LamNavigation;
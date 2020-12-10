import React from 'react';
import{NavLink,Link} from 'react-router-dom'

class BenNavigation extends React.Component {
    render(){
        return(
            <div>        
          <nav>
            <div className='Fediv-header'>
               
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <NavLink to='/Home'><div className='Fenav-home'>
                        <span>Home</span></div> 
                    </NavLink>
                    <NavLink to='/Aclass'>
                      <div className='Fenav-lambo'>
                         <div className='Felambo'>
                          A-Class
                         </div>
                      </div>
                    </NavLink>
                    <NavLink to='/812'>
                      <div className='Fenav-tesla'>
                          <span>C-Class</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Roma'>
                      <div className='Fenav-ferari'>
                          <span>G-Class</span>
                      </div>
                    </NavLink>
                    <NavLink to='/GTC4'>
                      <div className='Fenav-benz'>
                          <span>S-Class</span>
                      </div>
                    </NavLink>
             
                </div>
            </div>
        </nav>
            </div>)
    }
}

export default BenNavigation;
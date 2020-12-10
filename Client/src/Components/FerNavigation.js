import React from 'react';
import{NavLink,Link} from 'react-router-dom'

class FerNavigation extends React.Component {
    render(){
        return(
            <div>        
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
            </div>)
    }
}

export default FerNavigation;
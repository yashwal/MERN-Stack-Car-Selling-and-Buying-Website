import React from 'react';
import ReactDOM from 'react-dom'
import {NavLink,Link} from 'react-router-dom';

class TesNavigation extends React.Component {
    render(){
        return(
            <div>
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
            </div>)
    }
}

export default TesNavigation;
import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/Home';
import CreateAcc from './pages/CreateAcc'
import Reset from './pages/ResetPass'
import Newcars from './Components/Newcars'
import Oldcars from './Components/Oldcars'
import Accessories from './Components/Accessories'
import Lamborgini from './Components/Lamborgini'
import Aventador from './Components/Aventador'
import Huracan from './Components/Huracan'
import Urus from './Components/Urus'
import Concept from './Components/Concept'
import ModelS from './Components/ModelS'
import ModelX from './Components/ModelX'
import ModelY from './Components/ModelY'
import Model3 from './Components/Model3'
import Tesla from './Components/Tesla'
import Ferrari from './Components/Ferrari';
import Portofino from './Components/Portofino';
import F812 from './Components/F812';
import Roma from './Components/Roma';
import GTC4 from './Components/GTC4';
import Benz from './Components/Benz';
import AClass from './Components/AClass';
import CClass from './Components/CClass';
import GClass from './Components/GClass';
import SClass from './Components/SClass';
import  cart from './Components/cart'
import  cmf from './Components/cmf'
import  cwb from './Components/cwb'
import  fm from './Components/fm'



class App extends React.Component {

  state = {
    islog:false
  }
  handlelogin = (islog) => this.setState({islog})
  render(){
    const {islog} = this.state;

  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/"  render ={() => !islog ? <Login isLogin = {this.handlelogin}/>:<Home/>}/>
        <Route path ='/login' component={Login}/>
        <Route path ='/Home' component={Home}/>
        <Route path ='/Acc' component={CreateAcc}/>
        <Route path ='/Reset' component={Reset}/>
        <Route path ='/Newcars' component={Newcars}/>
        <Route path ='/Oldcars' component={Oldcars}/>
        <Route path ='/Accessories' component={Accessories}/>
        <Route path='/Lamborgini' component={Lamborgini}/>
        <Route path='/Aventador' component={Aventador} />
        <Route path='/Huracan' component={Huracan} />
        <Route path='/Urus' component={Urus} />
        <Route path='/Concept' component={Concept} />
        <Route path='/ModelS' component={ModelS} />
        <Route path='/ModelX' component={ModelX} />
        <Route path='/ModelY' component={ModelY} />
        <Route path='/Model3' component={Model3} />
        <Route path='/Tesla' component={Tesla} />
        <Route path='/Ferrari' component={Ferrari} />
        <Route path='/Portofino' component={Portofino} />
        <Route path='/812' component={F812} />
        <Route path='/Roma' component={Roma} />
        <Route path='/GTC4' component={GTC4} />
        <Route path='/Benz' component={Benz} />
        <Route path='/AClass' component={AClass} />
        <Route path='/CClass' component={CClass} />
        <Route path='/GClass' component={GClass} />
        <Route path='/SClass' component={SClass} />
        <Route path='/cart' component ={cart}/>
        <Route path='/cmf' component ={cmf}/>
        <Route path='/cwb' component ={cwb}/>
        <Route path='/fm' component ={fm}/>




      </Switch>
      </BrowserRouter>
    </div>
  );
}
}
export default App;


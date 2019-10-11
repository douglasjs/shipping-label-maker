import React from 'react';
import './app.css';
// react route
import {  BrowserRouter, Route, Switch} from 'react-router-dom';
import { ShippingLabel } from './features/shipping-label-maker/shippingLabel';
import { Wizard } from './core/components/wizard';
import { withLogin } from './core/components/login';
import LoginForm from './core/components/login/loginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class App extends React.Component {


  constructor(props){
   
      super(props);
      this.state = {
          wizardContext : {
            from: {
              name: '', street: '', city: '',
              state: '',
              zip: ''
              }, 
            to: {
              name: '', street: '', city: '', state: '',
              zip: '' },
              weight: 0,
              shippingOption: 0, 
              shippingCost: 0},
            
          onComplete: false,
          currectStep : 1,
          loginState : false
      };

  }

  setAllState = (stateName, state, callback) =>{
   
      this.setState({...this.state, [stateName] : state}, callback);
  }


  render(){

    const Login = withLogin(LoginForm);

    return (
    
      <div className="jumbotron"> 


          {this.state.loginState ? 
              this.state.onComplete ? <ShippingLabel  highState={this.state}/> :
              <BrowserRouter>
                <Switch>
                  <Route exact={true} path="/" component={() => <Wizard highState={this.state} setAllState={this.setAllState}/>} />
                  <Route path="/print" component = {ShippingLabel} highState={this.state} />
                
                </Switch>
              </BrowserRouter> 
          : <Login highState={this.state} setAllState={this.setAllState}/>}
      </div>
    );

  }


}

export default App;

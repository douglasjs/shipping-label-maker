import React from 'react';
import './app.css';
// react route
import {  BrowserRouter, Route, Switch} from 'react-router-dom';
import { ShippingLabel } from './features/shipping-label-maker/shippingLabel';
import { Wizard } from './core/components/wizard';
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
            }, to: {
            name: '', street: '', city: '', state: '',
            zip: '' },
            weight: 0,
            shippingOption: 0 },
            
          onComplete: false
      };

  }


  render(){

    return (
    
      <div className="jumbotron"> 

          <BrowserRouter>
            <Switch>
              <Route exact={true} path="/" component={() => <Wizard wizardContext={this.state.wizardContext} />} />
              <Route path="/print" component = {ShippingLabel} />
            </Switch>
          </BrowserRouter>
      </div>
    );

  }


}

export default App;

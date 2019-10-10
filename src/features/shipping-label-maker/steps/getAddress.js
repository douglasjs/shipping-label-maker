import React from 'react';


export default class GetAddress extends React.Component{


    constructor(props){

        super(props);
        this.state={
            name:'', 
            street: '', 
            city: '',
            state: '',
            zip: ''
        };

    }

    changeHandler = (e, name) => {

        const value = e.target.value;
        this.setState({...this.state, [name] : value});
        
    }

    getAsync = (callback) => {

        const objName = this.props.currectStep === 1 ? 'to' :  'from';
        this.props.setAllState('wizardContext' , {...this.props.wizardContext, [objName] : {...this.state}}, callback );
    }

  

    render(){

        return (

    
            <div>
  
                      <p></p>
  
                      <h3>{this.props.header}</h3>
  
                      <p></p>
                 
                      <div className="form-group">
                          <label htmlFor="name">Full Name</label>
                          <input type="text" value={this.state.name}  onChange={e=>this.changeHandler(e, 'name')}  className="form-control" id="name" aria-describedby="name" placeholder="Please enter full name" />
                          <small id="nameHelp" className="form-text text-muted">Family name is at the last.</small>
                      </div>
      
                      <div className="form-group">
                          <label htmlFor="address">Address</label>
                          <input type="text" value={this.state.street}  onChange={e=>this.changeHandler(e, 'street')}   className="form-control" id="address" aria-describedby="address" placeholder="Please enter your address" />
                          <small id="addressHelp" className="form-text text-muted">We'll never share your address with anyone else.</small>
                      </div>
                  
                      <div className="row">
                          <div className="form-group col-sm-6">
                              <label htmlFor="city">City</label>
                              <input type="text"  value={this.state.city}  onChange={e=>this.changeHandler(e, 'city')}  className="form-control" id="city" aria-describedby="city" placeholder="Please enter your city" />
                          </div>
                          <div className="form-group col-sm-3">
                              <label htmlFor="state">State</label>
                              <input type="text" value={this.state.state}  onChange={e=>this.changeHandler(e, 'state')} className="form-control" id="state" aria-describedby="state" placeholder="Your state" />
                          </div>
                          <div className="form-group col-sm-3">
                              <label htmlFor="zip">Zip</label>
                              <input type="text" value={this.state.zip}  onChange={e=>this.changeHandler(e, 'zip')} className="form-control" id="zip" aria-describedby="zip" placeholder="Your Zip Code" />
                          </div>
                      </div>
  
                  </div>
     
                  
  
      );

    }
   


}
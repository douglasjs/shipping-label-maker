import React from 'react';


export class ShippingLabel extends React.Component{


    print = () => {
        window.document.body.innerHTML = window.document.getElementById('shippingTag').innerHTML;  
        window.print(); 
        window.location.reload();
    }


    render(){

   

        const {from, to }  = this.props.highState.wizardContext;

        return(

               <div id = 'shippingTag'>
                    <button className='no-print' onClick={this.print} >Print</button>
                    <div className = 'container formContainer'>
                          
                          <h2>Shipping Label</h2>
      
                          <p></p>
      
                            <div className="alert alert-primary" role="alert">
                                    <h3>Sender Information</h3>
                            </div>
                    
                            <div className="form-group">
                                <label>Full Name: </label>
                                <h3>  {from.name}</h3>
                            </div>
                            <div className="form-group">
                                <label>Street</label>
                                <h3>  {from.street}</h3>
                            </div>

                        
                            <div className="row">
                                <div className="form-group col-sm-6">
                                    <label>City</label>
                                    <h3> {from.city}</h3>
                                </div>
                                <div className="form-group col-sm-3">
                                    <label>State</label>
                                    <h3> {from.state}</h3>
                                </div>
                                <div className="form-group col-sm-3">
                                    <label>Zip</label>
                                    <h3> {from.zip}</h3>
                                </div>
                            </div>

                            <div className="alert alert-primary" role="alert">
                                <h3>Receiver Information</h3>
                            </div>
                    
                            <div className="form-group">
                                <label>Full Name: </label>
                                <h3>  {to.name}</h3>
                            </div>
                            <div className="form-group">
                                <label>Street</label>
                                <h3>  {to.street}</h3>
                            </div>

                        
                            <div className="row">
                                <div className="form-group col-sm-6">
                                    <label>City</label>
                                    <h3> {to.city}</h3>
                                </div>
                                <div className="form-group col-sm-3">
                                    <label>State</label>
                                    <h3> {to.state}</h3>
                                </div>
                                <div className="form-group col-sm-3">
                                    <label>Zip</label>
                                    <h3> {to.zip}</h3>
                                </div>
                            </div>
  
                    </div>
                    {from && window.print()}
                    
            </div>
    

        )

    }

}
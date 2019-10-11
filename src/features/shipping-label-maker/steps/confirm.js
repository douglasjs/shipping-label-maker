import React from 'react';

export default class Confirm extends React.Component{



    getAsync = (btnState, callback) => {

        this.props.setAllState('wizardContext' , {...this.props.wizardContext}, callback );
    }

   

    render(){

        const {from, to , weight, shippingOption, shippingCost}  = this.props.wizardContext;

        return(

            <div>
  
                <p></p>

                <h3 className='no-print'>{this.props.header}</h3>

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

                <div className="alert alert-primary" role="alert">
                    <h3>Shopping Information</h3>
                </div>
            
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label>Shipping Weight</label>
                        <h3> {weight}</h3>
                    </div>
                    <div className="form-group col-sm-3">
                        <label>Shipping Option</label>
                        <h3> {shippingOption === '1' ? 'Grand' : 'Priority'}</h3>
                    </div>
                    <div className="form-group col-sm-3">
                        <label>Shipping Cost </label>
                        <h3> $ {shippingCost}</h3>
                    </div>
                </div>

            </div>
        )
    }

}
import React from 'react';

export default class GetShippingOption extends React.Component{

    constructor(props){

        super(props);
        this.state ={
            shippingOption: '0',
            shippingCost : 0 
        }

    }

    shippingCost = (shippingOption, weight) =>{


        const shippingRate = 0.40; 
        const shippingCost = weight * shippingRate * (shippingOption === '1' ? 1 : 1.5);
        return shippingCost;
    }

    shippingOptionHandle = (e) =>{
        
        const optionValue = e.target.value;
        const weight = this.props.wizardContext.weight;
        const cost = this.shippingCost(optionValue, weight);
        this.setState({...this.state, shippingOption : optionValue, shippingCost :cost });
    }

    getAsync = (callback) => {


        this.props.setAllState('wizardContext' , {...this.props.wizardContext, 
                                                   shippingOption : this.state.shippingOption,
                                                   shippingCost:this.state.shippingCost  }, callback );
    }

    render(){

        console.log(this.state);
        return(

            <div>
                <p></p>
    
                <h3>{this.props.header}</h3>
    
                <p></p>
    
    
                <div className="form-group">
                       <label htmlFor="address">Shopping Option</label>
                       <select className="form-control" id="shippingOption" onChange={this.shippingOptionHandle} value ={this.state.shippingOption}>
                            <option value="0">Please Choose one option ....</option>
                            <option value="1">Grand</option>
                            <option value="2">Priority</option>
                        </select>
                       <small id="shippingOptionHelp" className="form-text text-muted">The cost will change by the shopping optine.</small>
                </div>
    
            </div>
    
        )

    }


}
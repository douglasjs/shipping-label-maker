import React from 'react';

export default class GetShippingOption extends React.Component{

    constructor(props){

        super(props);
        this.state ={
            shippingOption: '0',
            shippingCost : 0 
        }

    }

    componentDidMount(){
        const shippingOption = this.props.wizardContext.shippingOption;
        const shippingCost = this.props.wizardContext.shippingCost;
        this.setState({  shippingOption, shippingCost });
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
        this.setState({...this.state, shippingOption : optionValue, shippingCost :cost, invalidate : '' });
    }

    getAsync = (btnState, callback) => {

        if(this.checkValue() || btnState==='pre' ){
            this.props.setAllState('wizardContext' , {...this.props.wizardContext, 
                                                   shippingOption : this.state.shippingOption,
                                                   shippingCost:this.state.shippingCost  }, callback );
        }else{
            this.setState({...this.state, invalidate : 'is-invalid'});
        }
    }
    checkValue = () =>{

        return this.state.shippingOption === 0 ? false : true;
    }

    render(){

  
        return(

            <div>
                <p></p>
    
                <h3>{this.props.header}</h3>
    
                <p></p>
    
    
                <div className="form-group">
                       <label htmlFor="address">Shopping Option</label>
                       <select className={`form-control ${this.state.invalidate}`} id="shippingOption" onChange={this.shippingOptionHandle} value ={this.state.shippingOption}>
                            <option value="0">Please Choose one option ....</option>
                            <option value="1">Grand</option>
                            <option value="2">Priority</option>
                        </select>
                       <div className="invalid-feedback">Please choose one of options.</div>
                       <small id="shippingOptionHelp" className="form-text text-muted">The cost will change by the shopping optine.</small>
                </div>
    
            </div>
    
        )

    }


}
import React from 'react';

export default class GetWeight extends React.Component{

    constructor(props){

        super(props);
        this.state ={
            weight: 0, 
        }

    }

    componentDidMount(){
        const weight = this.props.wizardContext.weight;
        this.setState({  weight });
    }

    weightHandle = (e) =>{
        this.setState({...this.state, weight : e.target.value, invalidate : ''});
    }

    checkValue = () =>{
        return this.state.weight > 0 ? true : false;
    }

    getAsync = (btnState, callback) => {
        if(this.checkValue() || btnState==='pre' ){
            this.props.setAllState('wizardContext' , {...this.props.wizardContext, weight : this.state.weight}, callback );
        }else{
            this.setState({...this.state, invalidate : 'is-invalid'});
        }
    }

    render(){

        return(

            <div>
                <p></p>
    
                <h3>{this.props.header}</h3>
    
                <p></p>
    
    
                <div className="form-group">
                       <label htmlFor="address">Shopping weight</label>
                       <input type="number" onChange={this.weightHandle} value ={this.state.weight} className={`form-control ${this.state.invalidate}`} id="weight" aria-describedby="weight" placeholder="Please enter your weight" />
                       <div className="invalid-feedback">Please be larger than 0.</div>
                       <small id="weightHelp" className="form-text text-muted">The cost will change by the weight.</small>
                </div>
    
            </div>
    
        )

    }


}
import React from 'react';

export default class GetWeight extends React.Component{

    constructor(props){

        super(props);
        this.state ={
            weight: 0, 
        }

    }


    weightHandle = (e) =>{
        this.setState({...this.state, weight : e.target.value});
    }

    getAsync = (callback) => {


        this.props.setAllState('wizardContext' , {...this.props.wizardContext, weight : this.state.weight}, callback );
    }

    render(){

        return(

            <div>
                <p></p>
    
                <h3>{this.props.header}</h3>
    
                <p></p>
    
    
                <div className="form-group">
                       <label htmlFor="address">Shopping weight</label>
                       <input type="number" onChange={this.weightHandle} value ={this.state.weight} className="form-control" id="weight" aria-describedby="weight" placeholder="Please enter your weight" />
                       <small id="weightHelp" className="form-text text-muted">The cost will change by the weight.</small>
                </div>
    
            </div>
    
        )

    }


}
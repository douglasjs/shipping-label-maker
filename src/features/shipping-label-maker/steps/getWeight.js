import React from 'react';

export default function GetWeight(props){

    return(

        <div>
            <p></p>

            <h3>Input shopping weight</h3>

            <p></p>

            <div>
                <p>Estimate Cost : {props.weightCost}</p>
            </div>

            <div className="form-group">
                   <label htmlFor="address">Shopping weight</label>
                   <input type="number" onChange={props.weightCount} className="form-control" id="weight" aria-describedby="weight" placeholder="Please enter your weight" />
                   <small id="weightHelp" className="form-text text-muted">The cost will change by the weight.</small>
            </div>

        </div>

    )

}
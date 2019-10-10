import React from 'react';


export function Wizard(props) {
   

    const header = ()=>{

        return 'Enter the recevier\'s address:';
    }

   

    //console.log(props);
    const pStyle = {
        width: '25%',
        widthText: '25%'
    };
      

    return (

    
          <div className="jumbotron">

               

                

                <div className = 'container border rounded'>
                        
                    <h2>Shipping Label Maker</h2>

                    <p></p>

                    <div className="progress bg-white">
                        <div className="progress-bar" role="progressbar" style={pStyle} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{pStyle.widthText} </div>
                    </div>

                    <p></p>

                    <h3>{header()}</h3>

                    <p></p>
               
                    <div className="form-group">
                        <label htmlFor="nameHelp">Full Name</label>
                        <input type="text" className="form-control" id="nameHelp" aria-describedby="nameHelp" placeholder="Please enter full name" />
                        <small id="nameHelp" className="form-text text-muted">Family name is in last.</small>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="addressHelp">Address</label>
                        <input type="text" className="form-control" id="addressHelp" aria-describedby="addressHelp" placeholder="Please enter your address" />
                        <small id="addressHelp" className="form-text text-muted">We'll never share your address with anyone else.</small>
                    </div>
                
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="cityHelp">City</label>
                            <input type="text" className="form-control" id="cityHelp" aria-describedby="cityHelp" placeholder="Please enter your city" />
                        </div>
                        <div className="form-group col-sm-3">
                            <label htmlFor="stateHelp">State</label>
                            <input type="text" className="form-control" id="stateHelp" aria-describedby="stateHelp" placeholder="Your state" />
                        </div>
                        <div className="form-group col-sm-3">
                            <label htmlFor="zipHelp">Zip</label>
                            <input type="text" className="form-control" id="zipHelp" aria-describedby="zipHelp" placeholder="Your Zip Code" />
                        </div>
                    </div>
                    <div class="btn-group" role="group" >
                        
                        <button type="button" className="btn btn-primary">Previous</button>
                        <button type="button" className="btn btn-primary">Next</button>
                        
                    </div>
                </div>
   
                

          </div>

    );
  }

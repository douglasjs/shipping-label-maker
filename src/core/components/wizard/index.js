import React from 'react';
import './index.css';

import GetAddress from '../../../features/shipping-label-maker/steps/getAddress';
//import GetWeight from '../../../features/shipping-label-maker/steps/getWeight';

export function Wizard(props) {
   

    const header = ()=>{
        return 'Enter the recevier\'s address:';
    }

   
    const pStyle = {
        width: '25%',
        widthText: '25%'
    };

      

    return (

    
          <div>

                <div className = 'container formContainer'>
                        
                    <h2>Shipping Label Maker</h2>

                    <p></p>

                    <div className="progress bg-white">
                        <div className="progress-bar" role="progressbar" style={pStyle} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{pStyle.widthText} </div>
                    </div>

                    <p></p>

                    <GetAddress header= {header}/>


                    <div className='buttomContainer'>
                        
                        <button type="button" className="btn btn-primary buttomItem">Previous</button>
                        <button type="button" className="btn btn-primary buttomItem">Next</button>
                        
                    </div>

                </div>
   
                

          </div>

    );
  }

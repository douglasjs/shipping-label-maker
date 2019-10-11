import React from 'react';
import './index.css';

import GetAddress from '../../../features/shipping-label-maker/steps/getAddress';
import GetWeight from '../../../features/shipping-label-maker/steps/getWeight';
import GetShippingOption from '../../../features/shipping-label-maker/steps/getShippingOption';
import Confirm from '../../../features/shipping-label-maker/steps/confirm';

export class Wizard extends React.Component {
   

    constructor(props){

        super(props);
        this.state= {
            currectStep : 1
        };

        this.child = React.createRef();

    }

    header = ( step )=>{

     
        switch(step) {
            case 1:
                return 'Enter the recevier\'s address:';
            case 2:
                return 'Enter the sender\'s address:';
            case 3:
                return 'Enter the weight:';
            case 4:
                return 'Enter the shipping option:';
            case 5:
                return 'Confirm the content and print';
            default:
          }

    }

   
    pStyle = ( step ) => {
        const stepNum  =  step * 20;
        return  { width: stepNum + '%', widthText: stepNum + '%'};
    };

    goToStep = ( stepNum , btnState) => {
    

        this.child.current.getAsync( btnState,  ()=> {this.props.setAllState('currectStep', stepNum)});
       
    }

    goToPrint = (btnState) =>{

        this.child.current.getAsync( btnState, ()=> {this.props.setAllState('onComplete', true)});
    }

    stepHandler = ( wizardAction, curStep) =>{

        if(curStep > 1 && curStep < 5 ){
            
            if(wizardAction === 'pre'){
                this.goToStep (curStep-1, 'pre');
            }else{
                this.goToStep (curStep+1, 'next');
            }
        }

        if(curStep === 5){
            if(wizardAction === 'pre'){
                this.goToStep (curStep-1, 'pre');
            }
            if(wizardAction === 'confirm'){
                this.goToPrint('confirm');
            }
        }

        if(curStep === 1){
            if(wizardAction === 'next'){
                this.goToStep (curStep+1, 'next');
            }
        }

    }

    
    render(){


        const { highState } = this.props;
        const { wizardContext, currectStep } = highState;
        const style = this.pStyle(currectStep);
        const styleText = style.widthText;
        const header = this.header(currectStep);


        return (

    
            
            <div>
  
                  <div className = 'container formContainer'>
                          
                      <h2 className='no-print'>Shipping Label Maker</h2>
  
                      <p></p>
  
                      <div className="progress bg-white no-print">
                          <div className="progress-bar" role="progressbar" style={style} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{styleText} </div>
                      </div>
  
                      <p></p>
  
                      
                      { currectStep < 3 && <GetAddress ref={this.child} header= {header} wizardContext={wizardContext} setAllState={this.props.setAllState} currectStep= {currectStep} />} 
                      { currectStep === 3 &&  <GetWeight  ref={this.child} header= {header} wizardContext={wizardContext} setAllState={this.props.setAllState} />}
                      { currectStep === 4 &&  <GetShippingOption  ref={this.child} header= {header} wizardContext={wizardContext} setAllState={this.props.setAllState} />}             
                      { currectStep === 5 &&  <Confirm  ref={this.child} header= {header} wizardContext={wizardContext} setAllState={this.props.setAllState} />}        
                      
                      <div className='buttomContainer'>
                          
                          {currectStep > 1 && <button type="button" onClick={() => this.stepHandler( 'pre', currectStep) } className="btn btn-primary buttomItem no-print">Previous</button>}
                          {currectStep < 5 && <button type="button" onClick={() => this.stepHandler( 'next', currectStep) }className="btn btn-primary buttomItem">Next</button>}
                          {currectStep === 5 && <button type="button" onClick={() => this.stepHandler( 'confirm', currectStep) }className="btn btn-primary buttomItem no-print">Print</button>}
                          
                      </div>
  
                  </div>
     
                  
  
            </div>
  
      );

    }

  }

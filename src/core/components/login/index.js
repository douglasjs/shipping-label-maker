import React from 'react';


export function withLogin(WrappedComponent){

    return class extends React.Component{


        constructor(props){
    
            super(props);
            this.state={
                email: '',
                passwd: ''
            };
      
        }
    
        handleChange = (event, name) =>{
          
            this.setState({...this.state, [name]: event.target.value, invalidate :''});
          
        }
    
    
        handleLogin = () => {
            console.log(this.state);
           
            if(this.state.email=== 'test@test.com' && this.state.passwd === '1234'){
                this.props.setAllState('loginState', true);
            }else{
                this.setState({...this.state, invalidate : 'is-invalid'});
            }
    
        }
    
    
    
        render(){
         
            return(
    
           
                <div className= 'loginContainer'>
                    <form className = 'loginForm'>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" onChange={(e)=>this.handleChange(e, 'email')} value={this.state.email} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">account: test@test.com / passwd : 1234 </small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" onChange={(e)=>this.handleChange(e, 'passwd')} value={this.state.passwd} className="form-control" id="password" placeholder="Password"  autoComplete="off"/>
                        </div>
                        <input type='hidden' className={`form-control ${this.state.invalidate}`} />
                        <div className="invalid-feedback">Emaill or Password is not correct.</div>
                        <button type="button" onClick={this.handleLogin} className="btn btn-primary">Login</button>
                    </form>
    
                </div>
             
            )
        }
    
    }


}

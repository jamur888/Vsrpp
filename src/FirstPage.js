import React, {Component} from 'react';
import PlayerAPI from './Adm';

class FirstPage extends Component {

    constructor(props) {
        super(props);
        
        this.initialState = {
            email: '',
            password: ''
        };

        this.state = this.initialState;
        
    }
    
    handleChange = event => {
        
        const { name, value, id } = event.target;

        this.setState({
            [name] : value,
            [id]: value
        });
    }

    OnClikUp = () => {
        
  
       PlayerAPI.all().forEach(p => {
        if(p.email==this.state.email && p.password == this.state.password){
            this.props.history.push("/App")      
         }      
      })
   
  }

 
    

    render() {
        const {  email, password } = this.state; 

        return (
            <form className='welcome_form' onSubmit={this.onFormSubmit}>
           
               <label f="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={this.handleChange} />
               <label f="password">password</label>
                <input 
                    type="password" 
                    
                    name="password" 
                    id="password"
                    value={password} 
                    onChange={this.handleChange} />
             <button type="submit"
                onClick = {this.OnClikUp}
                >
                   Login
            
                </button>
                     
            </form>

        );
    }
}

export default FirstPage;

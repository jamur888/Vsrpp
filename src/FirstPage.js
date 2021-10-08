import React, {Component} from 'react';

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

    OClikUp = () => {
        this.setState(prevState => ({
           
        })); 

    }

 
    

    render() {
        const {  email, password } = this.state; 

        return (
            <form className='welcome_form' onSubmit={this.onFormSubmit}>
           
               <label for="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={this.handleChange} />
               <label for="password">password</label>
                <input 
                    type="text" 
                    name="password" 
                    id="password"
                    value={password} 
                    onChange={this.handleChange} />
             <button type="submit"
                oClick = {this.OClikUp}
                >
                   Login
            
                </button>
                     
            </form>

        );
    }
}

export default FirstPage;

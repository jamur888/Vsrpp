import React, {Component} from 'react';
import PlayerAPI from './Adm';
import {Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import userLogin from './store/ActionCreators/userLogin';
import updateUsers from './store/ActionCreators/updateUsers';

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
       let isExist = false;
       let userEmail = "";
       PlayerAPI.all().forEach(p => {
        if(p.email === this.state.email && p.password === this.state.password){
            isExist = true;
            userEmail = p.email;
         }      
      })
      console.log(this.props.history);
      if(isExist) 
      {
          this.props.loginUser(userEmail);
          this.props.history.push("/App");
        }
   
  }

 
    

    render() {
        const { email, password } = this.state; 

        return (
          
            <form className='welcome_form' onSubmit={this.onFormSubmit}>
             {
                this.props.userName === "" && this.props.history.location.pathname !== "/" &&
                <Redirect to="/" />
            }
            
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
const mapStateToProps = state => {
    return{
      userName: state.userName,
      users: state.users
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return{
      loginUser: (userName) => dispatch(userLogin(userName)),
      updateUsers: (users) => dispatch(updateUsers(users))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);

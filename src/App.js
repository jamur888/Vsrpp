import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import { connect } from 'react-redux';
import {Redirect} from "react-router-dom";
import userLogin from './store/ActionCreators/userLogin';
import updateUsers from './store/ActionCreators/updateUsers';

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                {
                   this.props.userName === "" && this.props.history.location.pathname !== "/password" &&
                   <Redirect to="/" />
                }
                <Form handleSubmit={this.handleSubmit} />
                <h3>Users</h3>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React from 'react'
import userLogin from './store/ActionCreators/userLogin'
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import FirstPage from './FirstPage';
import App from './App';
const Router = (userName) => {
  return(
  <div>
    {
      userName === "" &&
      <Redirect to="" />
    }
      <Switch>
        <Route exact path='/' component={FirstPage}/>
        <Route path='/app' component={App}/>
      </Switch>
    </div>
  )
}
const mapStateToProps = state => {
  return{
    userName: state.userName,
    users: state.users
  }
}


const mapDispatchToProps = dispatch => {
  return{
    loginUser: (userName) => dispatch(userLogin(userName))
  }
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(withRouter(Router));
  
  
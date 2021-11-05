import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FirstPage from './FirstPage';
import App from './App';
const Router = () => {
  return(
  <div>
    {
      userName == "" &&
      <Redirect to="" />
    }
      <Switch>
        <Route exact path='/' component={FirstPage}/>
        <Route path='/app' component={App}/>
      </Switch>
    </div>
  )
}
  
  export default Router
  
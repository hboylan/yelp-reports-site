import React, { Component } from 'react'
import { withRouter, Route, Switch, Redirect }  from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Pages/Home'
import BusinessReport from './Pages/BusinessReport';

class App extends Component {

  render() {
    return (
      <Navigation>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/business" component={BusinessReport} exact />
          <Redirect from="*" to="/" />
        </Switch>
      </Navigation>
    )
  }
}

export default withRouter(App)

import React, { Component } from 'react'
import { withRouter, Route, Switch, Redirect }  from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Pages/Home'
import TableauReport from './Pages/TableauReport';

class App extends Component {

  render() {
    return (
      <Navigation>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/business" render={() => <TableauReport title="Yelp Businesses" view="RestaurantsAvailabilityScores_Extract/RestaurantsAvailabilityScore" />} exact />
          <Route path="/reviews" render={() => <TableauReport title="Yelp Reviews" view="YelpReviewWordsAnalysis/ReviewWordCountAnalysis" />} exact />
          <Route path="/sentiment" render={() => <TableauReport title="Yelp Sentiment" view="YelpDataSentimentAnalysis/SentimentalDashboard" />} exact />
          <Route path="/amenities" render={() => <TableauReport title="Yelp Amenities" view="YelpBusinessAmenitiesScore/YelpAmenitiesScoreDashboard" />} exact />
          <Redirect from="*" to="/" />
        </Switch>
      </Navigation>
    )
  }
}

export default withRouter(App)

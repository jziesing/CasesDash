import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Layout from "./components/Layout"
import Home from "./components/Home"
import Case from "./components/Case"
import Add from "./components/Add"

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="add" component={Add} />
      <Route path="case/:title" component={Case} />
    </Route>
  </Router>
  ),
  document.getElementById('app'))

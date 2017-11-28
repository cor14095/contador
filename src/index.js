import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import CounterRedux, { addToCounter } from './logic'

import { connect } from 'react-redux'

const App = ({ counter, add }) => (
  <button onClick={() => add()}> { counter } </button>
)

const mapStateToProps = state => (
  {
    counter: state.get('counter')
  }
)

const mapDispatchToProps = dispatch => (
  {
    add: () => {
      dispatch(addToCounter())
    }
  }
)

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

let store = createStore(
  CounterRedux,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={ store } >
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)

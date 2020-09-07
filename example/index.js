import { createStore, applyMiddleware } from 'redux'
import { addNum, subNum } from './actions'
import reducers from './reducers'
import log from './middleware/log'

const initState = { count: 1 }
const store = createStore(reducers, initState, applyMiddleware(log))

console.log(store.getState())

const unsubscribe = store.subscribe(function() {
  console.log('subscribe')
})

store.dispatch(addNum(12))

store.dispatch(subNum(10))
console.log(store.getState())


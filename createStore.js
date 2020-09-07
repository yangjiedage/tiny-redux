function createStore(initState, reducers, enhancer) {
  if(typeof enhancer === 'function') {
    enhancer(initState, reducers)
  }
}

export default createStore
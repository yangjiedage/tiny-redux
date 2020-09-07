export default function(state, action) {
  switch(action.type) {
    case 'ADD':
      return {
        count: action.payload + state.count
      }
    case 'SUB':
      return {
        count: state.count - action.payload
      }
    default:
      return state
  }
}
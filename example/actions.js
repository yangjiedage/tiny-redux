export const addNum = (num) => {
  return {
    type: 'ADD',
    payload: num
  }
}

export const subNum = (num) => {
  return {
    type: 'SUB',
    payload: num
  }
} 
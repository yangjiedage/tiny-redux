const fs = require('fs')
const path = require('path')

let options = {
  flag: 'a',
  encoding: 'utf-8'
}

const filePath = path.resolve(__dirname, 'redux.log')

let stderr = fs.createWriteStream(filePath, options)

let logger = new console.Console(stderr)

fs.writeFile(filePath, '', function(err) {
  if(err) {
    console.log(err)
  }
})

const log = ({ dispatch, getState }) => next => action => {
  logger.log(`action type: ${action.type} --- action payload: ${JSON.stringify(action.payload)}`)
  next(action)
}

export default log
// import {render, screen} from '@testing-library/react'
const App = require('./App')
// import App from './App'

describe('render component App', () => {
  test('should work as expected', () => {
    console.log(App)
    expect(1+1).toBe(2)
  })
})
import React from 'react'
import { render } from 'react-dom'
import App from '../src/js/components/App'

window.onload = () => {
  let rootElement = document.getElementById('wrapper')
  render(
    <App />,
    rootElement
  )
};

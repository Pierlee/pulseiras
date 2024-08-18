import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes.jsx'

function Routes() {
  return (
    <Router>
        <AppRoutes/>
    </Router>
  )
}

export default Routes
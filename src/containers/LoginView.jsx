import React from 'react'
import ReactDOM from 'react-dom'

const events = window.require('events')
const path = window.require('path')
const fs = window.require('fs')

const electron = window.require('electron')
const {ipcRenderer, shell} = electron
const {dialog} = electron.remote

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LogoView from '../components/LogoView'
import LoginForm from '../components/LoginForm'
import Header from '../components/Header'

let muiTheme = getMuiTheme({
  fontFamily: 'Microsoft YaHei'
})

class LoginView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="root">
          <Header />
          <LogoView />
          <LoginForm />
        </div>
      </MuiThemeProvider>
    )
  }

}

export default LoginView

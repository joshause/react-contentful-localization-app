import React from 'react'
import logo from '../images/logo.svg'
import '../styles/App.css'
import PostList from './PostList'
import Locale from './Locale'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentLocale: 'en-US'
    }
    this.locale = this.locale.bind(this)
  }

  locale(l) {
    this.setState({
      currentLocale: l
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Locale locale = {this.locale} />
        <div className="App-intro">
          <PostList locale = {this.state.currentLocale} />
        </div>
      </div>
    )
  }

}

export default App

import React from 'react'
import '../styles/Locale.css'
import { Button } from 'reactstrap'

class Locale extends React.Component {
  handleClick(x) {
    console.log(x)
  }
  render() {
    return (
      <div className={this.props.hide ? 'hide' : ''}>
        <div className="locale-container">
          <div className="locale-buttons">
            <Button outline color="info" onClick={()=>{this.props.locale('en-US')}}>English</Button>
            <Button outline color="info" onClick={()=>{this.props.locale('zh')}}>Chinese</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Locale

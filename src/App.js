import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 'black',
      Active: 'black'
    };

    this.changeBackground = this.changeBackground.bind(this)
  }
  changeBackground(color) {

    this.setState({
      Active: color,
      Animation: true
        });

    setTimeout(()=>{
      this.setState({
        bgColor: color,
        Animation: false

      })
    },500)
  }

  render() {
    let { bgColor, Active, Animation} = this.state
    return (
      <div className="App">
        <div className="main-container" id="main-container"
             style = {{backgroundColor: bgColor}}>
          <div className={"scale-container" + [Animation ? ' animation' : '']}
               style = {{backgroundColor: Active}}>
          </div>
        </div>

        <div className="colors-btn">
          <div className={"first-btn" + [Active==='black' ? ' active' : '']} onClick={() => this.changeBackground('black')}> </div>
          <div className={"second-btn"  + [Active==='orange' ? ' active' : '']} onClick={() => this.changeBackground('orange')}> </div>
          <div className={"third-btn"  + [Active==='green' ? ' active' : '']} onClick={() => this.changeBackground('green')}> </div>
          <div className={"fourth-btn"  + [Active==='yellow' ? ' active' : '']} onClick={() => this.changeBackground('yellow')}> </div>
          <div className={"fifth-btn"  + [Active==='mistyrose' ? ' active' : '']} onClick={() => this.changeBackground('mistyrose')}> </div>
        </div>
      </div>
    );
  }
}

export default App;

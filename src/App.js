import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posX: 0,
        };
      }
  

    handleMouseMoveCatch = (e) => {
        this.setState({ posX: this.posX=Math.random() * 100 +'%' })
    }
    jewelStyle = function() {
        return {
            top :this.posX=Math.random() * 95 +'%' ,
            left :this.posX=Math.random() * 95 +'%' ,
        }
      }

    render() {
        return (
            <div>
                <div style={this.jewelStyle()} onMouseMove={this.handleMouseMoveCatch} className="outer-block">
                    <p className="inner-block">Catch me if you can</p>
                </div>
            </div>
        )
    }
}

export default App;

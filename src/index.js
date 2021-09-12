import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';





class catchMe extends Component {
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






ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from 'react';
import './App.css';
import './form12.css';
import Lottie from 'react-lottie';
import animationData from './bot.json'
import success from './success.json'
import Loader from './circleloop.json'
import failed from './failed.json'
import title from './assets/Logo/Dark.svg'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isStopped: false, isPaused: false,
      loader: false
    }
  }


  showanimation = () => {
    // Lottie

    setTimeout(() => {
      if (Date.now() % 2 == 0) {
        return this.setState({ loadertype: "success" }, () => {
          setTimeout(() => {
            this.setState({ loader: false })
          }, 2000);
        })
      } else {
        return this.setState({ loadertype: "failure" }, () => {
          setTimeout(() => {
            this.setState({ loader: false })
          }, 1000);
        })
      }


    }, 2000);
  }


  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,

    };

    switch (this.state.loadertype) {
      case "loop":
        var newoptions = {
          loop: true,
          autoplay: true,
          animationData: Loader,

        };
        break;

      case "failure":
        var newoptions = {
          loop: false,
          autoplay: true,
          animationData: failed,

        };
        break;

      case "success":
        var newoptions = {
          loop: false,
          autoplay: true,
          animationData: success,

        };
        break;

      default:

        var newoptions = {
          loop: true,
          autoplay: true,
          animationData: Loader,

        };
        break;
    }


    return (<div className="main-container">

      <div className="card">



        <div>
          <div className="title-container">
            <img src={title} alt="title" className="title" />
          </div>
          <div className="formfield-container">
            <p className="labelstyle">
              Enter Expense Amount
              </p>

            <input className="formfield" type="number" label="amount" placeholder="Enter the amount spent"
               /></div>


          <div className="formfield-container">
            <p className="labelstyle">
              Date of spend
              </p>

            <input type="date" label="amount" placeholder="Enter the amount spent"
              className="formfield" /></div>


          <div className="formfield-container">
            <p className="labelstyle">
              Select purpose
              </p>

            <input type="text" label="amount" placeholder="Enter the reason for speding"
              className="formfield" />
          </div>

          <div className="buttoncontainer" onClick={() => {
            this.setState({ loader: !this.state.loader, loadertype: "loop", isPaused: false })

            this.showanimation()
          }}>

            <div style={{
              background: !this.state.loader ? "#ff3366" : "none",
              borderRadius: 20, height: 40,
              border: !this.state.loader ? "4px solid #ff3366" : "0px",
              width: this.state.loader ? 40 : 264,
              display: "flex", justifyContent: "center",
              alignItems: "center", cursor: "pointer", transition: "1s"
            }}>
              {this.state.loader ?
                <Lottie options={newoptions}
                  height={50}
                  width={50}
                  isStopped={this.state.isStopped}
                  isPaused={this.state.isPaused}
                />
                : <p className="buttonfont"><strong>Schedule Demo</strong></p>}

            </div>
          </div>
        </div>

      </div>
    </div>


    )
  }


}

export default App;

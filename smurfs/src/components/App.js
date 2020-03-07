import React, { Component } from "react";
import ContactForm from "../components/ContactForm";

import "./App.css";



import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faHatCowboy
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare, faCoffee); 

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="app-wrapper">
        <header>
          <h1 className="title">Smurfs</h1>
        </header>
        {this.props.fetchingSmurfs ? (
          <h3>
            We're fetching your smurfs...
             <FontAwesomeIcon icon={faHatCowboy}  />
          </h3>
        ) : (
          <div className="smurfs card">
            {this.props.smurfs.map(smurf => {
              return (
                <div key={Date.now() * Math.random()} className="card is-child">
                  {/* <span className="tag is-danger ">{smurf.type}</span> */}

                  <p className="name">{`Name: ${smurf.name}`}</p>
                  <p className="age">{`Age: ${smurf.age}`}</p>
                  <p className="height">{`Height: ${smurf.height}`}</p>
                  <p className="id">{`Id: ${smurf.id}`}</p>

                  <ContactForm />


                </div>
              );
            })}
          </div>
        )}
        {this.props.error !== "" ? <h4>{this.props.error}</h4> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // our state machine is working for us based on fetching, success, and error. lets make sure our component knows about the state machine
    smurfs: state.smurfs, // smurfs for when we have the data!
    smurf: state.smurf,
    error: state.error, // error for when we mispell something!
    fetchingSmurfs: state.fetchingSmurfs // pending state, the fetching spinner or loading message etc. for when we're fetching!
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(App);

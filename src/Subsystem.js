import React, { Component } from 'react';

class Subsystem extends Component {

  render() {
    return (
      <div>
        this.props.subsystems.map((subsystem) => {
          return (
            <p>subsystem.id</p>
          )
        })
      </div>
    )
  }

}
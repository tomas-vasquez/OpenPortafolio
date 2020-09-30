import React, { Component } from "react";

import Particles from "react-particles-js";

export default class particles extends Component {
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div
        id="home"
        style={{
          zIndex: -100,
        }}
        className="fixed-top bgstyle m-0"
      >
        <Particles
          params={{
            pauseOnBlur: true,
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
              opacity: {
                value: 0.25,
              },
              line_linked: {
                enable: true,
                opacity: 0.1,
              },
              move: {
                speed: 1,
              },
            },
          }}
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="Avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>HTML/CSS | Bootstrap | Javascript | React | Python</p>
            </div>
            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="https://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/* Github */}
              <a
                href="https://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/* Youtube */}
              <a
                href="https://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>
              {/* Facebook */}
              <a
                href="https://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-facebook-square" aria-hidden="true" />
              </a>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;

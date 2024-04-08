import React, { Component } from "react";

export default class ClassPropsComponent extends Component {
  render() {
    return (
      <div>
        <h3>This is Class Component</h3>
        <p>
          Hello {this.props.name} , Good Morning!!! from {this.props.place}
        </p>
      </div>
    );
  }
}

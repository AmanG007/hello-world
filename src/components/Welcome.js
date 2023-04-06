import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return <h1>Hare Krishna {this.props.name} a.k.a. {this.props.heroName}</h1>
    }
}

export default Welcome
import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false}
    }
    static getDerivideStateFromError(error) {
        return {hasError: true}
    }
  render() {
     if(this.state.hasError) return <h1>it has error</h1>
    return this.props.children;
  }
}

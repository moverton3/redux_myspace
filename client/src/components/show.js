import React, { Component } from 'react';

class Show extends Component {
  componentDidMount(){
    console.log(this.props.match.params.id)
  }
    render(){
      return <h1>This is the show page</h1>
    }
  }



export default Show;

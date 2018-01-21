import React from 'react';

export default class Output extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value,
    }
  }

  render() {
    return (
      <div className="output">
          {this.props.value}
      </div>
    )
  }
}

import React from 'react';

export default class Text extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value,
    }
  }

  onChange = (e) => {
    console.log('firing onchange text', e.target.value)
    this.setState({value: e.target.value}, function () {
      this.props.onChange(this.state.value);
    })
  }

  render() {
    return (
      <div className="form-group">
        <label >Number of paragraphs:</label>
        <input type="number" value={this.state.value} onChange={this.onChange} className="form-control"/>
      </div>
    )
  }
}

import React from 'react';

export default class Text extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value,
    }
  }

  onChange = (e) => {
    this.setState({value: e.target.value}, function () {
      this.props.onChange(this.state.value);
    })
  }

  render() {
    return (
      <div className="form-group">
        <label style={{marginRight: '10px'}}>Number of paragraphs:</label>
        <input type="number" value={this.state.value} onChange={this.onChange} className="form-control"/>
      </div>
    )
  }
}

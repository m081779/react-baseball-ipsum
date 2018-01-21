import React from 'react';

export default class Select extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value,
    }
  }


  onChange = (e) => {
    console.log('firing onchange select')
    this.setState({value: e.target.value}, function () {
      this.props.onChange(this.state.value);
    })
  }


  render() {
    return (
      <div className="form-group">
        <label >Start With Lorem:</label>
        <select className="form-control" onChange={this.onChange} >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
    )
  }
}

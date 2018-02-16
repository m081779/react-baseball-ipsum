import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Output from './components/Output'
import Select from './components/controls/Select'
import Text from './components/controls/Text'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      paras: 4,
      lorem: true,
      text: ''
    }
  }

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText(){
    axios
      .get('http://baseballipsum.apphb.com/api/?paras='+ this.state.paras +'&startwithlorem=' +this.state.lorem)
      .then(response => {
        let text = ''
        response.data.forEach(para => {
          text += '<p>'+para+'</p>'
        })
        this.setState({text: text})
      })
      .catch(err => console.log('asdfasdf',err))
  }

  showLorem = (x) => {
    this.setState({lorem: x}, function () {
      this.getSampleText();
    })
  }

  changeParas = (number)  =>  {
    this.setState({paras: number}, function (){
      this.getSampleText();
    })
  }
  render() {
    return (
      <div className="App container">
        <h1>ReactJS Sample Baseball Text Generator</h1>
        <hr/>
        <form className="form-inline">
            <Text value={this.state.paras} onChange={this.changeParas}/>
            <Select value={this.state.lorem} onChange={this.showLorem}/>
        </form>
        <br/>
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;

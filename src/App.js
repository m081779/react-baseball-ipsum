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
      html: true,
      text: ''
    }
  }

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText(){
    axios
      .get('http://baseballipsum.apphb.com/api/?paras='+ this.state.paras +'&startwithlorem=' +this.state.html)
      .then(response => {
        console.log(response)
        let text = ''
        response.data.forEach(para => {
          text += '<p>'+para+'</p>'
        })
        this.setState({text: text}, function (){
          console.log(this.state)
        })
      })
      .catch(err => console.log('asdfasdf',err))
  }

  showHtml = (x) => {
    console.log('firing showHtml', x)
    this.setState({html: x}, this.getSampleText())
  }

  changeParas = (number)  =>  {
    console.log('firing changeParas', number)
    this.setState({paras: number}, this.getSampleText())
  }
  render() {
    return (
      <div className="App container">
        <h1>ReactJS Sample Text Generator</h1>
        <hr/>
        <form className="form-inline">
            <Text value={this.state.paras} onChange={this.changeParas}/>
            <Select value={this.state.html} onChange={this.showHtml}/>
        </form>
        <br/>
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;

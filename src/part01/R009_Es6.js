import React, {Component} from 'react';

class R009_Es6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var String = "ES6에 추가된 String 함수들";
    console.log('start with : ', String.startsWith('ES6에 추가된'))
    console.log('start with : ', String.endsWith('함수들'))
    console.log('start with : ', String.includes('추가된'))
  }

  render() {
    return (
      <h2>[ THIS IS ES6 STRING ]</h2>
    )
  }
}

export default R009_Es6;
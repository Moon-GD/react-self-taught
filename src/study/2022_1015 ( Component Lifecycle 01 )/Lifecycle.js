// Lifecycle.js

import {React, Component} from "react";

let count = 0

// Class형 Component로 생성
class Lifecycle extends Component {

  // 생성자로 props는 그대로 받음
  constructor(props) {
    super(props)
    // state 지정
    this.state = {
      name: 'Moon-GD',
    };

    // 생성자 함수 순서 확인을 위해 log 출력
    console.log('Constructor 실행')
  }

  // render 이전 실행
  componentWillMount() {
    console.log('곧 render 함수가 실행됩니다.')
  }

  // render 이후 실행
  componentDidMount() {
    count = count + 1
    console.log('render 함수 실행이 완료되었습니다.', count)
  }

  render() {
    // render 함수 순서 확인을 위해 log 출력
    console.log('render 함수 실행')

    return (
      <>
        <h1>Lifecycle check</h1>
        <h4>state check : Name = {this.state.name}</h4>
        <h4>props check : age = {this.props.age}</h4>
      </>
    )
  }
}

// 다른 데에서 활용할 수 있게 export
export default Lifecycle;
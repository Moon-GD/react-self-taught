// Lifecycle.js

import {React, Component} from "react";

// ① Class형 Component로 생성
// class Lifecycle extends Component {

//   count = 0
//   timer = null

//   // 생성자로 props는 그대로 받음
//   constructor(props) {
//     super(props)
//     // state 지정
//     this.state = {
//       name: 'Moon-GD',
//     };

//     // 생성자 함수 순서 확인을 위해 log 출력
//     console.log('Constructor 실행')
//   }

//   // Life cycle - Mounting
//   // render 이전 실행
//   componentWillMount() {
//     console.log('곧 render 함수가 실행됩니다.')
//   }
  
//   // render 이후 실행
//   componentDidMount() {
//     console.log('render 함수 실행이 완료되었습니다.')

//     /* 주기적으로 state 변화
//     this.timer = setInterval(() => {
//       this.setState((state) => ({name: state.name + '1'}))
//       this.count += 1      
//     }, 1000)
//     */
//   }

//   // Life cycle - Updation
//   // props 변경
//   componentWillReceiveProps(nextProps) {
//     console.log('componentWillReceiveProps')
//   }

//   // Lifecycle (Mount) - componentWillMount
//   // Lifecycle (Updation) - componentWillReceiveProps
//   // props state 변화 모두에 반응
//   // props에 의존하는 state를 핸들링 할 때 활용 (아주 특수한 Case)
//   static getDerivedStateFromProps(nextProps, prevState) {
//     console.log('getDerivedStateFromProps', nextProps, prevState)

//     // 반환할 state
//     // 없으면 null
//     // 있으면 객체 타입으로 작성
//     return null;
//   }

//   static 

//   // update 여부 결정
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('shouldComponentUpdate')

//     // update 여부를 return 값으로 결정
//     // default = true
//     return true
//   }

//   // update 이전
//   componentWillUpdate(nextProps, nextState) {
//     console.log('componentWillUpdate')
//   }

//   // update 이후
//   componentDidUpdate(previousProps, previousState) {
//     console.log('componentDidUpdate')
//   }

//   // Unmount 직전
//   componentWillUnmount() {
//     console.log('componentWillUnMount')
//   }

//   render() {
//     // render 함수 순서 확인을 위해 log 출력
//     console.log('render 함수 실행')

//     return (
//       <>
//         <h1>Lifecycle check</h1>
//         <h4>state check : Name = {this.state.name}</h4>
//         <h4>props check : age = {this.props.age}</h4>
//       </>
//     )
//   }
// }

// let count = 0
// // ② getSnapshotBeforeUpdate() 보여주기 위한 Component
// class Lifecycle extends Component {
//   state = {
//     list: []
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState(state => ({
//         list: [...state.list, count++]
//       }))
//     }, 1000)
//   }

//   render() {
//     return(
//       <div id="listBlock" style={{height:'400px', overflow:'scroll'}}>
//         {this.state.list.map((item, index) => {
//           return <h5 key={index}>{item}</h5>
//         })}
//       </div>
//     )
//   }

//   // componentWillUpdate
//   // 이 함수의 return 값은 componentDidUpdate()에 전달
//   // 스크롤 위치 처리와 같은 작업에 활용 가능 
//   // -> (요소가 추가됨에 따라 길어지는 Element의 스크롤 위치 조정)
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     if(prevState.list.length === this.state.length) return null;
//     const listBlock = document.querySelector('#listBlock')
//     console.log(listBlock.scrollHeight - listBlock.scrollTop)
//     return listBlock.scrollHeight - listBlock.scrollTop;
//   }

//   componentDidUpdate(prevProps, prevState, snapShot) {
//     if(snapShot !== null) {
//       const listBlock = document.querySelector('#listBlock')
//       listBlock.scrollTop = listBlock.scrollHeight - snapShot
//     }
//   }
// }

// ③ componentDidCatch() 보여주기 위한 Component
class Lifecycle extends Component {
  state = {
    isError: false,
  }

  render() {
    if(this.state.isError) { return <h1>에러가 발생했습니다.</h1>}
    else {
      // 기존 Component 보여주기 
      return <h1>기존 Component</h1>
    }
  }

  // 배경 : 기존 React에서 일부 Component에서 발생하는 에러로 전체 App이 중단되는 경우 발생
  // -> 하위 Component 트리의 생명주기 중 error 가 발생하면 포착하고
  // Pull up UI를 대신 보여주며 전체 App이 망가지는 일을 방지
  // -> 이런 Component를 JS에서 Error Boundary 라고도 부름
  componentDidCatch(error, info) {
    this.setState({isError: true})
  }
}

// 다른 데에서 활용할 수 있게 export
export default Lifecycle;
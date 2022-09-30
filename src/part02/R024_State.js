// R024_State.js
import { React, Component } from 'react';
import SubState from './R024_SubState';

class State extends Component {
  constructor(props) {
    super(props);

    // state 선언
    this.state = {
      StudySubject : this.props.subject,
      StudyStartDate : this.props.subjectDate
    }
  }

  render() {
    return(
      <>
        <h1>
          {this.state.StudyStartDate} 부터 {this.state.StudySubject} 공부를 시작했습니다.
        </h1>
        <SubState inner={this.state.StudySubject}></SubState>
      </>
    )
  }
}

export default State;
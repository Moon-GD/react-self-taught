import { React, Component } from 'react';

class SetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: '언제? 2022-09-30부터!',
    }
  }

  SetString = (flag) => {
    if(flag === 'when') {
      this.setState({string:"언제? 2022-09-30부터!"})
    }
    else if(flag === 'what') {
      this.setState({string:"무엇을? React 공부를"})
    }
  }

  render() {
    return(
      <>
        <h1>최근 하고 있는 공부를 보여줍니다.</h1>
        <h2>정보 : {this.state.string}</h2>
        <button onClick={(e) => this.SetString('when', e)}>when 정보 확인</button>
        <button onClick={(e) => this.SetString('what', e)}>what 정보 확인</button>
      </>
    )
  }
}

export default SetState;
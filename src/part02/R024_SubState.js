import { React, Component } from 'react';

class SubState extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inner : this.props.inner
    }
  }

  render() {
    return(
      <>
        <h2>뭘 공부한다고?</h2>
        <h2>
          {this.state.inner} 입니다.
        </h2>
      </>
    )
  }
}

export default SubState;
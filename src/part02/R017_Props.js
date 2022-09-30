import React, { Component} from "react";

class R017 extends Component {
  render() {
    let props_value = this.props.props_value
    props_value += ' 문자열입니다.'

    return (
      <div>
        {props_value}
      </div>
    )
  }
}

export default R017;

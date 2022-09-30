import { Component } from 'react';

class PropsNode extends Component {
  render() {
    let node = this.props.children

    return(
      <div>
        {node}
      </div>
    )
  }
}

export default PropsNode;

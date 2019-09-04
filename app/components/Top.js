import React from "react";
import { getInfo } from '../utils/api'


export default class Top extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      top: [],
    }
    this.getTopInfo = this.getTopInfo.bind(this);
  }

  getTopInfo (ids) {
    ids.map((id) => (
      getInfo(id)
        .then(data => {
          this.setState({
            top: data
          })
        })
    ))
  }

  render() {
    return (
      <React.Fragment>
        {this.getTopInfo(this.props.ids)}
        <h1>test</h1>
      </React.Fragment>
    )
  }
}

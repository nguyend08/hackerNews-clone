import React from "react";
import { getInfo } from '../utils/api'

function idGrid (ids) {
  return (
    <ul>
     {ids.map((id) => (
      //  getInfo(id)
      //   .then(data => {
      //     const {
      //       by,
      //       descendents,
      //       kids,
      //       score,
      //       time,
      //       title,
      //       type,
      //       url 
      //     } = data
      //    return (
      //      <li>
      //        <h1>{title}</h1>
      //      </li>
      //    )
      //   })
      <li>{id}</li>
    ))}
    </ul>
  )
}

export default class Top extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <React.Fragment>
        {idGrid(this.props.ids)}
        <h1>test</h1>
      </React.Fragment>
    )
  }
}

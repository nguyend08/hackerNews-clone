import React from "react";
import { getInfo } from '../utils/api'



function RenderTopInfo( {idArr} ) {
  console.log(idArr)
  return(
  <ul>
    {idArr.map((id) => {
      const {
        by,
        descendants,
        kids,
        score,
        time,
        title,
        type,
        url 
      } = id

      return (
        <li key={title}>
          {title}
        </li>
      )
    })}
  </ul>
)
}

export default class Top extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      top: [],
    }
    this.getTopInfo = this.getTopInfo.bind(this);
  }

  componentDidMount() {
    this.getTopInfo(this.props.ids)
  }

  getTopInfo(ids) {
    ids.map((id) => (
      getInfo(id)
        .then(data => {
          let dataArr = this.state.top.concat(data)
          this.setState({
            top: dataArr
          })
        })
    ))
  }


  render() {
    const { top } = this.state
    return (
      <React.Fragment>
        <RenderTopInfo 
          idArr={top}
        />
        <h1>hi</h1>
      </React.Fragment>
    )
  }
}

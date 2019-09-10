import React from "react";
import { getInfo } from "../utils/api";

function RenderSectionInfo({ idArr }, {updateUser}) {
  return (
    <ul>
      {idArr.map(id => {
        const { by, descendants, kids, score, time, title, type, url } = id;

        return (
          <li key={id + title} className="section">
            <div className="title">
              <a href={url}>
                {title}
             </a>
            </div>
            <p className="subtitle">
              by <a onClick={updateUser}>{by}</a> on {new Date(time * 1000).toLocaleString()}, with{" "}
              <a>{descendants}</a> comments
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default class Stories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      top: []
    };
    this.getTopInfo = this.getTopInfo.bind(this);
  }

  componentDidMount() {
    this.getTopInfo(this.props.ids);
  }

  getTopInfo(ids) {
    ids.map(id =>
      getInfo(id).then(data => {
        let dataArr = this.state.top.concat(data);
        this.setState({
          top: dataArr
        });
      })
    );
  }

  render() {
    console.log(this.props)
    const { top } = this.state;
    const { updateUser } = this.props;
    return (
      <React.Fragment>
        <RenderSectionInfo idArr={top} updateUser={updateUser} />
      </React.Fragment>
    );
  }
}

import React from "react";

function RenderUserInfo({ idArr }) {
  return (
    <ul>
      {idArr.map(id => {
        const { by, descendants, kids, score, time, title, type, url } = id;
        const { updateUser } = this.props

        return (
          <li key={id + title} className="section">
            <div className="title">
              <a href={url}>
                {title}
             </a>
            </div>
            <p className="subtitle">
              by <a onClick={}>{by}</a> on {new Date(time * 1000).toLocaleString()}, with{" "}
              <a>{descendants}</a> comments
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default class User extends React.Component {
  constructor(props) {
    super(props)


  }
}

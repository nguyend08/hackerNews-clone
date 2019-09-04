import React from "react";
import { getCategoryArr } from "../utils/api";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "newstories",
      topstories: [],
      newstories: []
    };
  }

  componentDidMount() {
    const { category } = this.state;
    getCategoryArr(category).then(data => {
      data === "topstories"
        ? this.setState({
            topstories: data
          })
        : this.setState({
            newstories: data
          });
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

import React from "react";
import { getCategoryIds } from "../utils/api";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "topstories",
      repos: {},
    };
    this.updateCategory = this.updateCategory.bind(this)
  }

  updateCategory(categoryType) {
    this.setState({
      category: categoryType
    })

    const { repos } = this.state
    if (!repos.categoryType) {
      getCategoryIds(categoryType)
        .then((data) => {
          this.setState({
            repos: {
              [categoryType]: data
            }
          })
        })
    }
  }

  componentDidMount() {
    const { category } = this.state;
    this.updateCategory(category)
      
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

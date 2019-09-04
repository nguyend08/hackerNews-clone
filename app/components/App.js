import React from "react";
import { getCategoryIds } from "../utils/api";
import Top from './Top'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "topstories",
      repos: [],
    };
    this.updateCategory = this.updateCategory.bind(this)
  }


  componentDidMount() {
    const { category } = this.state;
    this.updateCategory(category)
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
        .catch(() => {
          console.warn("Error fetching repos: ", error);

          this.setState({
            error: `There was an error fetching the repositories.`
          });
        });    
    }
  }



  render() {
    const { category, repos } = this.state
      
    return (
      <div>
        {repos[category] && <Top ids={repos[category]} />}
        
      </div>
    );
  }
}

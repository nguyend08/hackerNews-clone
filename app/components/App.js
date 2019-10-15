import React from "react";
import { getCategoryIds, getUser } from "../utils/api";
import Stories from "./Stories";

export default class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "topstories",
      user:'',
      repos: {},
      username: {},
    };
    this.updateCategory = this.updateCategory.bind(this);
  }

  componentDidMount() {
    const { category } = this.state;
    this.updateCategory(category);
  }


  updateCategory(categoryType) {
    this.setState({
      category: categoryType
    });

    const { repos } = this.state;
    if (!repos.categoryType) {
      getCategoryIds(categoryType)
        .then(data => {
          let smallData = data.slice(0, 50);
          this.setState({
            repos: {
              [categoryType]: smallData
            }
          });
        })
        .catch(() => {
          console.warn("Error fetching repos: ", error);

          this.setState({
            error: `There was an error fetching the repositories.`
          });
        });
    }
  }

  updateUser(user) {
    if (!username.user) {
      getUser(user)
        .then(data => {
          this.setState({
           repos: {},
           username: {
             [user]: data
           }
         });
        })
        .catch(() => {
          console.warn("Error in getting User: ", error);

          this.setState({
            error: `Error fetching User Info`
          })
        })
    }
  }

  render() {
    const { category, repos, user, username } = this.state;

    return (
      <div>
        {repos[category] && <Stories ids={repos[category]} updateUser={this.updateUser} />}
        {username[user] && <User user={username[user]}/>}
      </div>
    );
  }
}

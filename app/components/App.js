import React from "react";
// import { getCategoryArr } from "../utils/api";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "topstories",
      topstories:[],
      newstories:[]
    }
    this.getCategoryArr = this.getCategoryArr.bind(this)
  }

  getCategoryArr(type) {
    return fetch(`https://hacker-news.firebaseio.com/v0/${type}.json?print=pretty`)
      .then((res) => res.json())
      .then((data) => {
        type === 'topstories' ?
         this.setState({
          topstories : [data]
        })
        :
        this.setState({
          newstories : [data]
        })
      }
        
      )
      .catch(error => console.error(error))
  }

  componentDidMount() {
    const { category } = this.state
    this.getCategoryArr(category)
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

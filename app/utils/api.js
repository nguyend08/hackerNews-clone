import React from 'react';

//https://hacker-news.firebaseio.com/v0/topstories 

export function getCategoryArr({category}) {
  return fetch(`https://hacker-news.firebaseio.com/v0/${category}.json?print=pretty`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data + 'this is data')
      this.setState({
        category: data
      })
    }
      
    )
    .catch(error => console.error(error))
}
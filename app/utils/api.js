import React from 'react';

//https://hacker-news.firebaseio.com/v0/topstories 

  export function getCategoryArr(category) {
    return fetch(`https://hacker-news.firebaseio.com/v0/${category}.json?print=pretty`)
      .then((res) => res.json())
    
      .catch(error => console.error(error))
  }
import React from 'react';

  export function getCategoryIds(category) {
    return fetch(`https://hacker-news.firebaseio.com/v0/${category}.json?print=pretty`)
      .then((res) => res.json())
      .catch(error => console.error(error))
  }

  export function getInfo(id) {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then((res) => res.json())
      .catch(error => console.error(error))
  }

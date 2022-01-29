import React from 'react'
import { useGlobal } from '../../context/context'
import SingleArticle from './SingleArticle'
const Articles = () => {
  const {articles, error} = useGlobal()
  if(error.show) {
    return <h1 className="heading-primary heading-white">{error.msg}</h1>
  }
  return(
    <div className="articles">
      {
         articles.map((article, index) => {
          console.log(article)
          return <SingleArticle key={index} {...article}/>
        }) 
      }
    </div>
  )
}

export default Articles

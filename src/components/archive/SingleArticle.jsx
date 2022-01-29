import React from 'react'

const SingleArticle = ({headline : {main}, byline : {original}, lead_paragraph, web_url}) => {
  return (
    <div className='article'>
      <div className="article-info">
        <h2 className="article-name">{main}</h2>
        <p>{original}</p>
      </div>
      <div className="article-content">
        <p>{lead_paragraph}</p>
      </div>
      <a target="_blank" rel="noreferrer noopener" href={web_url} className="link">Go there</a>
    </div>
  )
}

export default SingleArticle

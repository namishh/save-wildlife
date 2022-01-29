import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('Endangered Animals')
  const [navOpen, setNavOpen] = useState(false)
  const [error, setError] = useState({show : false, msg : ''})
  const API_KEY = process.env.REACT_APP_ARTICLES
  const baseUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`
  const fetchData = async (url) => {
    try {
      setLoading(true)
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      if(!data.response.docs[0]) {
        setError({show : true, msg  : 'No Articles Found. Try some other keywords'})
        setLoading(false)
      } else {
        setError({show : false, msg  : 'No Articles Found. Try some other keywords'})
        setArticles(data.response.docs)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setError({show : true, msg : error})
    }
  }
  useEffect(() => {
    fetchData(baseUrl)
  }, [query])
  return (
    <AppContext.Provider value={{articles, setArticles, loading, setLoading, setQuery, navOpen, setNavOpen, error}}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook
export const useGlobal = () => {
  const context = useContext(AppContext)
  return context
}
export { AppContext, AppProvider }
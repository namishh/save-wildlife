import React from 'react'
import SearchForm from './SearchForm'
import Articles from './Articles'
import { useGlobal } from '../../context/context'
const Archive = () => {
  const {loading} = useGlobal()
  return (
    <div className='archive' id='archive'>
      <h1 className='heading-primary heading-white'>The Archive</h1>
      <div className="archive-container">
        <SearchForm />
        <div className="articles">
          {loading ? <h1 className="heading-primary heading-white">Loading...</h1> : <Articles/>}
        </div>

      </div>
    </div>
  )
}

export default Archive

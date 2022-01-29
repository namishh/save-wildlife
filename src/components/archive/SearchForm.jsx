import React, { useRef } from 'react'
import { useGlobal } from '../../context/context'
import { FaSearch } from 'react-icons/fa'
const SearchForm = () => {
  const {setQuery, query} = useGlobal()
  const inputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(inputRef.current.value)
    inputRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input ref={inputRef} placeholder="Search..." className='form-input' type="text"></input>
      <FaSearch className='icon' onClick={handleSubmit}/>
    </form>
  )
}

export default SearchForm

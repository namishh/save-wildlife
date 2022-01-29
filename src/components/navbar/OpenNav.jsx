import React from 'react'

import { useGlobal } from '../../context/context'
const OpenNav = () => {
  const {setNavOpen} = useGlobal()
  return (
    <div className='open-nav' onClick={() => {setNavOpen(true)}}>
      <div className="line"></div>
    </div>
  )
}

export default OpenNav

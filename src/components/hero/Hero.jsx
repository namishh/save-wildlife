import React from 'react'
import Wave from '../waves/Wave'
import {Link} from 'react-scroll'
import Text from './Text'
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <Text/>
      <Link smooth duration={1000} to='conserve' className='button-cool'>But Why?</Link>
      <Wave/>
    </div>
  )
}


export default Hero

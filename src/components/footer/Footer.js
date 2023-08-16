import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <div id="footer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '40px', borderTop: '1px solid #ddd' }}>
          <a href='https://github.com/neto1895' className='icon'>
            <FaGithub style={{ fontSize: '30px' }} />
          </a>
          <a href='https://www.linkedin.com/in/ernesto-cruz-rosales-977984137/' className='icon'>
            <BsLinkedin style={{ fontSize: '30px' }} />
          </a>
        </div>
      );
}

export default Footer


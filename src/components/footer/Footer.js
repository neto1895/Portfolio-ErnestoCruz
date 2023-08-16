import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { BsLinkedin, BsStackOverflow } from 'react-icons/bs'

const Footer = () => {
    return (
        <div id="footer">
            <a href='https://github.com/neto1895' className='icon'>
                <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/ernesto-cruz-rosales-977984137/' className='icon'>
                <BsLinkedin />
            </a>
            <a href='https://leetcode.com/user3621ud/' className='icon'>
                <BsStackOverflow />
            </a>
        </div>
    )
}

export default Footer


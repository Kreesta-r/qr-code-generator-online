import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <a href="/">
      <img src="/logo.png" alt=""
        height={50}
        width={50}
      />
      </a>

      <div className='taglines'>
        <a href="/"> 
        <span>QR Code Generator Online</span>
        <p>Transform Your Data into Dynamic QR Codes</p></a>
      </div>
    </div>
  )
}

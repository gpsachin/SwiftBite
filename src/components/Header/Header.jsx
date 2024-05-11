import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Dive into a world of culinary delights with our diverse menu, brimming with delectable dishes from around the globe. Embark on a delicious adventure and explore a symphony of flavors, guaranteed to tantalize your taste buds and leave you wanting more.</p>
        <a href='#explore-menu'><button >View menu</button></a>
      </div>
    </div>
  )
}

export default Header

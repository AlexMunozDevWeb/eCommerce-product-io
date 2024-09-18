import { dbLinks } from '../data/menu-link.js';
import { Cart } from './Cart.jsx';

import { v4 as uuidv4 } from 'uuid';

export const Header = ({activeMenu, setActiveMenu}) => {

  const handleToggle = () => {
    setActiveMenu( !activeMenu )
  }

  return (
    <>
      <header className="main-header" id="app-header">
        
        <div className="header-side left">

          <div
            onClick={handleToggle} 
            className={`hamburger hamburger--squeeze ${activeMenu ? 'is-active' : ''}`} >

            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>

          </div>

          <h1>sneakers</h1> 

          <ul className="wrapper-links-desktop">
            { dbLinks.map( (link) => (       
              <li key={uuidv4()} className="single-link">{link.name}</li>
            )) }
          </ul>

        </div>

        <div className="header-side right">

          <div className="cart-wrapper">

            <span className='quantity-cart'>3</span>
            <img 
              src={`/images/icon-cart.svg`} 
              alt="Imagen del carrito" 
              className="cart"
            />
            <div className="cart-box">
              <Cart />
            </div>

          </div>
          
          <img 
            src={`/images/image-avatar.png`} 
            alt="Imagen del avatar del usuario" 
            className="avatar"
          />
          
        </div>
      
      </header>
    </>
  )
}

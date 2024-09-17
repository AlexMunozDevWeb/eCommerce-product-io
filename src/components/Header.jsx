import { dbLinks } from '../data/menu-link.js';

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
              <li className="single-link">{link.name}</li>
            )) }
          </ul>

        </div>

        <div className="header-side right">
          <span className='quantity-cart'>3</span>
          <img 
            src={`/images/icon-cart.svg`} 
            alt="Imagen del carrito" 
            className="cart"
          />
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

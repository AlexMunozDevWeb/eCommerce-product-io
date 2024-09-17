import { dbLinks } from '../../data/menu-link.js';

export const MobileMenu = ({activeMenu, setActiveMenu}) => {

  const handleToggle = () => {
    setActiveMenu( !activeMenu )
  }

  return (
    <div className="menu-mobile">

      <img 
        src={`/images/icon-close.svg`} 
        alt="Botón de cierre del menú mobile"
        onClick={handleToggle}
      />

      <ul className='wrapper-links'>
        { dbLinks.map( (link) => (       
          <li className='single-link'>{link.name}</li>
        )) }
      </ul>

    </div>
  )
}

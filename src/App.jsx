import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { PopUp } from './components/popups/PopUp';

import 'normalize.css';
import './styles/styles.scss';

function App() {

  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <>
      
      <div className='container'>
        <Header 
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />

      </div>

      <div id="pop-up" className={ activeMenu ? 'open' : '' }>

        { activeMenu ? <PopUp 
                        activeMenu={activeMenu} 
                        setActiveMenu={setActiveMenu} /> 
                        
                      : '' }

      </div>

    </>
  )
}

export default App

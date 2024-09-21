import { useState } from 'react';

import { Header } from './components/Header';
import { PopUp } from './components/popups/PopUp';
import { ProductGallery } from './components/ProductGallery';
import { ProductDetails } from './components/ProductDetails';

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

      <section id="product-details">
        <ProductGallery />
        <ProductDetails />
      </section>

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

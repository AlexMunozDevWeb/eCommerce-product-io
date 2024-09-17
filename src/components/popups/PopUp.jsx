import { MobileMenu } from "./MobileMenu"

export const PopUp = ({activeMenu, setActiveMenu}) => {
  return (
    <>
      {activeMenu ? <MobileMenu activeMenu={activeMenu} 
                                setActiveMenu={setActiveMenu} /> 
                  : ''}
    </>
  )
}

import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import FooterComponent from '../FooterComponent/FooterComponent'
// truyen vao children va goi ra ben duoi header
const DefaultComponent = ({children}) => {
  return (
    <div>

        <HeaderComponent/>
        {children}
        <FooterComponent/>
    </div>
  )
}

export default DefaultComponent
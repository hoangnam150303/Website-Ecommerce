import React from 'react'
import HeaderComponent from '../HearderComponent/HeaderComponent'

const DefaultComponent = ({ children }) => {
    return (
        <div>
            <HeaderComponent />
            {children}
        </div>
    )
}

export default DefaultComponent
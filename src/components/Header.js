import React, { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'

import icons from './data/socialMediaData'
import IconSocial from './icons/IconSocial'
import IconLogo from './icons/IconLogo'

const Header = () => {

    // Divider
    const divider = 6.9

    // Base width
    const baseWidth = 1725

    // FHD width
    const widthFHD = 1920

    // Element width
    let [ width, setWidth ] = useState(baseWidth)

    // Element height
    let [ height, setHeight ] = useState(baseWidth / divider)

    // Listen for events
    useEffect(() => {
        
        // Resize function
        const handleResize = () => {

            // eslint-disable-next-line no-restricted-globals
            let newWidth = (isMobile) ? screen.width : window.innerWidth

            if (newWidth <= 1725) {
                setWidth(newWidth)
                setHeight(newWidth / divider)
            } else {
                let tempWidth = baseWidth + ((newWidth - widthFHD) / 2)
                setWidth(tempWidth)
                setHeight(tempWidth / divider)
            }
        }

        // Resize on first load if needed
        if (window.innerWidth !== widthFHD || isMobile)
            handleResize()
        
        // Add resize event listener        
        window.addEventListener('resize', handleResize)

        // Cleanup - remove event listener
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    
    return (

        <header className='header'>

            <svg viewBox='0 0 1725 250' width={width} height={height} className='header-svg'>
                <polygon points='0,0 1725,0 1725,250' />
            </svg>

            <IconLogo />

            <ul className='social-icons social-icons-header'>
                {icons.map(icon => <IconSocial key={icon.name} name={icon.name} href={icon.url} title={icon.title} />)}
            </ul>
            
        </header>
    )
}

export default Header

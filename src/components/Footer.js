import React, { useState, useEffect } from 'react'

import Button from './Button'
import icons from './data/socialMediaData'
import IconSocial from './icons/IconSocial'
import IconLogo from './icons/IconLogo'

const Footer = () => {

/*

    Update footer height on window resize
    Update bottom position of svg based on footer height minus 1
    Translate footer context based on available space


    1920px
np    footer: 368 (368 - 150 after transform)
    footer margin top: 200
    svg bottom: footer - 1

*/

    // Divider
    const divider = 6.43

    // Base widthz
    const baseWidth = 1920

    // Element width
    let [width, setWidth] = useState(baseWidth)

    // Element height
    let [height, setHeight] = useState(baseWidth / divider)

    // Listen for any change
    useEffect(() => {

        // Resize function
        const handleResize = () => {

            // New Width
            let newWidth = window.innerWidth

            // Update State values
            setWidth(newWidth)
            setHeight(newWidth / divider)
        }

        // Resize on first load if needed
        if (window.innerWidth !== baseWidth)
            handleResize()

        // Add resize event listener        
        window.addEventListener('resize', handleResize)

        // Cleanup - remove event listener
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    })

    return (
        <footer className='footer'>

            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 1920 298.375" className='bottom'>
                <path d="M0,0H1920V298.375L0,0Z" transform="translate(1920 298.375) rotate(180)" />
            </svg>

            <div className='container-fluid'>
                <div className='contact-wrapper'>
                    <div className='row contact=text'>
                        <div className='col-4'>
                            <p className='contact-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus ipsum, malesuada sed volutpat id, dignissim </p>
                        </div>
                    </div>

                    <div className='row contact-btn'>
                        <div className='col-4'>
                            <Button href='mailto:corneliu@corneliucirlan.com' title='Send a message' value="Let's work together" />
                        </div>
                    </div>
                </div>

                <div className='nav-footer'>
                    <ul className='nav icons-wrapper'>
                        {icons.map(icon => <IconSocial key={icon.name} name={icon.name} href={icon.url} title={icon.title} />)}
                    </ul>
                    <IconLogo class='icon-logo-footer' />
                </div>

            </div>
        </footer>
    )
}

export default Footer

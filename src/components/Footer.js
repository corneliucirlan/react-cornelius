import React, { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import useDimensions from 'react-use-dimensions'

import Button from './Button'
import icons from './data/socialMediaData'
import IconSocial from './icons/IconSocial'
import IconLogo from './icons/IconLogo'

const Footer = () => {
   
    // Divider
    const divider = 6.43

    // Base widthz
    const baseWidth = 1920

    // Element width
    let [width, setWidth] = useState(baseWidth)

    // Element svgHeight
    let [svgHeight, setSVGHeight] = useState(baseWidth / divider)

    const [ref, {height}] = useDimensions()

    const fHeight = 378
    const translateY = 150

    let footerStyles = !isMobile ? {
        marginTop: translateY + 'px',
        height:fHeight - translateY + 'px'
    } : null
    let transleteFooter = !isMobile ? {
        transform: 'translateY(-150px)'
    } : null
    

    // Listen for any change
    useEffect(() => {

        // Resize function
        const handleResize = () => {

            // New Width
            // eslint-disable-next-line no-restricted-globals
            let newWidth = isMobile ? screen.width : window.innerWidth

            // Update State values
            setWidth(newWidth)
            setSVGHeight(newWidth / divider)

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
        <footer className='footer' ref={ref} style={footerStyles}>
        {/* <footer className='footer' ref={ref}> */}

            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={svgHeight} viewBox="0 0 1920 298.375" className='footer-svg' style={{bottom: height  + 'px'}}>
                <path d="M0,0H1920V298.375L0,0Z" transform="translate(1920 298.375) rotate(180)" />
            </svg>

            <div className='container-fluid' style={transleteFooter}>
            {/* <div className='container-fluid'> */}
                <div className='contact-wrapper'>
                    <div className='contact=text'>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <p className='contact-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus ipsum, malesuada sed volutpat id, dignissim </p>
                        </div>
                    </div>

                    <div className='contact-btn'>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <Button href='mailto:corneliu@corneliucirlan.com' title='Send a message' value="Let's work together" />
                        </div>
                    </div>
                </div>

                <div className='nav-footer'>
                    <ul className='social-icons social-icons-footer'>
                        {icons.map(icon => <IconSocial key={icon.name} name={icon.name} href={icon.url} title={icon.title} />)}
                    </ul>
                    <IconLogo class='icon-logo-footer' />
                </div>

            </div>
        </footer>
    )
}

export default Footer

/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react'
import { isMobile, isMobileOnly } from 'react-device-detect'
import useDimensions from 'react-use-dimensions'

import icons from './data/socialMediaData'
import IconSocial from './icons/IconSocial'
import IconLogo from './icons/IconLogo'
import BackdropSVG from './backdropSVG'
import Button from './Button'
import homepage from './data/homepage'
import Metadata from './Metadata'

const SinglePage = () => {

    // dividerTop
    const dividerTop = 6.9

    // Base width
    const baseWidth = 1725

    // FHD width
    const widthFHD = 1920
    
    // SVG width
    let [svgWidth, setSVGWidth] = useState(baseWidth)
    
    // SVG height
    let [svgHeight, setSVGHeight] = useState(baseWidth / dividerTop)
    
    // Set footer as reference and get height    
    const [ref, { height }] = useDimensions()

    // Footer SVG Top position
    const footerSVGTop = isMobileOnly ? {top: `${height - svgHeight}px`} : {top: 'inherit'}

    // Footer height
    const footerHeight = screen.width < 576 ? `${svgHeight + 60}px` : `${svgHeight}px`

    // Listen for events
    useEffect(() => {

        // Resize function
        const handleResize = () => {

            // Get refreshed screen width
            let newWidth = (isMobile) ? screen.width : window.innerWidth

            // SVG should be full width
            if (newWidth <= baseWidth) {
                    setSVGWidth(newWidth)
                    setSVGHeight(newWidth / dividerTop)
                }

                // SVG should be smaller in width
                else {
                    let tempWidth = baseWidth + ((newWidth - widthFHD) / 2)
                    setSVGWidth(tempWidth)
                    setSVGHeight(tempWidth / dividerTop)
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
        <div className='wrapper'>

            <Metadata />

            <div className='container-fluid' ref={ref}>
                <header className='header'>
                    <BackdropSVG width={svgWidth} height={svgHeight} className='header-svg' />

                    <IconLogo />

                    <ul className='social-icons social-icons-header'>
                        {icons.map(icon => <IconSocial key={icon.name} name={icon.name} href={icon.url} title={icon.title} />)}
                    </ul>
                </header>

                <main className='main'>
                    <h1 className='home-h1'>{homepage.title}</h1>
                    <p className='intro'>{homepage.text}</p>
                </main>

                <footer className='footer' style={{ height: footerHeight }}>
                    <Button href='mailto:corneliu@corneliucirlan.com' title='Send a message' value="Let's work together" />
                </footer>
            </div>

            <BackdropSVG width={svgWidth} height={svgHeight} className='footer-svg' topPosition={footerSVGTop} />
        </div>
    )
}

export default SinglePage
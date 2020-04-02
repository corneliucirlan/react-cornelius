/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react'
import { isMobile, isMobileOnly } from 'react-device-detect'
import useDimensions from 'react-use-dimensions'

import icons from './data/socialMediaData'
import IconSocial from './icons/IconSocial'
import IconLogo from './icons/IconLogo'
import BackdropSVG from './backdropSVG'
import Button from './Button'

const SinglePage = () => {

    // dividerTop
    const dividerTop = 6.9

    // Base width
    const baseWidth = 1725

    // FHD width
    const widthFHD = 1920
    
    // Element width
    let [svgWidth, setSVGWidth] = useState(baseWidth)
    
    // Element height
    let [svgHeight, setSVGHeight] = useState(baseWidth / dividerTop)
    
    const [ref, { height }] = useDimensions()
    // const footerSVGTop = isMobileOnly ? {top: `${height + 30}px`} : {top: 'inherit'}
    const footerSVGTop = isMobileOnly ? {top: `${height - svgHeight}px`} : {top: 'inherit'}
    const footerHeight = screen.width < 576 ? `${svgHeight + 60}px` : `${svgHeight}px`

    // Listen for events
    useEffect(() => {

        // Resize function
        const handleResize = () => {

            // Get refreshed screen width
            let newWidth = (isMobile) ? screen.width : window.innerWidth

            // SVG should be full width
            if (newWidth <= 1725) {
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
            <div className='container-fluid' ref={ref}>
                <header className='header'>
                    <BackdropSVG width={svgWidth} height={svgHeight} className='header-svg' />

                    <IconLogo />

                    <ul className='social-icons social-icons-header'>
                        {icons.map(icon => <IconSocial key={icon.name} name={icon.name} href={icon.url} title={icon.title} />)}
                    </ul>
                </header>

                <main className='main'>
                    <h1 className='home-h1'>Hi, I'm Corneliu, and I'm a Developer</h1>
                    <p className='intro'>
                        Nunc a molestie nunc. Sed imperdiet, justo at sagittis cursus, sapien nibh sollicitudin sem, eget consequat turpis orci id metus. Quisque sit amet iaculis libero, in accumsan nunc. Aliquam ipsum mi, convallis a euismod at, molestie quis eros. Suspendisse ullamcorper bibendum sodales. Suspendisse vitae metus mauris. Aliquam erat volutpat. Fusce orci ex, euismod vel magna nec, placerat ultrices tortor. Cras tempus eros non eros interdum, vitae aliquam enim placerat.
                    </p>
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
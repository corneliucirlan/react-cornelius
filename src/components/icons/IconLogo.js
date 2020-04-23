import React from 'react'
import { Event } from './../Tracking'

import Icon from './Icon'

const IconLogo = props => {

    function ClickHandler(event) {
        event.preventDefault()

        // Track event in Google Analytics
        Event('Homepage', 'Click', 'Logo')
    }

    return (
        <a className='navbar-brand' href='/' onClick={ClickHandler}>
            <Icon name='logo' class={props.class} />
        </a>
    )
}

export default IconLogo

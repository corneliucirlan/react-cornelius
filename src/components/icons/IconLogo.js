import React from 'react'
import Icon from './Icon'

const IconLogo = props => {

    return (
        <a className='navbar-brand' href='/'>
            <Icon name='logo' class={props.class} />
        </a>
    )
}

export default IconLogo

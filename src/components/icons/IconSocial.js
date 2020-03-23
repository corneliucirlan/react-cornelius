import React from 'react'

import Icon from './Icon'

const IconSocial = props => {

    function ClickHandler(event) {
    	event.preventDefault()
    	window.open(props.href, '_blank')
    }

    return (
        <li className='social-icon'>
        	<a onClick={ClickHandler} href={props.href} title={props.title} rel='noopener noreferrer'>
                <Icon name={props.name} />
        	</a>
        </li>
    )
}

export default IconSocial

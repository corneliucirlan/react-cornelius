import React from 'react'

const Button = props => {

    function ClickHandler(event) {
        event.preventDefault()
        window.open(props.href, 'emailWindow')
    }

    return (
        <button onClick={ClickHandler} className='btn btn-primary' title={props.title}>{props.value}</button>
    )
}

export default Button

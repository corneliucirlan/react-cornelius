import React from 'react'

const Button = props => {

    function ClickHandler(event) {
        event.preventDefault()
        window.open(props.href, 'emailWindow')
    }

    return (
        <div>
            {/* <button onClick={ClickHandler} className='btn btn-outline-primary' title={props.title}>{props.value}</button> */}
            <button onClick={ClickHandler} className='btn btn-primary' title={props.title}>{props.value}</button>
        </div>
    )
}

export default Button

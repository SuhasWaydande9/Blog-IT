import React from 'react'

export default function Navbar(props) {
    return (
        <div className="Navbar"> 
            <div id="LOGO">{props.title}</div>
            {props.children}
        </div>
    )
}

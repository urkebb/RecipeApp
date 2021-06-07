import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css';

export default function Button(props) {



    return (
        <div>
            <Link to={props.to}>
                <button type={props.type} className={props.style} onSubmit={props.onSubmit} onClick={props.onClick}>{props.text}</button>
            </Link>
        </div>
    )
}

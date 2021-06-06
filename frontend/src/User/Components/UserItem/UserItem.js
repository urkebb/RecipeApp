import React from 'react'
import Card from '../../../Components/Card/Card'
import './UserItem.css'
import { Link } from 'react-router-dom'

export default function UserItem(props) {

    return (
        <li className="user-item">
            <Link className="link" to="/1/recipes">
                <Card className="user-item__content">
                    <div className="user-item__info">
                        <h2>{props.firstName} {props.lastName}</h2>
                        <p>id: {props.id}</p>
                        <p>email: {props.email}</p>
                        <p>password: {props.password}</p>
                    </div>
                </Card>
            </Link>
        </li>
    )
}
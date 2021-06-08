import React from 'react'
import UserItem from '../UserItem/UserItem'
import './UsersList.css'

export default function UsersList(props) {

    return (
        <ul className="users-list">
            {props.items.map(user => {
                return <UserItem
                    key={user.id}
                    id={user.id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                />

            })}
        </ul>
    );
}

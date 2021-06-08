import React, { useState, useEffect } from 'react'
import UserList from '../../User/Components/UserList/UsersList'

const users = [{
    id: 1,
    firstName: "John",
    lastName: "Doe",
},
{
    id: 2,
    firstName: "Uros",
    lastName: "Milic",
},
{
    id: 3,
    firstName: "Teona",
    lastName: "Nikolic",
},
{
    id: 4,
    firstName: "Marko",
    lastName: "Markovic",
},
{
    id: 5,
    firstName: "Lazar",
    lastName: "Lazarevic",
},
{
    id: 6,
    firstName: "Aleksandar",
    lastName: "Milic",
}];

export default function Users() {

    const [loadedUsers, setLoadedUsers] = useState([])

    useEffect(() => {
        const response = JSON.stringify(users);

        console.log("ovo dobijamo sa servera\n" + response);

        setLoadedUsers(JSON.parse(response));
    }, [])

    return (
        <div>
            <UserList items={loadedUsers} />
        </div>
    )
}

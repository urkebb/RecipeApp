import React, { useState, useEffect } from 'react'
import UserList from '../../User/Components/UserList/UsersList'

const users = [{
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@gmail.com",
    password: "johndoe",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2MzkxMjc3fQ.Gm4izs_9tT2raLF_yRHYqHUY9Ea_JCtXHjm3a7jzzZQ"
},
{
    id: 2,
    firstName: "Uros",
    lastName: "Milic",
    email: "uros.milic@gmail.com",
    password: "urosmilic",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2MzkxMjc3fQ.Gm4izs_9tT2raLF_yRHYqHUY9Ea_JCtXHjm3a7jzzZQ"
},
{
    id: 3,
    firstName: "Teona",
    lastName: "Nikolic",
    email: "teona.nikolic@gmail.com",
    password: "teonanikolic",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2MzkxMjc3fQ.Gm4izs_9tT2raLF_yRHYqHUY9Ea_JCtXHjm3a7jzzZQ"
},
{
    id: 4,
    firstName: "Marko",
    lastName: "Markovic",
    email: "marko.markovic@gmail.com",
    password: "markomarkovic",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2MzkxMjc3fQ.Gm4izs_9tT2raLF_yRHYqHUY9Ea_JCtXHjm3a7jzzZQ"
},
{
    id: 5,
    firstName: "Lazar",
    lastName: "Lazarevic",
    email: "lazar.lazarevic@gmail.com",
    password: "lazarlazarevic",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2MzkxMjc3fQ.Gm4izs_9tT2raLF_yRHYqHUY9Ea_JCtXHjm3a7jzzZQ"
},
{
    id: 6,
    firstName: "Aleksandar",
    lastName: "Milic",
    email: "aleksandar.milic@gmail.com",
    password: "aleksandarmilic",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2MzkxMjc3fQ.Gm4izs_9tT2raLF_yRHYqHUY9Ea_JCtXHjm3a7jzzZQ"
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

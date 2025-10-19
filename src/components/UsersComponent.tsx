import {useEffect, useState} from "react";
import type {IUser} from "../models/IUser.ts";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(response => {
                setUsers(response);
            })
        return () => {
            console.log('fetch done');
        }
    }, []);
    return (
        <div>
            {
                users.map(data => <UserComponent data={data} key={data.id} />)
            }
        </div>
    );
};

export default UsersComponent;
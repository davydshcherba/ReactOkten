import {useEffect, useState} from "react";
import type {IUser} from "../models/IUser.ts";
import {getUsers} from "../services/api.service.ts";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response);
            })

    }, []);


    return (

        <div>
            {
                users.map(data => <UserComponent data={data} key={data.id}/>)
            }

        </div>
    );
};

export default UsersComponent;
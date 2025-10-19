import {useEffect, useState} from "react";
import type {IUser} from "../models/IUser.ts";
import {getUsers} from "../services/api.service.ts";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [item, setItems] = useState<IUser | null>(null);

    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response);
            })

    }, []);

    const foo = (item: IUser) => {
        setItems(item);
    }
    return (
        <div>
            {
                item && <div>{JSON.stringify(item)}</div>
            }
            {
                users.map(data => <UserComponent foo={foo} data={data} key={data.id}/>)
            }
        </div>
    );
};

export default UsersComponent;
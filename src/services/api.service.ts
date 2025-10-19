import type {IUser} from "../models/IUser.ts";

const getUsers = async (): Promise<IUser[]> => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
    return users;
}


export {
    getUsers,
}
import type {IUser} from "../models/IUser.ts";

const getUsers = async (): Promise<IUser[]> => {
    const users = await fetch(import.meta.env.VITE_APP_URL)
        .then(res => res.json())
    return users;
}


export {
    getUsers,
}
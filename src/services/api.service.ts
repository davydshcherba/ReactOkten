import type {ITodo} from "../models/ITodo.ts";

export const getTodos = async (): Promise<ITodo[]> => {
    const todos = await fetch(import.meta.env.VITE_APP_URL)
        .then(res => res.json())
    return todos;
}


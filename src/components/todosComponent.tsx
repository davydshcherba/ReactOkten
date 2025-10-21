import {useEffect, useState} from "react";
import TodoComponent from "./todoComponent.tsx";
import type {ITodo} from "../models/ITodo.ts";
import {getTodos} from "../services/api.service.ts";

const UsersComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        console.log("useEffect викликався");

        getTodos()
            .then(response => {
                console.log("Отримали дані:", response);
                setTodos(response);
            })
            .catch(error => {
                console.error("Помилка:", error);
            });

        return () => {
            console.log("cleanup called");
        }
    }, []);

    return (
        <div className={"m-5"}>
            {
                todos.map((todo) => <TodoComponent data={todo} key={todo.id}/>)
            }
        </div>
    );
};

export default UsersComponent;
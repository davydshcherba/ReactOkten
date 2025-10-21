import type {FC} from "react";
import type {ITodo} from "../models/ITodo.ts";

type TodoPropType = {
    data: ITodo;
}

const TodoComponent:FC<TodoPropType> = ({data}) => {
    return (
        <div>
        <div className={"backdrop-blur-2xl bg-amber-100 w-50 p-7 rounded-3xl shadow-2xl"}>
            <p>For User with id: {data.userId}</p>
            <h2 className={"font-serif font-light"}>{data.title}</h2>
            <h3 className={"font-bold"}>Status: {data.completed.toString()}</h3>
        </div>
            <br/>
        </div>
    );
};

export default TodoComponent;
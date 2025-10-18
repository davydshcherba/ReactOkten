import type {FC,ReactNode} from "react";

type MyComponentPropsType = {
    title: string;
    children?: ReactNode;
}

const MyComponent:FC<MyComponentPropsType> = ({title,children}) => {
    return (
        <div>4
            <h1>{title}</h1>
            <p>{children}</p>
        </div>
    );
};

export default MyComponent;
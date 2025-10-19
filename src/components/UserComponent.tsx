import type {FC} from "react";
import type {IUser} from "../models/IUser.ts";

type UserPropType = {
    data: IUser;
    foo: (item: IUser) => void;
}
const UserComponent: FC<UserPropType> = ({data, foo}) => {
    return (
        <div>
            <div>{data.name}</div>
            <button onClick={() => {
                foo(data)
            }}>details
            </button>
        </div>
    );
};

export default UserComponent;
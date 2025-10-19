import type {FC} from "react";
import type {IUser} from "../models/IUser.ts";

type UserPropType = {
    data: IUser;
}
const UserComponent:FC<UserPropType> = ({data}) => {
    return (
        <div>
            <div>{data.name}</div>
        </div>
    );
};

export default UserComponent;
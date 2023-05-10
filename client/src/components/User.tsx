import { FC } from "react";
import { UserData } from "./interface";

const User: FC<UserData> = ({ data: { id, name } }) => {
  return (
    <li key={id}>
      <p>{name}</p>
    </li>
  );
};

export default User;

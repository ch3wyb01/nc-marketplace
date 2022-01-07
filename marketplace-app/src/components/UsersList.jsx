import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  });

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.username}>
            <p>{user.username}</p>
            <img src={user.avatar_url} alt={user.username} />
          </li>
        );
      })}
    </ul>
  );
};

export default UsersList;

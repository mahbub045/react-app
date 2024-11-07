import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "./services/api-client";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const res = await apiClient.get<User[]>("/users");
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    apiClient.delete("/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updateUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updateUser : u)));
    apiClient.patch("/users/" + user.id, updateUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <>
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}{" "}
              <div className="d-flex gap-3">
                <button
                  className="btn btn-outline-success"
                  onClick={() => updateUser(user)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </div>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
export default App;

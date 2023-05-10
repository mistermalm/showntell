/* eslint-disable @typescript-eslint/no-explicit-any */
import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";
import User from "./User";
import { UserType } from "./interface";
import { useEffect, useState } from "react";

const AppContent = () => {
  const [data, setData] = useState<UserType[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const jsonData = await response.json();

        setData(jsonData);
      } catch (err) {
        const error = err as Error;
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {data.length === 0 ? (
        <>Loading...</>
      ) : (
        <>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>

          <h1>Vite + React</h1>

          <ul>
            {data.map((user: UserType) => (
              <User key={user.id} data={user} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default AppContent;

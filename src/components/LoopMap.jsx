import React from "react";

function LoopMap() {
  const userData = [
    {
      name: "Anil",
      age: 29,
      email: "anil@test.com",
      id: 1,
    },
    {
      name: "Sam",
      age: 36,
      email: "sam@test.com",
      id: 2,
    },
    {
      name: "Peter",
      age: 20,
      email: "peter@test.com",
      id: 3,
    },
    {
      name: "Bruce",
      age: 50,
      email: "bruce@test.com",
      id: 4,
    },
  ];
  return (
    <>
      <h1>Loop in JSX with Map Function</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default LoopMap;

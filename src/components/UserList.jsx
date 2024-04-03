import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [data, setData] = useState({});
  const [isClick, setIsClick] = useState(false);

  const fetchData = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((resdata) => {
        console.log(resdata);
        setData(resdata);
        setIsClick(true);
      })
      .catch((error) => console.log(error));
  };

  // Empty dependency array to ensure effect runs only once

  return (
    <>
      <button className='btn' onClick={fetchData} style={{backgroundColor:"red"}}>Get User List</button>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>
        <tbody>
          {isClick ? (
            data.data && data.data.map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td><img src={item.avatar} alt={`${item.first_name}'s avatar`} /></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data found to display</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default UserList;

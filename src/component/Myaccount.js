import React, { useEffect, useState } from 'react';

const MyAccount = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
      setUser(userData);
    }
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-account">
      <h2>My Account</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Name:</strong> {user.name ? user.name : 'N/A'}</p> {/* Gracefully handle missing data */}
      <p><strong>Username:</strong> {user.username ? user.username : 'N/A'}</p> {/* Gracefully handle missing data */}

      {/* You can display more details based on the response data */}
    </div>
  );
};

export default MyAccount;

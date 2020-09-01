import React, { useState, useEffect } from 'react';

interface Users {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  title: string;
  picture: string;
}

function MainView(): JSX.Element {
  const [usersList, setUsersList] = useState<Users[]>([]);

  useEffect(() => {
    // getUsersList();
  }, []);

  const getUsersList = async () => {
    const response = await fetch('/api/users');
    if (response) {
      const responseJSON = await response.json();
      console.log('responseJSON = ', responseJSON);

      if (responseJSON.result && responseJSON.result.users) {
        setUsersList(responseJSON.result.users);
      }
    }
  };

  return (
    <div>
      <h1>MainView</h1>
    </div>
  );
}

export default MainView;

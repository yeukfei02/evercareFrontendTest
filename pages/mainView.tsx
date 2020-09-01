import React, { useState, useEffect } from 'react';

import TableView from '../components/TableView';

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
    getUsersList();
  }, []);

  const getUsersList = async () => {
    const response = await fetch(`/api/users`);
    if (response) {
      const responseJSON = await response.json();
      console.log('responseJSON = ', responseJSON);

      if (responseJSON.result && responseJSON.result.users) {
        setUsersList(responseJSON.result.users);
      }
    }
  };

  return (
    <div style={{ padding: 60 }}>
      <TableView usersList={usersList} getUsersList={() => getUsersList()} />
    </div>
  );
}

export default MainView;

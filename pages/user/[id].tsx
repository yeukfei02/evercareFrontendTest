import React from 'react';
import { useRouter } from 'next/router';

function User(): JSX.Element {
  const router = useRouter();

  const { id } = router.query;
  console.log('id = ', id);

  return <div>user id</div>;
}

export default User;

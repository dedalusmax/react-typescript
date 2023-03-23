import React, { useState } from 'react';

interface AppProps {
  headerText: string;
  extraText?: string;
}

interface User {
  name: string,
  age: number,
  country: string,
  address: {
    street: string,
    number: number,
    zip: string
  },
  admin: boolean
}

export default function App({headerText, extraText = 'default text'} : AppProps) {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = () => setUser({
    name: 'Ratko',
    age: 46,
    country: 'Croatia',
    address: {
      street: 'Main st.',
      number: 22,
      zip: '22323'
    },
    admin: false
  });

  return (
    <>
      <h1>{headerText}</h1>
      <p>{extraText}</p>
      <br />
      <button onClick={fetchUser}>Fetch</button>
      {user && <p>Welcome {user.name}</p>}      
    </>
  );
}

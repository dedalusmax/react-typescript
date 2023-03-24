import { DataGrid } from './Components/DataGrid';

export interface User {
  id: number;
  name: string;
  age: number;
}

export default function App() {
  const users: User[] = [
    { id: 1, name: "John", age: 55 },
    { id: 2, name: "Mitchel", age: 23 },
    { id: 3, name: "Mike", age: 50 }
  ];

  return (
    <>
      <DataGrid items={users} />
    </>
  );
}

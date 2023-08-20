import CSS_App from './App.module.css';

import AddUser from './Components/AddUser/AddUser';
import OutputUsers from './Components/OutputUsers/OutputUsers';
import Card from './Components/Card/Card';
import { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState();

  return (
    <>
      <AddUser usersList={users} setUsers={setUsers} />
      <OutputUsers usersList={users} />
    </>
  );
};

export default App;

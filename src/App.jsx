import CSS_App from './App.module.css';

import AddUser from './Components/AddUser/AddUser';
import OutputUsers from './Components/OutputUsers/OutputUsers';
import Card from './Components/Card/Card';
import { useState } from 'react';

const App = () => {
  //const [users, setUsers] = useState([{}]);
  const TEST_USERS = [
    { userID: 1, userName: 'Vin', userAge: 23 },
    { userID: 2, userName: 'Von', userAge: 40 },
    { userID: 3, userName: 'Van', userAge: 26 },
  ];
  const [users, setUsers] = useState();

  return (
    <div className={CSS_App.App}>
      <Card>
        <AddUser usersList={users} setUsers={setUsers} />
      </Card>
      <Card>{<OutputUsers usersList={users} />}</Card>
    </div>
  );
};

export default App;

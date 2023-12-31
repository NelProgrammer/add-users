import React from 'react';
import CSS_OutputUsers from './OutputUsers.module.css';
import Card from '../Card/Card';

const OutputUsers = (props) => {
  const usersList = props.usersList;
  return (
    <Card>
      <>
        {!usersList && <div className={CSS_OutputUsers.NoOutput}>No Users</div>}
        {usersList && (
          <div className={CSS_OutputUsers.OutputUsers}>
            <h3>Users:</h3>
            <ul>
              {usersList.map((eachUser) => (
                <li key={eachUser.userID}>
                  {eachUser.userName} ( {eachUser.userAge} years old)
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    </Card>
  );
};

export default OutputUsers;

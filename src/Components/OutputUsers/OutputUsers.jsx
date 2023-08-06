import CSS_OutputUsers from './OutputUsers.module.css';

const OutputUsers = (props) => {
  const usersList = props.usersList;
  return (
    <div className={CSS_OutputUsers.OutputUsers}>
      <h3>Users:</h3>
      {!usersList || (usersList.length === 0 && <div>-</div>)}
      {usersList.length > 0 && (
        <ul>
          {usersList.map((eachUser) => (
            <li key={eachUser.userID}>
              {eachUser.userName} ( {eachUser.userAge} years old)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OutputUsers;

import { useState } from 'react';
import CSS_AddUder from './AddUser.module.css';

import ErrorModal from '../ErrorModal/ErrorModal';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredUseAge, setEnteredUseAge] = useState('');
  const [isError, setIsError] = useState(false);

  const handle_formsubmit = (event) => {
    event.preventDefault();
    const TestUser2Add = {
      userName: enteredUserName,
      userAge: +enteredUseAge,
    };

    if (
      TestUser2Add.userAge === undefined ||
      TestUser2Add.userAge === '' ||
      isNaN(TestUser2Add.userAge) ||
      TestUser2Add.userName === undefined ||
      TestUser2Add.userName === ''
    ) {
      <ErrorModal displayModal={true} />;
    } else {
      const user2Add = {
        userID: props.usersList === undefined ? 1 : props.usersList.length + 1,
        userName: enteredUserName,
        userAge: +enteredUseAge,
      };
      setIsError(false);
      props.setUsers((prevUsersList) =>
        prevUsersList === undefined ? [user2Add] : [...prevUsersList, user2Add]
      );
    }
  };

  const handleChangeUserName = (event) => {
    const input = event.target.value;
    if (!input || input === '') {
      setIsError(true);
    } else {
      setIsError(false);
      setEnteredUserName(input);
    }
  };

  const handleChangeUserAge = (event) => {
    const input = event.target.value;
    if (isNaN(+input) || input === 0) {
      setIsError(true);
    } else {
      setIsError(false);
      setEnteredUseAge(input);
    }
  };

  return (
    <div className={CSS_AddUder.AddUser}>
      {isError === true && <ErrorModal />}
      {isError === false && (
        <form onSubmit={handle_formsubmit}>
          <div className={CSS_AddUder.InputDiv}>
            <label htmlFor="userNameInput" className={CSS_AddUder.InputLabel}>
              <p>User Name</p>
            </label>
            <input
              type="text"
              id="userNameInput"
              onChange={handleChangeUserName}
            />
          </div>
          <div className={CSS_AddUder.InputDiv}>
            <label htmlFor="userAgeInput" className={CSS_AddUder.InputLabel}>
              <p>User Age</p>
            </label>
            <input
              type="number"
              id="userAgeInput"
              onChange={handleChangeUserAge}
            />
          </div>
          <div>
            <button className={CSS_AddUder.InputButton}>Add User</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddUser;

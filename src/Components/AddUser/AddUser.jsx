import { useState } from 'react';
import CSS_AddUser from './AddUser.module.css';
import Card from '../Card/Card';
import ErrorModal from '../ErrorModal/ErrorModal';
import Button from '../Button/Button';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState();
  const [enteredUserAge, setEnteredUserAge] = useState();
  const [inputError, setInputError] = useState();

  const handle_formsubmit = (event) => {
    event.preventDefault();

    if (!enteredUserName || enteredUserName.trim().length === 0) {
      setInputError({
        errorTitle: 'Error on User Name',
        errorMsg: 'User Name can not be empty',
        errorEntry: 'a Space or Nothing',
      });
    } else if (!enteredUserAge || isNaN(+enteredUserAge)) {
      setInputError({
        errorTitle: 'Error on Age',
        errorMsg: 'Enter a valid non-Empty Age',
        errorEntry: 'Nothing or a Non-Number',
      });
    } else if (enteredUserAge < 1) {
      setInputError({
        errorTitle: 'Error on Age',
        errorMsg: 'Age must be greater than 0',
        errorEntry: enteredUserAge,
      });
    } else {
      setInputError();
      props.setUsers((prevUsersList) =>
        prevUsersList === undefined
          ? [
              {
                userID: 1,
                userName: enteredUserName,
                userAge: +enteredUserAge,
              },
            ]
          : [
              ...prevUsersList,
              {
                userID: props.usersList.length + 1,
                userName: enteredUserName,
                userAge: +enteredUserAge,
              },
            ]
      );
      setEnteredUserName('');
      setEnteredUserAge('');
    }
  };

  const handleChangeUserName = (event) => {
    let input = event.target.value;
    if (input === undefined || input.trim().length === 0) {
      // Do Nothing
    } else {
      setEnteredUserName(input);
    }
  };

  const handleChangeUserAge = (event) => {
    let input = event.target.value;
    if (isNaN(input) || input === 0) {
      // Do Nothing
    } else {
      setEnteredUserAge(input);
    }
  };

  const handleErrorInput = () => {
    setInputError(null);
  };

  return (
    <Card>
      {
        <form onSubmit={handle_formsubmit} className={CSS_AddUser.AddUser}>
          <div className={CSS_AddUser.InputDiv}>
            <label htmlFor="userNameInput" className={CSS_AddUser.InputLabel}>
              User Name
            </label>
            <input
              type="text"
              id="userNameInput"
              value={enteredUserName}
              className={CSS_AddUser.InputBox}
              onChange={handleChangeUserName}
            />
          </div>
          <div className={CSS_AddUser.InputDiv}>
            <label htmlFor="userAgeInput" className={CSS_AddUser.InputLabel}>
              User Age
            </label>
            <input
              type="number"
              id="userAgeInput"
              value={enteredUserAge}
              className={CSS_AddUser.InputBox}
              onChange={handleChangeUserAge}
            />
          </div>
          <div className={CSS_AddUser.ButtonDiv}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      }

      {inputError && ( //Exploit the fact calling the display of the Modal depends on this being True instead of using DOM display properties. Sent down the beanstalk.
        <ErrorModal
          errorTitle={inputError.errorTitle}
          errorMsg={inputError.errorMsg}
          errorEntry={inputError.errorEntry}
          onConfirm={handleErrorInput}
        />
      )}
    </Card>
  );
};

export default AddUser;

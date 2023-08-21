import { useState, useRef } from 'react';
import CSS_AddUser from './AddUser.module.css';
import Card from '../Card/Card';
import ErrorModal from '../ErrorModal/ErrorModal';
import Button from '../Button/Button';

const AddUser = (props) => {
  const inputNameRef = useRef();
  const inputAgeRef = useRef();

  const [inputError, setInputError] = useState();

  const handle_formsubmit = (event) => {
    event.preventDefault();
    const enteredUserName_Ref = inputNameRef.current.value;
    const enteredUserAge_Ref = inputAgeRef.current.value;

    if (!enteredUserName_Ref || enteredUserName_Ref.trim().length === 0) {
      setInputError({
        errorTitle: 'Error on User Name',
        errorMsg: 'User Name can not be empty',
        errorEntry: 'a Space or Nothing',
      });
    } else if (!enteredUserAge_Ref || isNaN(+enteredUserAge_Ref)) {
      setInputError({
        errorTitle: 'Error on Age',
        errorMsg: 'Enter a valid non-Empty Age',
        errorEntry: 'Nothing or a Non-Number',
      });
    } else if (enteredUserAge_Ref < 1) {
      setInputError({
        errorTitle: 'Error on Age',
        errorMsg: 'Age must be greater than 0',
        errorEntry: enteredUserAge_Ref,
      });
    } else {
      setInputError();
      props.setUsers((prevUsersList) =>
        prevUsersList === undefined
          ? [
              {
                userID: 1,
                userName: enteredUserName_Ref,
                userAge: +enteredUserAge_Ref,
              },
            ]
          : [
              ...prevUsersList,
              {
                userID: props.usersList.length + 1,
                userName: enteredUserName_Ref,
                userAge: +enteredUserAge_Ref,
              },
            ]
      );
      inputNameRef.current.value = '';
      inputAgeRef.current.value = '';
    }

    /* Origional State Solution
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
    } */
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
              className={CSS_AddUser.InputBox}
              ref={inputNameRef}
            />
          </div>
          <div className={CSS_AddUser.InputDiv}>
            <label htmlFor="userAgeInput" className={CSS_AddUser.InputLabel}>
              User Age
            </label>
            <input
              type="number"
              id="userAgeInput"
              className={CSS_AddUser.InputBox}
              ref={inputAgeRef}
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

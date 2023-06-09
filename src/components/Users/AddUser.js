import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [addUserName, setAddUserName] = useState("");
  const [addUserAge, setAddUserAge] = useState("");
  const [error, setError] = useState();//Intial undefined -> Falsy values
  const [isActive, setIsActive] = useState(true);

  const addUserHandler = (event) => {
    event.preventDefault();
    //Validation
    if (addUserName.trim().length === 0 || addUserAge.trim().length === 0) {
      setError({
        heading: 'Invalid Input',
        body: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }
    if (+addUserAge < 1) {
      setError({
        heading: 'Invalid age',
        body: 'Please enter a valid age (> 0).'
      });
      return;
    }
    //Managing List via props pass details in app.js then render it in userdata from app.js
    props.onAddUser(addUserName, addUserAge);
    //Reseting Logic
    setAddUserName("");
    setAddUserAge("");
  };

  const userNameHandler = (event) => {
    if(event.target.value.trim().length <= 7) {
      setIsActive(false);
    }
    if(event.target.value.trim().length > 8) {
      setIsActive(true);
    }
    setAddUserName(event.target.value);
    
  };

  const userAgeHandler = (event) => {
    setAddUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  const cancelHandler = () => {
    props.onRemove();
  }

  return (
    <div>
      {error && <ErrorModal onConfirm = {errorHandler} heading= {error.heading} body={error.body}/>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={addUserName}
            onChange={userNameHandler}
            className={`${!isActive && styles.active}`}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={addUserAge}
            onChange={userAgeHandler}
          />
          <Button type="submit">Add User</Button>
          <Button className={styles.left} onClick = {cancelHandler}>Cancel</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

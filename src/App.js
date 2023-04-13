import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Add from "./components/Users/Add";

const App = () => {

  const [ addUserList, setAddUserList ] = useState([]);
  const [ showForm, setShowForm ] = useState(false);

  const chnageUserHandler = (uName, uAge) => {
    setAddUserList((prev) => {
      return [...prev, {name:uName, age: uAge, id: Math.random().toString()}];
    });
  }

  const addHandler = () => {
    setShowForm(true);
  }

  const removeHandler = () => {
    setShowForm(false);
  }


  return (
    <div>
      {showForm ? <AddUser onRemove = {removeHandler} onAddUser = {chnageUserHandler}/> : <Add onAdd = {addHandler} />}
      <UsersList users = {addUserList} />
    </div>
  );
};

export default App;

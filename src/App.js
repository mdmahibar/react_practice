import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {

  const [ addUserList, setAddUserList ] = useState([]);

  const chnageUserHandler = (uName, uAge) => {
    setAddUserList((prev) => {
      return [...prev, {name:uName, age: uAge, id: Math.random().toString()}];
    });
  }

  return (
    <div>
      <AddUser onAddUser = {chnageUserHandler}/>
      <UsersList users = {addUserList} />
    </div>
  );
};

export default App;

import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./Add.module.css";

const Add = (props) => {

  const clickHandler = () => {
    props.onAdd();
  };

  return (
    <Card className={styles.add}>
      <Button onClick={clickHandler}>Add Users</Button>
    </Card>
  );
};

export default Add;

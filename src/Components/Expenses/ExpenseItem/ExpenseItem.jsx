import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

import React, { useState } from "react";

function ExpenseItem(props) {
  //React Hooks , All the hooks stats with the word "use" and all these hooks must only
  // be called inside of React component functions :
  // 1.  useState
  const [title, setTitle] = useState(props.title);

  // let title = props.title;

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Edit</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;

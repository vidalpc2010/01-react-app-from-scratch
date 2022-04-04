import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {
//   let expensesContent = <p>No expenses found.</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expeses.</h2>
  }

  return <ul className="expenses-list">
      {props.items.map((expense, index) => (
      <ExpenseItem
        key={index}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ))}
  </ul>;
};

export default ExpensesList;

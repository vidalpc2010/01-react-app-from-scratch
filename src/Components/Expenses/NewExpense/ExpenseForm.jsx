import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Approch 1 to Update the state   'Multi State Aproch'
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  // // Best Approch to Update the State
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);

    // *****************************************************************************+
    // Approch 1 to Update the state
    // setEnteredTitle(event.target.value);

    // Approch 2 to Update the state
    // setUserInput({
    //     ...userInput, enteredTitle: event.target.value
    // });

    // Best Approch to Update the State
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });

    // ******************************************************************************
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);

    // setUserInput({
    //     ...userInput, enteredAmount: event.target.value
    // });

    // Best Approch to Update the State
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);

    // setUserInput({
    //     ...userInput, enteredDate: event.target.value
    // });

    // Best Approch to Update the State
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("submited!!");

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

  

    // console.log(expenseData);

    props.onSaveExpenseData(expenseData);

    // setEnteredTitle("");
    // setEnteredDate("");
    // setEnteredAmount("");

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
            required
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
            type="number"
            required
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

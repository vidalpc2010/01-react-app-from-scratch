import "./Expenses.css";
import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 

  return (
    <Card className="expenses">
      {/* ****************************]ExpensesFilter is a CONTROLED COMPONENT */}
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* ****************************/}

      {/* {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filteredExpenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))
      )} */}

      <ExpensesChart expenses={filteredExpenses}/>

      {/* /////////////////////////////  OPTION 3 BEST APROACH   //////////////////*/}
      <ExpensesList items={filteredExpenses}  />

      {/* /////////////////////////////////TRICK OF JAVASCRIPT  filteredExpenses.length === 0 && <p>No expenses found.</p>*/}
      {/* /////////////////////////////  OPTION 2   //////////////////*/}
      {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))} */}

      {/* /////////////////////////////  OPTION 1   //////////////////*/}
      {/* <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      ></ExpenseItem> */}
    </Card>
  );
}

export default Expenses;

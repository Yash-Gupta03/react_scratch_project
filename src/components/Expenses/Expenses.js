import React, { useState } from "react";

import ExpensesChart from "./ExpensesChart";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseMessage = <p>No elements found</p>;
  let singleMessage = <p></p>;

  if (filteredExpenses.length > 0) {
    expenseMessage = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  if (filteredExpenses.length === 1) {
    singleMessage = <p>Only single Expense here. Please add more...</p>;
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {expenseMessage}
        {singleMessage}
      </Card>
    </div>
  );
};

export default Expenses;

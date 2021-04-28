import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

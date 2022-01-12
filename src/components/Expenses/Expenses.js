import React from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react/cjs/react.development';
import ExpensesList from './ExpensesList';

const Expenses = (props) =>
{

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear =>
    {
      setFilteredYear(selectedYear)
      console.log(selectedYear);
    } 

    const filteredExpenses = props.items.filter(expense =>
      {
        return expense.date.getFullYear().toString() === filteredYear;
      });

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList items = {filteredExpenses}/>
        </Card>
      </div>
    );
}

export default Expenses;
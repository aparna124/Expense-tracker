import React from 'react';
import { useState } from 'react/cjs/react.development';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) =>
{
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) =>
    {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    const startEditingHandler = () =>
    {
        setIsEditing(true);
    }

    return (
    <div className="new-expense">
        <button onclick={startEditingHandler}>Add New Expense</button>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    );
}

export default NewExpense;
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
import { useState } from 'react';

function NewExpense(props) {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData)
        setIsEditing(false);
    }

    const [isEditing, setIsEditing] = useState(false);

    const isEditingHandler = () => {
        setIsEditing(true);
    }

    const cancelHandler = () => {
        setIsEditing(false);
    }

    return <div className='new-expense'>
        {!isEditing && <button onClick={isEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />}

    </div>
}

export default NewExpense;

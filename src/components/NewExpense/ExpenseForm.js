import './ExpenseForm.css'
import { useState } from 'react';

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    function printer() {
        console.log(enteredTitle, enteredAmount, enteredDate)
    }

    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'title') {
            setEnteredTitle(value);
            // and so on for other handlers if want to go this route...
            //if (identifier === 'amount') {
            // setEnteredAmount(value);
        }
    }

    const submitter = (event) => {
        event.preventDefault(); // prevents page reload
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData); // pass data up to parent component
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={submitter}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={(event) => inputChangeHandler('title', event.target.value)} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2023-12-31" />
            </div>
        </div>
        <div className='new-expense__actions'>
            {/* <button onClick={printer}>Add Expense</button> */}
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;

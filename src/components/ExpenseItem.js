import {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    // const expenseDate = new Date(2023, 11, 10);
    // const expenseItem = 'Grocery';
    // const expenseAmount = 5000;
    // const location = 'Indore'

    const [title, setTitle] = useState(props.title);

    const [amount, setAmount] = useState(props.amount);

    const deleteExpense = () => {
        setTitle('new Title')
        console.log(title);
    }
    
    const ExpenseAmount = () => {
        setAmount(5000);
    }

    return (
        <div className='expense-item'>
        <ExpenseDate date= {props.date}/>
        <div className='expense-item__description'>{title}</div>
        <div className='expense-item__description'>{props.location}</div>
        <div className='expense-item__price'>{amount}</div>
        <button onClick={deleteExpense}>Delete</button>
        <button onClick={ExpenseAmount}>Amount</button>
        </div>
    )
}

export default ExpenseItem;
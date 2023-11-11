import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    // const expenseDate = new Date(2023, 11, 10);
    // const expenseItem = 'Grocery';
    // const expenseAmount = 5000;
    // const location = 'Indore'

    const deleteExpense = () => {
        console.log('This is to delete a expense');
    }
    

    return (
        <div className='expense-item'>
        <ExpenseDate date= {props.date}/>
        <div className='expense-item__description'>{props.title}</div>
        <div className='expense-item__description'>{props.location}</div>
        <div className='expense-item__price'>{props.amount}</div>
        <button onClick={deleteExpense}>Delete</button>
        </div>
    )
}

export default ExpenseItem;
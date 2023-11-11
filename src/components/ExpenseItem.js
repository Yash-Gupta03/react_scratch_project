import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    // const expenseDate = new Date(2023, 11, 10);
    // const expenseItem = 'Grocery';
    // const expenseAmount = 5000;
    // const location = 'Indore'
    

    return (
        <div className='expense-item'>
        <ExpenseDate date= {props.date}/>
        <div className='expense-item__description'>{props.title}</div>
        <div className='expense-item__description'>{props.location}</div>
        <div className='expense-item__price'>{props.amount}</div>
        </div>
    )
}

export default ExpenseItem;
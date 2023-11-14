import {useState} from 'react'

const ExpenseForm = (props) => {

    const [title, enteredTitle] = useState('')
    const [date, enteredDate] = useState('')
    const [amount, enteredAmount] = useState('')

    const titleHandler = (event) => {
        console.log(event.target.value);
        enteredTitle(event.target.value);
    }

    const amountHandler = (event) => {
        console.log(event.target.value);
        enteredAmount(event.target.value);
    }

    const dateHandler = (event) => {
        console.log(event.target.value);
        enteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        props.onSaveExpenseData(expenseData)

        enteredTitle('');
        enteredDate('');
        enteredAmount('');
    }


    return (
        <div>
            <form action="#" onSubmit={submitHandler}>
                <label htmlFor="title">Title</label>
                <input type="text" value={title} onChange={titleHandler}/>
                <label htmlFor="amount">Amount</label>
                <input type="text" value={amount} onChange={amountHandler} />
                <label htmlFor="date">Date</label>
                <input type="date" value={date} onChange={dateHandler}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ExpenseForm;
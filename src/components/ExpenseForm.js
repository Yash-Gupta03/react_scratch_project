import {useState} from 'react'

const ExpenseForm = () => {

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


    return (
        <div>
            <form action="#">
                <label htmlFor="title">Title</label>
                <input type="text" onChange={titleHandler}/>
                <label htmlFor="amount">Amount</label>
                <input type="text" onChange={amountHandler} />
                <label htmlFor="date">Date</label>
                <input type="date" onChange={dateHandler}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ExpenseForm;
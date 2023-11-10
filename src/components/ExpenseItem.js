function ExpenseItem(props) {

    // const expenseDate = new Date(2023, 11, 10);
    // const expenseItem = 'Grocery';
    // const expenseAmount = 5000;
    // const location = 'Indore'

    return (
        <div>
        <h4>{props.title}</h4>
        <h4>{props.amount}</h4>
        <h4>{props.location}</h4>
        </div>
    )
}

export default ExpenseItem;
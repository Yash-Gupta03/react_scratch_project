function ExpenseItem() {

    const expenseDate = new Date(2023, 11, 10);
    const expenseItem = 'Grocery';
    const expenseAmount = 5000;
    const location = 'Indore'

    return (
        <div>
        <div><h2>{expenseDate}</h2></div>
        <div><h4>{expenseItem}</h4></div>
        <div><h4>{expenseAmount}</h4></div>
        <div><h4>{location}</h4></div>
        </div>
    )
}

export default ExpenseItem;
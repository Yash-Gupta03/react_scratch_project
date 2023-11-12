const ExpenseForm = () => {
    const titleHandler = (event) => {
        console.log(event.target.value);
    }
    return (
        <div>
            <form action="#">
                <label htmlFor="title">Title</label>
                <input type="text" onChange={titleHandler}/>
                <label htmlFor="amount">Amount</label>
                <input type="text" />
                <label htmlFor="location">Location</label>
                <input type="text" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ExpenseForm;
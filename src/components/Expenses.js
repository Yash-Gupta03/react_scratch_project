import ExpenseItem from "./ExpenseItem";
import ExpenseForm from "./ExpenseForm";
import './Expenses.css';
import './Card.css'
import Card from "./Card";

const Expenses = (props) => {

return (
    <Card className='expenses'>
      <h2>Let's get started!</h2>
      <ExpenseForm />
      <ExpenseItem date={props.data[0].date} title={props.data[0].title} amount = {props.data[0].amount} location = {props.data[0].location}></ExpenseItem>

      <ExpenseItem date={props.data[0].date} title={props.data[1].title} amount = {props.data[1].amount} location = {props.data[1].location}></ExpenseItem>

      <ExpenseItem date={props.data[0].date} title={props.data[2].title} amount = {props.data[2].amount} location = {props.data[2].location}></ExpenseItem>
    </Card>
  );
}

export default Expenses;
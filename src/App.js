import ExpenseItem from "./components/ExpenseItem";

function App() {

  const data = [{
    date: new Date(2023, 11, 10),title: 'books', amount: 1000, location: 'Indore'
  }, 
{
  date: new Date(2023, 11, 10), title: 'travel', amount: 3000, location: 'Indore'
}, {
  date: new Date(2023, 11, 10), title: 'adventure', amount: 10000, location: 'Himalaya'
}]

  return (
    <div>
      <h2>Let's get started!</h2>

      <ExpenseItem date={data[0].date} title={data[0].title} amount = {data[0].amount} location = {data[0].location}></ExpenseItem>
      <ExpenseItem date={data[0].date} title={data[1].title} amount = {data[1].amount} location = {data[1].location}></ExpenseItem>
      <ExpenseItem date={data[0].date} title={data[2].title} amount = {data[2].amount} location = {data[2].location}></ExpenseItem>
      
      {/* for (let i=0; i < 3; i++){
        <ExpenseItem title={data[i].title} amount = {data[i].amount} location = {data[i].location}></ExpenseItem>
      } */}
    </div>
  );
}

export default App;

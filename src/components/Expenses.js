import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <h1 style={{ color: "white" }}>Expense Items</h1>
      {props.items.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}

export default Expenses;

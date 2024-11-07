import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertainment"]

function App() {
  // const items = ["New Yourk", "Los Angeles", "San Francisco"];

  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 13, category: "Utilities" },
    { id: 3, description: "cccc", amount: 123, category: "Utilities" },
    { id: 4, description: "ddd", amount: 14, category: "Utilities" },
    { id: 5, description: "fff", amount: 440, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      {/* <ListGroup
        heading="Miani"
        items={items}
        onSelectItem={() => console.log("clicked")}
      />
      <Button onClick={() => {}}>My Button</Button>
      <Like onClick={() => console.log("Clicked")} />
        <Message/> */}
      {/* <Form /> */}
      <div className="mb-5">
        <ExpenseForm/>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
export default App;

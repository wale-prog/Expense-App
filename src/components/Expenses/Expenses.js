import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props)=> {
  const [selectedYear, setSelectedYear] = useState('2020')
  
  const handleYearChange = (changeYear) => {
    setSelectedYear(changeYear)
  }

  const filteredExpenses = props.items.filter(expense => 
    expense.date.getFullYear() === Number(selectedYear)
  );

  let expenseContent =  <p>No expense found.</p>
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map(expense =>
      (<ExpenseItem 
         key={expense.id}    
         title={expense.title}
         amount={expense.amount}
         date={expense.date}
      />)
    )
  };

  return (
    <div>
      <Card className="expenses">        
      <ExpensesFilter selected={selectedYear} onYearChange={handleYearChange}/> 
      {expenseContent}
      </Card>
    </div>
  );
}
export default Expenses;
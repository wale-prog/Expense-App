import React, { useState } from 'react';
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props)=> {
  const [selectedYear, setSelectedYear] = useState('2020')
  
  const handleYearChange = (changeYear) => {
    setSelectedYear(changeYear)
  }

  const filteredExpenses = props.items.filter(expense => 
    expense.date.getFullYear() === Number(selectedYear)
  );  

  return (
    <div>
      <Card className="expenses">        
        <ExpensesFilter selected={selectedYear} onYearChange={handleYearChange}/> 
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
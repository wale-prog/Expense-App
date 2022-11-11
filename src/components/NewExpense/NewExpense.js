import React, { useState } from "react"
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const [hideForm, setHideForm] = useState(false)

  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString()
    };
    console.log(expenseData)
    props.onAddExpense(expenseData)
  }; 

  const handleHide = () => {
    setHideForm(!hideForm)
  }

  return(
    <div className="new-expense">
      {!hideForm && <button onClick={handleHide}>Add New Expense</button>}
      {hideForm && <ExpenseForm onCancel={handleHide} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  )

};

export default NewExpense;
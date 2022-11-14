import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: ''
  // });


  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value
    // });

    // setUserInput((prevState) => {
    //   return { 
    //     ...prevState,
    //     title: e.target.value        
    //   }
    // });
  }

  const handleAmountChange = (e) => {
    setAmount(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value
    // })
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value
    // })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title,
      amount: Number(amount),
      date: new Date(date)
    };  
    props.onSaveExpenseData(expenseData);
    props.onCancel()   
    setAmount('')
    setDate('')
    setTitle('')   
  }

  return (
    <div>      
      <form onSubmit={handleSubmit} >
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input onChange={handleTitleChange} type="text" value={title} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" onChange={handleAmountChange} value={amount} min="0.01" step="0.01" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" onChange={handleDateChange} value={date} min="2019-01-01" max="2022-12-31" />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit"> Add Expense </button>
        </div>
      </form>      
    </div>
  )
};
export default ExpenseForm;
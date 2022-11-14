import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const handleSelect = (e) => {
    props.onYearChange(e.target.value)
  } 

  const optionYear = [
    {value: '', text: 'Year', className: 'year-filter__disabled', disabled: true},
    {value: '2022', text: '2022'},
    {value: '2021', text: '2021'},
    {value: '2020', text: '2020'},
    {value: '2019', text: '2019'},
  ]


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <div className='expense-filter__year'>
          <label>Filter by year</label>
          <select value={props.selected} onChange={handleSelect}>
          {optionYear.map(year => (
            <option
              key={year.value}
              value={year.value}
              disabled={year.disabled}
              className={year.className}
            >
              {year.text}
            </option>
           ))}
          </select>
        </div>
        <div className='expense-filter__category'>
          <label>Filter by Category</label>
          <select value="">
            <option className='category-filter' disabled={true} value="">Category</option>
            <option value="Car">Car</option>
            <option value="Home">Home</option>
          </select>
        </div>
        
      </div>
    </div>
  );
};

export default ExpensesFilter;
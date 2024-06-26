import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';


const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpense = useContext(ExpenseTotal);
        const handleBudgetChange = (event) => {
        event.preventDefault();
        setNewBudget(event.target.value);
        if (event.target.value > 20000){
            alert("Budget cannot exceed 20,000 euros");
            setNewBudget("");}
            // cannot find correct variable for expense total :(
        if (event.target.value < 960){
            alert("Budget cannot be lower than ammount already spent");
            setNewBudget("2000");
        }
    }

    return (
<div className='alert alert-secondary'>
<span>Budget:</span>
<span class="prefix" style={{marginLeft: '5px'}}>{currency}</span>
<input type="number" step="10" style={{width: '80px'}} value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

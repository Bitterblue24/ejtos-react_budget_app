import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const error = () => {
if (newBudget.value > 20000);
    alert("Budget cannot exceed 20,000 euros");
if (newBudget.value < TotalExpenses.value);
    alert("Budget cannot be lower than ammount already spent");
else (error = false)
}
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        event.preventDefault();
        const error = validateFormData(newBudget.value)
        setNewBudget(event.target.value);
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

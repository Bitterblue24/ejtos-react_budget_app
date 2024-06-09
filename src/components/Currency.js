import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const { newCurrency, setCurrency } = useState(currency);

    const handleCurrencyChange = (event) => {
        const newCurrencyValue = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrencyValue });
        setCurrency (newCurrencyValue);
    };

    return (
        <div classname='alert alert-secondary'>
            <lable>
                {newCurrency}
                <select onchange={handleCurrencyChange}>
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
            </lable>
        </div>
    );
}
export default Currency;
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
        <div classname='select'>
            <h2 style={{
                    backgroundColor:'lightgreen',
                    color: 'white',
                    fontSize: 14,
                    textAlign: 'center',
                    padding: '5px',
                    borderColor: 'white',
                    borderRadius: '5px',
                    width: '160px',
                    height: '30px',
                    }}>Currency ($ Dollars)</h2>
                <select lable="Currency" style={{
                    backgroundColor:'lightgreen',
                    color: 'white',
                    borderColor: 'white',
                    borderRadius: '25px',
                    width: '100px',
                    height: '30px'
                    }} onchange={handleCurrencyChange}>
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
        </div>
    );
}
export default Currency;
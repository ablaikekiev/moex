import React, {useState, useEffect} from 'react';
import axios from 'axios'

const App = () => {
    const [currency, setCurrency] = useState({});
    useEffect(() => {
        axios('https://iss.moex.com/iss/engines/currency/markets/selt/securities.jsonp?')
            .then(({data}) => setCurrency(data))
            .catch(() => console.log('ERROR'))
    }, []);
    console.log(currency)
    return (
        <h1>
            Курс EUR/USD = {currency.marketdata.data[31][5]}
        </h1>
    );
};

export default App;
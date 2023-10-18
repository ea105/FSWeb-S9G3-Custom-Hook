import React, { useState, useEffect } from "react";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import useGeceModuAc from "../hooks/geceModuAc";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [geceModu, toggleGeceModu] = useGeceModuAc();


  useEffect(() => {
    if (geceModu) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [geceModu]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={geceModu ? 'gece-modu' : 'gunduz-modu'}>
      <Navbar setGeceModu={toggleGeceModu} geceModu={geceModu} />
      <Charts coinData={coinData} />
      <div>
        <h1>Gündüz/Gece Modu Değiştirme</h1>
        <button onClick={toggleGeceModu}>Modu Değiştir</button>
        <p>Gece Modu Açık: {geceModu ? 'Evet' : 'Hayır'}</p>
      </div>
    </div>
  );
};

export default App;

import { useState } from "react";
import "./App.css";
function App() {
  const month = [
    {
      id: 1,
      value: "Ocak",
      label: "Ocak",
    },
    {
      id: 2,
      value: "Şubat",
      label: "Şubat",
    },
    {
      id: 3,
      value: "Mart",
      label: "Mart",
    },
    {
      id: 4,
      value: "Nisan",
      label: "Nisan",
    },
    {
      id: 5,
      value: "Mayıs",
      label: "Mayıs",
    },
    {
      id: 6,
      value: "Haziran",
      label: "Haziran",
    },
    {
      id: 7,
      value: "Temmuz",
      label: "Temmuz",
    },
    {
      id: 8,
      value: "Ağustos",
      label: "Ağustos",
    },
    {
      id: 9,
      value: "Eylül",
      label: "Eylül",
    },
    {
      id: 10,
      value: "Ekim",
      label: "Ekim",
    },
    {
      id: 11,
      value: "Kasım",
      label: "Kasım",
    },
    {
      id: 12,
      value: "Aralık",
      label: "Aralık",
    },
  ];
  const year = [
    {
      id: 1,
      value: "2023",
      label: "2023",
    },
    {
      id: 2,
      value: "2024",
      label: "2024",
    },
    {
      id: 3,
      value: "2025",
      label: "2025",
    },
    {
      id: 4,
      value: "2026",
      label: "2026",
    },
    {
      id: 5,
      value: "2027",
      label: "2027",
    },
    {
      id: 6,
      value: "2028",
      label: "2028",
    },
    {
      id: 7,
      value: "2029",
      label: "2029",
    },
    {
      id: 8,
      value: "2030",
      label: "2030",
    },
    {
      id: 9,
      value: "2031",
      label: "2031",
    },
    {
      id: 10,
      value: "2032",
      label: "2032",
    },
    {
      id: 11,
      value: "2033",
      label: "2033",
    },
    {
      id: 12,
      value: "2034",
      label: "2034",
    },
  ];

  return (
    <div>
      <h1>Payment Information</h1>

      <div className="card-details">
        <span>
          <label htmlFor="name">Name</label>
          <input required type="text" id="name" />
        </span>
        <span>
          <label htmlFor="surname">Surname</label>
          <input required type="text" id="surname" />
        </span>
        <span>
          <label htmlFor="card-number">Card Number</label>
          <input required type="text" maxLength={16} id="card-number" />
        </span>
        <div className="dateArea">
          <span>
            <label htmlFor="month">Month</label>
            <select id="month">
              {month.map((item)=>(
                <option key={item.id} value={item.value}>{item.label}</option>
              ))}
            </select>
          </span>
          <span>
            <label htmlFor="year">Year</label>
            <select id="year">
              {year.map((item)=>(
                <option key={item.id} value={item.value}>{item.label}</option>
              ))}
            </select>
          </span>
        </div>
        <span>
          <label htmlFor="cvv">CVV</label>
          <input required type="text" maxLength={3} id="cvv" />
        </span>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
function App() {
  const [monthValue, setMonthValue] = useState("");
  const [isSubmit,setIsSubmit]=useState(false)
  const [yearValue, setYearValue] = useState("2023");
 
  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Payment Information</h1>
        <form className="card-details">
          <div className="card-content">
            <label htmlFor="name">Name</label>
            <input required type="text" id="name" />
          </div>
          <div className="card-content">
            <label htmlFor="surname">Surname</label>
            <input required type="text" id="surname" />
          </div>
          <div className="card-content">
            <label htmlFor="card-number">Card Number</label>
            <input required type="text" maxLength={16} id="card-number" />
          </div>
          <div className="card-content">
            <label htmlFor="card-month">Expiration (mm/yy)</label>
            <input required type="month" id="card-month" />
          </div>
          <span className="card-content">
            <label htmlFor="cvv">CVV</label>
            <input required type="text" maxLength={3} id="cvv" />
          </span>
          <button type="submit" className="submitBtn" onClick={handleSubmit}>Gönder</button>
        </form>
      </div>
    </div>
  );
}

export default App;

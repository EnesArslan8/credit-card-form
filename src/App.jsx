import { useState } from "react";
import "./App.css";
function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cardNumber, setCardNumber] = useState("#### #### #### ####");
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleCardNumber = (e) => {
    const cardNumberInput = document.querySelector("#card-number");
    cardNumberInput.value = cardNumberInput.value.replace(/[^0-9/]/g, "");
    cardNumberInput.value = cardNumberInput.value.replace(/\d{4}(?=.)/g, "$& ");
    if (
      cardNumberInput.value.length === 4 ||
      cardNumberInput.value.length === 9 ||
      cardNumberInput.value.length === 14
    ) {
      cardNumberInput.value += " ";
    }
    setCardNumber(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value.toUpperCase());
  };
  return (
    <div className="app">
      <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={flipCard}>
        <div className="inner">
          <div className="front">
            <div className="frontHeader">
              <p>Garanti</p>
              <h4>
                paracard{" "}
                <img src="https://www.bonus.com.tr/assets/img/bonus-logo-only.png" />
                <span>bonus</span>
              </h4>
            </div>
            <div className="frontBody">
              <div className="frontBodyContainer">
                <p className="cardNumber">
                  {cardNumber
                    ? cardNumber.toString().replace(/\d{4}(?=.)/g, "$& ")
                    : "#### #### #### ####"}
                </p>

                <div className="cardDate">
                  <div>
                    <p>VALID</p>
                    <p>THRU</p>
                  </div>
                  <p>{time ? <p> {time}</p> : "##/##"}</p>
                </div>
              </div>
              <div className="masterIcon">
                <img src="https://www.mastercard.com.tr/content/dam/public/mastercardcom/tr/tr/icons/mc-logo-52.svg" />
                <p>mastercard.</p>
              </div>
            </div>
            <div className="frontFooter">
              <div className="frontFotterContainer">
                <span>{name ? <span>{name}</span> : "ENES"}</span>
                <span>{surname ? <span>{surname}</span> : "ARSLAN"}</span>
              </div>
            </div>
          </div>
          <div className="back">
            <div className="backHeader">
              <p>Garanti</p>
              <h4>
                paracard <span>bonus</span>
              </h4>
            </div>
            <div className="backBody">
              <p>
                {cardNumber
                  ? cardNumber.toString().replace(/\d{4}(?=.)/g, "$& ")
                  : "#### #### #### ####"}
              </p>
              <div>
                <p>{time ? <p> {time}</p> : "##/##"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="title">Payment Information</h1>
        <form className="card-details">
          <div className="card-content">
            <label htmlFor="name">Name</label>
            <input
              maxLength={15}
              onChange={handleName}
              required
              type="text"
              id="name"
            />
          </div>
          <div className="card-content">
            <label htmlFor="surname">Surname</label>
            <input
              onChange={(e) => setSurname(e.target.value.toUpperCase())}
              required
              maxLength={15}
              type="text"
              id="surname"
            />
          </div>
          <div className="card-content">
            <label htmlFor="card-number">Card Number</label>
            <input
              onChange={handleCardNumber}
              required
              type="text"
              maxLength={19}
              id="card-number"
            />
          </div>
          <div className="card-content">
            <label htmlFor="card-month">Expiration (mm/yy)</label>
            <input
              onChange={(e) => setTime(e.target.value)}
              required
              type="month"
              id="card-month"
            />
          </div>
          <span onClick={flipCard} className="card-content">
            <label htmlFor="cvv">CVV</label>
            <input required type="text" maxLength={3} id="cvv" />
          </span>
          <button type="submit" className="submitBtn" onClick={handleSubmit}>
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

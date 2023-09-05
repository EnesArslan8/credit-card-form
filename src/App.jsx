import { useState } from "react";
import "./App.css";
function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [cvv, setCVV] = useState("");
  const [surname, setSurname] = useState("");
  const [cardNumber, setCardNumber] = useState("#### #### #### ####");
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSubmit = (e) => {
    const nameInput=document.querySelector('#name');
    nameInput.value="";
    const surnameInput=document.querySelector('#surname');
    surnameInput.value="";
    const cardnumberInput=document.querySelector('#card-number');
    cardnumberInput.value="";
    const cardMonth=document.querySelector('#card-month');
    cardMonth.value="";
    const cvvInput=document.querySelector('#cvv');
    cvvInput.value="";
    e.preventDefault();
    setTime("");
    setName("");
    setCVV("");
    setSurname("");
    setCardNumber("#### #### #### ####");
    isFlipped(false)
  };

  const handleCVV = (e) => {
    const cardCvv = document.querySelector("#cvv");
    cardCvv.value = cardCvv.value.replace(/[^0-9/]/g, "");
    setCVV(e.target.value);
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
            <div className="backHeader"></div>
            <div className="backBody">
              <p>
                <span>
                  {cvv ? cvv.toString().replace(/\d{4}(?=.)/g, "$& ") : "###"}
                </span>
              </p>
            </div>
            <img className="backImg" src="https://www.garantibbva.com.tr/content/experience-fragments/public-website/tr/site/header/master/_jcr_content/root/header/headerdesktop/image.coreimg.svg/1664356028506/logo.svg"/>
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
            <input
              onChange={handleCVV}
              required
              type="text"
              maxLength={3}
              id="cvv"
            />
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

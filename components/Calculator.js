import React, { useState } from "react";
import Image from "next/image";

const Calculator = () => {
  // TODO: start coding here!

  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [total, setTotal] = useState(0);

  function Calculate() {
    const resultTip = (bill * tip) / 100 / numberOfPeople;
    setTipAmount(resultTip);

    const resultTotal = bill / numberOfPeople + resultTip;
    setTotal(resultTotal);
  }

  return (
    <main>
      <Image
        src="./icons/logo.svg"
        className="logo"
        alt="Splitter logo. 'SPLI' on one line and 'TTER' on another to indicate splitting."
        width={100}
        height={100}
      />
      <section className="card">
        <div className="card-left">
          <div className="input-group" id="totalBillGroup">
            <div className="input-label-container">
              <label className="body-text input-label" htmlFor="totalBill">
                Bill
              </label>
              <small className="body-text input-error" id="totalBillError">
                Input field is valid
              </small>
            </div>
            <input
              type="number"
              className="body-l-text input-field"
              placeholder="0"
              name="Total bill value"
              id="totalBill"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </div>

          <div className="input-group" id="totalTipPercentageGroup">
            <div className="input-label-container">
              <label className="body-text input-label">Select Tip %</label>
              <small
                className="body-text input-error"
                id="totalTipPercentageError"
              >
                Input field is valid
              </small>
            </div>
            <div className="input-tips-container">
              <button
                className="body-l-text input-tip"
                id="tip5"
                onClick={() => setTip(5)}
              >
                5%
              </button>
              <button
                className="body-l-text input-tip"
                id="tip10"
                onClick={() => setTip(10)}
              >
                10%
              </button>
              <button
                className="body-l-text input-tip"
                id="tip15"
                onClick={() => setTip(15)}
              >
                15%
              </button>
              <button
                className="body-l-text input-tip"
                id="tip25"
                onClick={() => setTip(25)}
              >
                25%
              </button>
              <button
                className="body-l-text input-tip"
                id="tip50"
                onClick={() => setTip(50)}
              >
                50%
              </button>
              <input
                type="number"
                className="body-l-text input-field"
                placeholder="Custom"
                id="totalTipPercentage"
                onChange={(e) => setTip(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="input-group" id="numberOfPeopleGroup">
            <div className="input-label-container">
              <label className="body-text input-label" htmlFor="numberOfPeople">
                Number of People
              </label>
              <small className="body-text input-error" id="numberOfPeopleError">
                Input field is valid
              </small>
            </div>
            <input
              type="number"
              className="body-l-text input-field"
              placeholder="0"
              name="Number of people"
              id="numberOfPeople"
              value={numberOfPeople}
              onChange={(e) => {
                setNumberOfPeople(e.target.value);
              }}
            />
          </div>
          <div>
            <button onClick={Calculate} className="body-sm-text input-tip">
              calculate
            </button>
          </div>
        </div>
        <div className="card-right">
          <section className="card-price-container">
            <div>
              <b className="body-text card-price-title">Tip Amount</b>
              <p className="body-s-text card-price-subtitle">/ person</p>
            </div>
            <strong className="strong-text card-price-value" id="tipAmount">
              ${tipAmount}
            </strong>
          </section>
          <section className="card-price-container">
            <div>
              <b className="body-text card-price-title">Total</b>
              <p className="body-s-text card-price-subtitle">/ person</p>
            </div>
            <strong className="strong-text card-price-value" id="totalPrice">
              ${total}
            </strong>
          </section>
          <button
            className="btn btn-primary btn-reset"
            onClick={() => {
              setNumber(0);
              setTip(0);
              setNumberOfPeople(0);
              setTipAmount(0);
              setTotal(0);
            }}
          >
            Reset
          </button>
        </div>
      </section>
    </main>
  );
};

export default Calculator;

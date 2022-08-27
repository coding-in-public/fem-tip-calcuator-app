import { useState } from 'react';

import person from "../assets/images/icon-person.svg";
import dollar from "../assets/images/icon-dollar.svg";

const Form = ({ bill, setBill, setTip, people, setPeople }) => {

  // added post video for creating inputs
  const tipBtns = [5, 10, 15, 25, 50];

  const handleSelectedTip = (e) => {
    setTip(+e.target.value);
  }

  return (
    <div className="form">
      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="bill">Bill</label>
        </div>
        <div className="number-wrapper">
          <input type="number" className="number-input" id="bill" onInput={(e) => setBill(+e.target.value)} value={bill} />
          <img src={dollar} aria-hidden="true" className="icon" />
        </div>
      </div>

      <div className="tip-section">
        <p className="label">Selected Tip %</p>
        <div className="tip-amount-wrapper">
          {/* added post video for creating inputs */}
          {/* {
            tipBtns.map((t, i) => (
              <div key={i} className="tip-amount">
                <input type="radio" onInput={handleSelectedTip} id={`input${i}`} className="tip-input" name="tip" value={t} />
                <label className="tip-btn" htmlFor={`input${i}`}>{t}%</label>
              </div>
            ))
          } */}
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip} id="input1" className="tip-input" name="tip" value="5" />
            <label className="tip-btn" htmlFor="input1">5%</label>
          </div>
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip} id="input2" className="tip-input" name="tip" value="10" />
            <label className="tip-btn" htmlFor="input2">10%</label>
          </div>
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip} id="input3" className="tip-input" name="tip" value="15" />
            <label className="tip-btn" htmlFor="input3">15%</label>
          </div>
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip} id="input4" className="tip-input" name="tip" value="25" />
            <label className="tip-btn" htmlFor="input4">25%</label>
          </div>
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip} id="input5" className="tip-input" name="tip" value="50" />
            <label className="tip-btn" htmlFor="input5">50%</label>
          </div>
          <div className="custom-wrapper">
            <input type="number" onInput={handleSelectedTip} id="custom" name="tip" className="number-input tip-custom" placeholder="Custom" />
            <label htmlFor="custom" className="tip-custom-label">Custom</label>
          </div>
        </div>
      </div>

      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="people">Number of People</label>
          <p className="error">{
            people === 0 ? "Can’t be zero" : ""
          }</p>
        </div>
        <div className="number-wrapper">
          <input type="number" className={`number-input ${people === 0 ? 'number-error' : ""}`} id="people" onInput={(e) => setPeople(+e.target.value)} value={people} />
          <img src={person} aria-hidden="true" className="icon" />
        </div>
      </div>

    </div>
  )
}
export default Form
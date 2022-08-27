import person  from "../assets/images/icon-person.svg";
import dollar  from "../assets/images/icon-dollar.svg";

const Form = ({ }) => {
  return (
    <div className="form">
      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="bill">Bill</label>
          {/* <p className="error">{
            showBillAmtError ? "Please enter numbers only" : ""
          }</p> */}
        </div>
        <div className="number-wrapper">
          <input type="text" className="number-input" id="bill" />
          <img src={dollar} aria-hidden="true" className="icon" />
        </div>
      </div>

      <div className="tip-section">
        <p className="label">Selected Tip %</p>
        <div className="tip-amount-wrapper">
          <div className="tip-amount">
            <input type="radio" name="tip" value=".05"/>
            <div className="tip-btn">5%</div>
          </div>
          <div className="tip-amount">
            <input type="radio" name="tip" value=".1"/>
            <div className="tip-btn">10%</div>
          </div>
          <div className="tip-amount">
            <input type="radio" name="tip" value=".15"/>
            <div className="tip-btn">15%</div>
          </div>
          <div className="tip-amount">
            <input type="radio" name="tip" value=".25"/>
            <div className="tip-btn">25%</div>
          </div>
          <div className="tip-amount">
            <input type="radio" name="tip" value=".5"/>
            <div className="tip-btn">50%</div>
          </div>
          <input type="text" className="number-input tip-custom"/>
        </div>
      </div>

      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="people">Number of People</label>
          {/* <p className="error">{
            showPeepsError ? "Please enter numbers only" : ""
          }</p> */}
        </div>
        <div className="number-wrapper">
          <input type="text" className="number-input" id="people"/>
          <img src={person} aria-hidden="true" className="icon" />
        </div>
      </div>

    </div>
  )
}
export default Form
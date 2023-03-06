import "./Form.scss";

const Form = () => {
  return (
    <div className="form">
      <div className="form_box">
        <div className="form_box_one">
          <div className="form_box_one_name">
            <input type="text" />
          </div>
        </div>
        <div className="form_box_two">
          <div className="form_box_tow_company">
            <label for="company">Company</label>
            <input type="text" />
          </div>
        </div>
        <div className="form_box_three">
          <div className="form_box_three_license">
            {" "}
            <label for="licenseNo">License No.</label>
            <input type="text" />
          </div>
          <div className="form_box_three_amount">
            <label for="licenseNo">Amount($)</label>
            <input type="number"></input>
          </div>
        </div>
        <div className="form_box_four">
          <div className="form_box_four_purchase">
            <label for="Purchase Date">Purchase Date</label>
            <input type="date" />
          </div>
          <div className="form_box_four_expiry">
            <input type="date" />
          </div>
        </div>
        <div className="form_box_five">
          <div className="form_box_five_upload">
            <input />
          </div>
          <div className="form_box_five_status">
            <input type="text" />
          </div>
        </div>
        <div className="form_box_six">
          <div className="form_box_six_cancel"></div>
          <div className="form_box_six_add">
            <button>Cancel</button>
          </div>
          <div className="form_box_six_add">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
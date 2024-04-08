import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      gender: "",
      age: "",
      textarea: "",
    };
  }
  changeHandler = (event) => {
    this.setState({
      firstname: event.target.value,
      lastname: event.target.value,
      email: event.target.value,
      phonenumber: event.target.value,
      gender: event.target.value,
      age: event.target.value,
      textarea: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.firstname}`);
    // alert(`${this.state.lastname}`);
    // alert(`${this.state.email}`);
    // alert(`${this.state.phonenumber}`);
    // alert(`${this.state.gender}`);
    // alert(`${this.state.age}`);
    // alert(`${this.state.address}`);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h1>REGISTRATION FORM</h1>
          <div className="inputs">
            Firstname :{" "}
            <input
              type="text"
              placeholder="Enter firstname"
              onChange={this.changeHandler}
            />
          </div>
          <div className="inputs">
            Lastname :{" "}
            <input
              type="text"
              placeholder="Enter lastname"
              onChange={this.changeHandler}
            />
          </div>
          <div className="inputs">
            Email ID :{" "}
            <input
              type="text"
              placeholder="example@gmail.com"
              onChange={this.changeHandler}
            />
          </div>
          <div className="inputs">
            Phone number :{" "}
            <input
              type="text"
              placeholder="Enter phone number"
              onChange={this.changeHandler}
            />
          </div>
          <div className="gender">
            Gender :
            <input
              type="radio"
              value="Male"
              name="gender"
              onChange={this.ChangeHandler}
            />
            Male
            <input
              type="radio"
              value="Female"
              name="gender"
              onChange={this.ChangeHandler}
            />
            Female
            <input
              type="radio"
              value="Others"
              name="gender"
              onChange={this.ChangeHandler}
            />
            Others
          </div>
          <div className="inputs">
            Age :{" "}
            <select name="age" onChange={this.ChangeHandler}>
              <option value={"select your age"}>Select your age</option>
              <option value={"below 10years"}>below 10years</option>
              <option value={"11-20"}>11-20</option>
              <option value={"21-30"}>21-30</option>
              <option value={"31-40"}>31-40</option>
              <option value={"41-50"}>41-50</option>
              <option value={"51-60"}>51-60</option>
              <option value={"61-70"}>61-70</option>
              <option value={"above 71 years"}>above 71years</option>
            </select>
          </div>
          <div>
            Address :{" "}
            <textarea placeholder="Enter address" rows="7" cols="30"></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

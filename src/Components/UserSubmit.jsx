import React from "react";
import { useState } from "react";

export default function UserSubmit() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    gender: "",
    birthDate: "",
    age: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [inputValues, setInputValues] = useState();

  const isValidEmail = (email) => {
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegEx.test(email);
  };
  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegEx = /^[0-9]{10}$/;
    return phoneRegEx.test(phoneNumber);
  };
  const isValidPassword = (password) => {
    const symbolRegex = /[!@#$%^&*(),.?"{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A_Z]/;
    const lowerCaseRegex = /[a-z]/;
    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  };
  const isValidAge = (age) => {
    return parseInt(age) >= 18 && parseInt(age) <= 100;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstname) {
      newErrors.firstname = "First Name is required";
    }
    if (!formData.lastname) {
      newErrors.lastname = "Last Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(formData.password) > 8) {
      newErrors.password =
        "Password must be atleast 8 characters long and contain atleast one symbol, one number,one uppercase letter, and one lowercase letter.";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Password must match";
    }
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (!isValidAge(formData.age)) {
      newErrors.age = "Enter valid age";
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!formData.birthDate) {
      newErrors.birthDate = "date of birth is required";
    }
    if (formData.address) {
      newErrors.address = "address is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  console.log(errors);
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Form Submitted!!", formData);
    } else {
      alert("Form validation Failed!!");
    }
  };
  const inputDetails = () => {
    setInputValues(formData);
  };
  // if (!formData.name.trim()) {
  //   validationErrors.name = "Name is required";
  // }
  // if (!formData.lastname.trim()) {
  //   validationErrors.lastname = "Lastname is required";
  // }
  // if (!formData.email.trim()) {
  //   validationErrors.email = "Email is required";
  // } else if (
  //   !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(formData.email)
  // ) {
  //   validationErrors.email = "Email is not valid";
  // }
  // if (!formData.number.trim()) {
  //   validationErrors.number = "Mobile number is required";
  // } else if (formData.number.length < 10) {
  //   validationErrors.number = "Mobile number not valid";
  // }
  // // if (formData.gender.trim()) {
  // //   validationErrors.gender = "Gender is required";
  // // }
  // setErrors(validationErrors);
  // if (Object.keys(validationErrors).length === 0) {
  //   alert("Form submitted successfully!");
  // }
  return (
    <>
      <h1 className="  text-danger">PATIENT REGISTRATION FORM</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="inputs">
            <label htmlFor="">
             First Name:
            </label>
          
            <input
              type="text"
              name="firstname"
              className="form-control w-25"
              placeholder="enter your firstname"
              value={formData?.firstname}
              onChange={handleChange}
            />
            {errors.firstname && (
              <span className="errors" style={{ color: "red" }}>
                {errors.firstname}
              </span>
            )}
          </div>
          <div className="inputs">
            <label htmlFor="">
              Last Name:
            </label>
          
            <input
              type="text"
              name="lastname"
              className="form-control w-25"
              placeholder="enter your lastname"
              value={formData?.lastname}
              onChange={handleChange}
            />
            {errors.lastname && (
              <span className="errors" style={{ color: "red" }}>
                {errors.lastname}
              </span>
            )}
          </div>
          <div className="inputs">
            <label htmlFor="">
               Email :  
            </label>
          </div>
          <div className="inputs">
            <input
              type="email"
              name="email"
              className="form-control w-25"
              placeholder="example@email.com"
              value={formData?.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="errors" style={{ color: "red" }}>
                {errors.email}
              </span>
            )}
          </div>
          <div className="inputs">
            <label htmlFor="">
               Mobile Number :  
            </label>
          </div>
          <div className="inputs">
            <input
              type="text"
              name="phoneNumber"
              maxLength={10}
              className="form-control w-25"
              placeholder="enter your mobile number"
              value={formData?.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <span className="errors" style={{ color: "red" }}>
                {errors.phoneNumber}
              </span>
            )}
          </div>
          <div className="inputs">
            <label htmlFor="">
               Password :  
            </label>
          </div>
          <div className="inputs">
            <input
              type="password"
              name="password"
              maxLength={10}
              className="form-control w-25"
              placeholder="Password"
              value={formData?.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="errors" style={{ color: "red" }}>
                {errors.password}
              </span>
            )}
          </div>
          <div className="inputs">
            <label htmlFor="">
               Confirm Password :  
            </label>
          </div>
          <div className="inputs">
            <input
              type="password"
              name="confirmPassword"
              maxLength={10}
              className="form-control w-25"
              placeholder="Confirm Password"
              value={formData?.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span className="errors" style={{ color: "red" }}>
                {errors.confirmPassword}
              </span>
            )}
          </div>
          <div className="inputs">
            <label htmlFor="">
               Gender :  
            </label>
          </div>
          <div className="d-flex">
            <div className="form-check">
              <input
                type="radio"
                value={formData?.gender}
                name="gender"
                className="form-check-input"
                onChange={handleChange}
              />
              Male
            </div>
            <div className="form-check">
              <input
                type="radio"
                value={formData?.gender}
                name="gender"
                className="form-check-input"
                onChange={handleChange}
              />
              Female
            </div>
            <div className="form-check">
              <input
                type="radio"
                value={formData?.gender}
                name="gender"
                className="form-check-input"
                onChange={handleChange}
              />
              Others
            </div>
            {errors.gender && (
              <span className="errors" style={{ color: "red" }}>
                {errors.gender}
              </span>
            )}
          </div>
          <div className="inputs">
            <label htmlFor="">
               Date Of Birth :  
            </label>
          </div>
          <div className="inputs">
            <input
              type="date"
              name="birthDate"
              className="form-control w-25"
              value={formData?.birthDate}
              onChange={handleChange}
            />
            {errors.birthDate && (
              <span className="errors" style={{ color: "red" }}>
                {errors.birthDate}
              </span>
            )}
          </div>
          <div className="inputs">
            <label htmlFor="">
               Age :  
            </label>
          </div>
          <div className="inputs">
            <input
              type="number"
              name="age"
              className="form-control w-25"
              value={formData?.age}
              placeholder="Enter your age"
              onChange={handleChange}
            />
          </div>
          {errors.age && (
            <span className="errors" style={{ color: "red" }}>
              {errors.age}
            </span>
          )}
          <div className="inputs">
            <label htmlFor="">
               Address :  
            </label>
          </div>
          <div class="mb-3 inputs">
            <textarea
              class="form-control w-25"
              rows="3"
              placeholder="permanent address"
            ></textarea>
            {errors.address && (
              <span className="errors" style={{ color: "red" }}>
                {errors.address}
              </span>
            )}
          </div>
        </div>
        <div className=" ">
          <button
            className="btn btn-primary p-1 text-white   w-25"
            onClick={inputDetails}
          >
            Submit
          </button>
        </div>
      </form>
      <div>
        <h4>{inputValues?.firstname}</h4>
      </div>
    </>
  );
}
// {/* <h1>Vamsi Krishna Dudyala</h1>
// <h1>Srinidhi Sriramula</h1>
// <h1>Maneesha Gouraram</h1>
// <h1>Vineeth Kuntala</h1>
// <h1>Bhasker Pradeep</h1>
// <h1>Raja Sekhar Dudyala</h1>
// <h1>Hari Priya Bonthu</h1> */}
// {/* <form
//   onSubmit={(e) => {
//     e.preventDefault();
//     console.log(formData);
//   }}
// >
//   <h1>REGISTRATION FORM</h1>
//   <div className="inputs">
//     <label>Firstname: </label>
//     <input
//       type="text"
//       id=""
//       name="firstname"
//       placeholder="Enter first name"
//       value={formData.firstname}
//       onChange={handleChange}
//       required
//     />
//   </div>
//   <div className="inputs">
//     <label>Lastname: </label>
//     <input
//       type="text"
//       name="lastname"
//       placeholder="Enter last name"
//       value={formData.lastname}
//       onChange={handleChange}
//       required
//     />
//   </div>
//   <div className="inputs">
//     <label>Email ID: </label>
//     <input
//       type="email"
//       name="Email"
//       value={formData.email}
//       placeholder="example@gmail.com"
//       onChange={handleChange}
//     />
//   </div>
//   <div className="inputs">
//     <label>Mobile number: </label>
//     <input
//       type="text"
//       name="number"
//       maxLength={10}
//       value={formData.number}
//       placeholder="Enter phone number"
//       onChange={handleChange}
//       required
//     />
//   </div>
//   <div>
//     <label>Gender: </label>
//     <input
//       type="radio"
//       value="Male"
//       name="gender"
//       onChange={handleChange}
//     />
//     Male
//     <input
//       type="radio"
//       value="Female"
//       name="gender"
//       onChange={handleChange}
//     />
//     Female
//     <input
//       type="radio"
//       value="Others"
//       name="gender"
//       onChange={handleChange}
//     />
//     Others
//   </div>
//   <div className="inputs">
//     <label>Age: </label>
//     <select name="age" value={formData.age} onChange={handleChange}>
//       <option value={"select your age"}>Select your age</option>
//       <option value={"below 10years"}>below 10years</option>
//       <option value={"11-20"}>11-20</option>
//       <option value={"21-30"}>21-30</option>
//       <option value={"31-40"}>31-40</option>
//       <option value={"41-50"}>41-50</option>
//       <option value={"51-60"}>51-60</option>
//       <option value={"61-70"}>61-70</option>
//       <option value={"above 71 years"}>above 71years</option>
//     </select>
//   </div>
//   <div>
//     <label>Address: </label>
//     <textarea
//       placeholder="enter address"
//       name="address"
//       value={formData.address}
//       rows={"5"}
//       cols={"40"}
//       onChange={handleChange}
//     ></textarea>
//   </div>
//   <button>SignUp</button>
//   <button type="submit">Login</button>
// </form> */}

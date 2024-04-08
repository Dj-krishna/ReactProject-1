import "./App.css";
//import FunctionProps from "./Components/FunctionProps";
//import Vamsi from "./Components/Vamsi";
//import ChildComponent from "./Components/ChildComponent";
import UserSubmit from "./Components/UserSubmit";
//import Form from "./Components/Form";
//import ClassStateComponent from "./Components/ClassStateComponent";
//import ClassPropsComponent from "./Components/ClassPropsComponent";
//import FormExample from "./Components/FormExample";

function App() {
  /*const getData = (data) => {
    console.log("Hello, Good afternoon", data)
  };*/
  return (
    <div className="App">
      {/*<Vamsi />*/}
      <UserSubmit />
      {/* <FormExample/> */}
      {/* <Login /> */}
      {/* <Form /> */}
      {/*<ChildComponent onSubmit={getData} />*/}
      {/*<ClassStateComponent />*/}
      {/* <ClassPropsComponent name="Vamsi Krishna" place="Codegnan" />
      <ClassPropsComponent name="Srinidhi" place="Codegnan" />
      <ClassPropsComponent name="Maneesha" place="Codegnan" />
      <ClassPropsComponent name="Vineeth" place="Codegnan" />
      <ClassPropsComponent name="Pradeep" place="Codegnan" />
      <FunctionProps name="Naveen" place="Codegnan" />{" "} */}
    </div>
  );
}

export default App;

import React from "react";
import "./styles.css";
//import axios from "axios";
import FindingFalcano from "./components/FindingFalcano";
export default class App extends React.Component {
  // componentDidMount() {
  //   // axios({
  //   //   method: "post",
  //   //   url: "https://findfalcone.herokuapp.com/token",
  //   //   headers: { "content-type": "application/json" }
  //   // })
  //   //   .then(response => console.log(response))
  //   //   .catch(error => console.log(error.response));
  //   axios({
  //     url: "https://findfalcone.herokuapp.com/token",
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json"
  //     }
  //   })
  //     .then(response => console.log("response", response.data))
  //     .catch(err => console.log("res", err));
  // }
  render() {
    return (
      <div className="App">
        <FindingFalcano />
      </div>
    );
  }
}

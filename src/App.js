import "./App.css";
import MyHeader from "./MyHeader.js";
import MyFooter from "./MyFooter";
import React from "react";
import Main from "./Main.js";
function App() {
  // let map;
  // let request = new XMLHttpRequest();
  // request.open(
  //   "GET",
  //   "https://api.mozambiquehe.re/maprotation?auth=5476d1d4a8c43143be45fac078893032"
  // );
  // request.send();
  // request.onload = () => {
  //   map = JSON.parse(request.response);
  //   nowMap = map.current.map;
  //   console.log(map.current.map);
  // };

  // async function getData() {
  //   try {
  //     //응답 성공
  //     const response = await axios.get(
  //       "https://api.mozambiquehe.re/maprotation?auth=5476d1d4a8c43143be45fac078893032"
  //     );
  //     nowMap = response.data.current.map;
  //     console.log(nowMap);
  //   } catch (error) {
  //     //응답 실패
  //     console.error("error");
  //   }
  // }

  // getData();
  return (
    <React.Fragment>
      <MyHeader />
      <Main />
      <MyFooter />
    </React.Fragment>
  );
}
export default App;

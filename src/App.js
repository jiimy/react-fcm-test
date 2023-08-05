import logo from "./logo.svg";
import "./App.css";
import useGetToken from "./firebase-get-token";
import axios from "axios";

function App() {
  useGetToken();

  const click = () => {
    axios
      .post(
        "https://fcm.googleapis.com/fcm/send",
        {
          to: "cmjxz-codZoYZgkF-DMs_3:APA91bF_Y1r6O5mYOWeUmM94M2hfjNjsehQcW0V2ar6rY9sJnES4SyBJbs-bbsA59nteZ_wf02qRoPoz_HgUwGvdT8-2ylQ0c0VtZB5wLsvQy6cfeUkkHltrcr7d_oEZDNqvYf26zUaQ",
          notification: {
            title: "FCM TEST",
            body: "Hello, world",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "key=BOWbgLD10kyQ6zwV8RpnBg84oLQCD6Ll1t2u0AWjDxd1-u3sbTNy1DbKHEvJpvgLrUAhinaytkHIDakxn0HETaI",
          },
        }
      )
      .then((res) => {
        console.log("res", res);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={click}>버튼</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

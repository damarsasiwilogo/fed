import React, {Component, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import facebook from "./assets/facebook-warna.png";
import instagram from "./assets/instagram-warna.png";
import youtube from "./assets/youtube-warna.png";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>I'm Damarsasi Wilogo. I'm an experienced Web Developer.</p>
        <div id="content">
          <div className="kotak1">
            <h3>Name:</h3>
            <p>Damarsasi Wilogo</p>
            <h3>Birthdate:</h3>
            <p>12 June 1989</p>
            <h3>Email:</h3>
            <p>damarsasiwilogo@gmail.com</p>
            <h3>Phone:</h3>
            <p>(+62) 812-2093-378</p>
            <h3>Location:</h3>
            <p>Depok, Indonesia</p>
            <h3>Interests:</h3>
            <p>Sports, Games, Movies</p>
            <h3>Social:</h3>
            <p className="icons">
              <a href="https://facebook.com/" target="_blank">
                <img src={facebook} alt="facebook" className="icon" />
              </a>
              <a href="https://instagram.com/" target="_blank">
                <img src={instagram} alt="instagram" className="icon" />
              </a>
              <a href="https://youtube.com/" target="_blank">
                <img src={youtube} alt="youtube" className="icon" />
              </a>
            </p>
            <h3>About Me</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
              aliquet enim tortor at. Ultrices mi tempus imperdiet nulla malesuada
              pellentesque elit eget gravida. Blandit volutpat maecenas volutpat
              blandit aliquam etiam erat velit. Sollicitudin tempor id eu nisl. Sed
              vulputate mi sit amet mauris. Augue mauris augue neque gravida in
              fermentum et. Ullamcorper a lacus vestibulum sed arcu non. Aliquam
              vestibulum morbi blandit cursus risus at ultrices mi tempus. Nec
              ullamcorper sit amet risus nullam eget. Egestas dui id ornare arcu.
              Phasellus faucibus scelerisque eleifend donec pretium vulputate. Felis
              eget velit aliquet sagittis id consectetur purus ut faucibus.
            </p>
          </div>
          <div className="kotak2"></div>
          <div className="kotak3" style={{ backgroundColor: "inherit" }}>
            <h4>Awards Won</h4>
            <h1>30</h1>
          </div>
          <div className="kotak4" style={{ backgroundColor: "inherit" }}>
            <h4>Xp Years</h4>
            <h1>10+</h1>
          </div>
          <div className="kotak5" style={{ backgroundColor: "inherit" }}>
            <h4>Clients</h4>
            <h1>110</h1>
          </div>
          <div className="kotak6" style={{ backgroundColor: "inherit" }}>
            <h4>Projects</h4>
            <h1>150</h1>
          </div>
          <div
            className="kotak7"
            style={{
              background: "inherit",
              padding: 0,
              margin: "0 26%",
            }}
          >
            <button type="button" className="btn"><h3>Download CV</h3></button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

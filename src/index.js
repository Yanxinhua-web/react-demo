import ReactDOM from "react-dom";
import App from './app';

const react = "react语法";

// function tick() {
//   const element = (
//     <div>
//       <h1>hello world</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(()=>{
//   tick()
// }, 1000);
ReactDOM.render(<App />,document.getElementById('root'))
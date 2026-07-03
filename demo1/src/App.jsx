import React, { useState } from 'react'

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isToggled: false
//     }
//   }
//   handleToggle = () => {
//     this.setState((prevState) => ({
//       isToggled: !prevState.isToggled
//     }));
//   }
//   render() {
//     const isToggled = this.state.isToggled;
//     return (
//       <div>
//         <button onClick={this.handleToggle} style={{
//           padding: "10px 20px",
//           fontSize: "16px",
//           height:'40px',
//           width:'75px',
//           backgroundColor: isToggled ? "green" : "red",
//           color:"white",
//           border:"none",
//           borderRadius:"4px",
//           cursor:'pointer',
//         }}>
//           {isToggled?'ON':'OFF'}
//         </button>
//       </div>
//     )
//   }
// }
// import React from 'react'

function App() {
  const [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1)
  }
  function dec() {
    setCount(count - 1)
  }
  return (
    <div>
      <button onClick={inc}>Increnent</button>
      <button onClick={dec}>Decrement</button>
      {count}
    </div>
  )
}

export default App

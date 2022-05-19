import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit  = (event) => {
    event.preventDefault();
    console.dir(event.target);
  };

  return (
    <form onSubmit={handleSubmit }>
      <label htmlFor="inputName">Enter your name: </label>
      <input
        id="inputName"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="inputLastName">Enter your name: </label>
      <input
        id="inputLastName"
        name="lastName"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">click plz</button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);

// function Sub(car) {
//   return <li>I am a { car.brand }</li>;
// }

// function Car() {
//   const cars = [
//     {id: 1 , brand: 'Ford'},
//     {id: 2 , brand: 'BMW'},
//     {id: 3 , brand: 'Audi'},
// ];
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <ul>
//         {cars.map((car) => <Sub brand={car.brand} key={car.id}/>)}
//       </ul>
//     </>
//   );
// }

// function Car() {
//   const bidF = (event) => {
//     event.preventDefault();
//     console.log('event: ', event)
//   }
//   return (
//     <form onSubmit={bidF}>
//       <label htmlFor="inputName" dir="auto">Enter your name:
//         <input type="text" id="inputName" placeholder="search" dir="auto"/>
//       </label>
//       <button type="submit"   >clickOnMe</button>
//     </form>
//   )
// }

// function bidF(){
//   return console.log('hi')
// }

// function Car(){
//     const bidF = (props) => {
//       return console.log('bidF' , props)
//     }
//     var bidar = `i am bidar.app `;
//     return(
//       <>
//         <h1>hello {bidar}</h1>
//         {/* <button onClick={bidF}>کلیک کن لاشی</button> */}
//         <button onClick={(event)=>{bidF({ data: "asshole", eventClick: event})}}>کلیک کن لاشی</button>
//       </>
//     )

// }

// class Car extends React.Component{
//   constructor(){
//     super()
//     this.state= {
//       color: "red",
//     }
//   }
//   componentDidMount(){
//     console.log('componentDidMount')
//   }
//   bidF = () => {
//     console.log('bidF')
//     this.setState({
//       color: "grrrreeen"
//     })
//   }

//   render() {

//     var bidar = `i am bidar.app ${this.state.color}`;
//     return(
//       <>
//         <h1>hello {bidar}</h1>
//         <button onClick={this.bidF}>کلیک کن لاشی</button>
//       </>
//     )
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />);

import react from 'react';
import  "./App.css";
// import  Title from './Title';
// import ProductTab from './ProductTab';
// import MsgBox from './MsgBox';  
// import ActivitySecondTab from './ActivitySecondTab';
import Button from './Button';
import Form from './Form';


function Description() {
  return (
    <>
    <h4>I am the Description!</h4>
    </>
  )
}



// function App() {

//   let style = { backgroundColor: "skyblue",
//       color: "black", 
//       padding: "10px", 
//       borderRadius: "5px" 
//     };

//   return(
//     <>

//     <MsgBox userName="Alice" textColor="blue" />
//     <MsgBox userName="student" textColor="green" />
//      <div>
//       <h1 style={style}>Welcome to my new react app</h1>
//       <p>inside app component we have a title component</p>
//       <button>
//         Hello, World!
//       </button>

//       <Title />
//       <Description />  
//       <ProductTab />  
//     </div>
//     </>
//   )
// }




// function App (){
//   let style = {marginTop:" 5rem"}

//   return(
//     <>
//      <h1 style={style}>Blockbuster Deals | Shop Now</h1>
//      <ActivitySecondTab />
//     </>
//   )
// }



function App(){
  return(
    <>
    <Button />
    <Form />
    </>
  )
}



export default App;
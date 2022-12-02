// All your imports should be at the top
// components
import Header from './components/Header'
// css
import './App.css';

export default function App() {
  // What is JSX? JSX is a hybrid of JavaScript and HTML In JSX, we can only return one parent element. If we want to return more than one element, we have to wrap it in a parent element. Typically a div or you use a React.Fregmemt
  return (
    <Header />
  );
}



// const App = () => {
//   return (
//     <h1>
//       React Tac Toe
//     </h1>
//   )
// }

// export default App

// Vanilla JS
// function declarations using the function
// function expressions
// arrow functions
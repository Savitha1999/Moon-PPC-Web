// import logo from './logo.svg';
// import './App.css';

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

// export default App;





import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Users/Login';
import PropertyCard from './Card/PropertyCard';
import AddProperties from './Users/Addproperties';
import MyProperty from './Card/MyProperty';
import Property from './Users/Property';
import AddProp from './Users/AddProp';
// import TopNavigation from './TopNavigation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add" element={<AddProperties />} />
        <Route path='/card' element={<PropertyCard />} />
        <Route path='/my' element={<MyProperty />} />
        <Route path='/property' element={<Property />} />
        <Route path='/add-form' element={<AddProp />} />

      </Routes>
    </Router>
  );
};

export default App;

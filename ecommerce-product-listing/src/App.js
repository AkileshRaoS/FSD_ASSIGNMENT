// // // src/App.js
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import ProductList from './components/ProductList';
// // import ProductDetail from './components/ProductDetail';

// // const App = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<ProductList />} />
// //         <Route path="/product/:id" element={<ProductDetail />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;
// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProductList from './components/ProductList';
// import ProductDetail from './components/ProductDetail';
// import Cart from './components/Cart';
// import Login from './components/Login';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ProductList />} />
//         <Route path="/product/:id" element={<ProductDetail />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Login from './components/Login';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ProductList theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          path="/cart"
          element={<Cart theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

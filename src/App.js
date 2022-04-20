import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// Использование без библиотеки Axios (обычным джава скриптом)
// fetch('http://localhost:3000/db.json')
// .then((resp) => resp.json())
// .then((json) => {
//   setPizzas(json.pizzas);
// });

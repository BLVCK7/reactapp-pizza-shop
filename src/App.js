import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';
import { connect } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';

// function App() {
//   React.useEffect(() => {
// axios.get('http://localhost:3000/db.json').then(({ data }) => {
//   setPizzas(data.pizzas);
//     });
//   }, []);

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={this.props.items} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// Использование без библиотеки Axios (обычным джава скриптом)
// fetch('http://localhost:3000/db.json')
// .then((resp) => resp.json())
// .then((json) => {
//   setPizzas(json.pizzas);
// });

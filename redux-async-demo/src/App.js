import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import './App.css';
import logo from './logo.svg';
import { addProduct, fetchProducts, removeProduct } from './store';

function App({products}) {
  const [id, setId] = useState('')
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts);
  }, [])
  const addProductFn = () => {
    console.log('Adding Product');
    dispatch(addProduct({
      name: 'Product X',
      price: 360
    }))
  }
  const removeProductFn = () => {
    console.log('Remove Product');
    dispatch(removeProduct(id));
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={addProductFn}>Add Product</button>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button onClick={removeProductFn}>Remove Product</button>
        {
          products.map(product => <div>{product.name} - {product.price}</div>)
        }
      </header>
    </div>
  );
}
const mapStateToProps = (state) => ({
  products: state.products
})
export default connect(mapStateToProps)(App);

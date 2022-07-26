import './App.css';
import productData from './productData';

function App() {

  function addToCart() {
    console.log('add to cart!');
  }

  return (
    <div className="App">
      <h1>React Ecommerce Practice</h1>
      {productData.map((item, idx) => (
        <div class="product" key={item} style={{border: '1px solid black', borderRadius: '10px', margin: '20px'}}>
          <h4>{item.title}</h4>
          <img src={item.image} alt={item.title} style={{maxWidth: '200px'}} />
          <p>{item.price}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
        ))}
    </div>
  );
}

export default App;

import productData from './productData';

export default function Home() {
  
  function addToCart() {
    console.log('add to cart!');
  }

  return (
    <div>
      <h1>Ecommerce Home</h1>
      {productData.map(item => (
        <div className="product" key={item.title} style={{ border: '1px solid black', borderRadius: '10px', margin: '20px' }}>
          <h4>{item.title}</h4>
          <img src={item.image} alt={item.title} style={{ maxWidth: '200px' }} />
          <p>{item.price}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
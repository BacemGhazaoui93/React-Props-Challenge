import logo from './logo.svg';
import './App.css';
import Cart from './Components/Cart';
import ItemList from './Components/ItemList';



const products = [
  {
    image: 'Product.png',
    name: 'Product 1',
    price: '9 Dt',
  },
  {
    image: 'Product.png',
    name: 'Product 2',
    price: '19 Dt',
  },
  {
    image: 'Product.png',
    name: 'Product 3',
    price: '99 Dt',
  },
];
function App() {
  const alertProduct = (product) => {
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <>
      <ItemList products={products} />
      <div className="cart-list">
        {products.map((product, index) => (
          <Cart key={index} product={product} onAddToCart={alertProduct} />
        ))}
      </div>
    </>
  );
}
export default App;
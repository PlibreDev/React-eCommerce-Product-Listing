import './ProductItem.css';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="description">{product.description}</p>
      <p className="category">Category: {product.category}</p>
    </div>
  );
}

export default ProductItem;
function Product({ product }) {
  return (
    <div>
      <a href="" className="product-item">
        <div className="warning">{product.warning || ""}</div>
        <div className="photo">
          <img src={product.image} alt="" />
        </div>
        <div className="info">
          <div className="product-category">{product.category}</div>
          <div className="product-name">{product.name}</div>
          <div className="product-price">
            R${product.price.toFixed(2).replace(".", ",")}
          </div>
        </div>
      </a>
    </div>
  );
}

export default Product;

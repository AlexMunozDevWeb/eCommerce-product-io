export const Cart = () => {
  return (
    <>
      <span className="cart-title">Cart</span> 
      <div className="info-cart">
        
        <img 
          className="thumbmail-img"
          src="/images/image-product-1-thumbnail.jpg" 
          alt="" />

        <div className="description-price">
          <p className="description">Fall Limited Edition Sneakers</p>
          <p className="price">$125.00 x 3 <span className="bold"> $375.00</span></p>
        </div>
        
        <img 
          className="delete-icon"
          src="/images/icon-delete.svg"
          alt="" />
      
      </div>
      <button className="oragen-button checkout">Checkout</button>
    </>
  )
}

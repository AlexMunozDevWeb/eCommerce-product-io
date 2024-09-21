export const ProductDetails = () => {
  return (
    <>
      <div className="detail-product container">

        <div className="name-description">
          <p className="company">SNEAKER COMPANY</p>
          <h2 className="product-name">Fall Limited Edition Sneakers</h2>
          <p className="description">
            These low-profile snikers are you perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
          </p>
        </div>

        <div className="quantity-wrapper f-bold">
          <div className="price">
            <span className="amount">$125.00</span>
            <span className="percentage">50%</span>
          </div>
          <div className="discount">
            $250.00
          </div>
        </div>

        <div className="select-item">
          <form>
            <div className="row row-inputs">
              <input className="f-bold" type="submit" value="-" />
              <input className="f-bold" type="number" value="0" />
              <input className="f-bold" type="submit" value="+" />
            </div>
            
            <div className="row row-button">
              <button 
                className="orange-button shadow"
                type="submit">
                <img 
                  className="cart" 
                  src="/images/icon-cart.svg" 
                  alt="Icono carrito" />
                Add to cart
              </button>
            </div>
          
          </form>
        </div>

      </div> 
    </>
  )
}

import { useDispatch, useSelector } from "react-redux";
import { clearAllItems, removeItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearAllItems());
  };

  const handleRemoveItem = (id) => {
    console.log(id);
    debugger;
    dispatch(removeItems(id));
  };

  if (cartItems.length === 0) {
    return (
      <div className='empty-cart'>
        <div className='empty-cart-content'>
          <div className='empty-cart-icon'>🛒</div>

          <h1>Your cart is empty</h1>

          <p>Looks like you haven't added anything to your cart yet.</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className='cart-actions'>
        <button className='clear-cart-btn' onClick={handleClearCart}>
          <span className='clear-cart-icon'>🗑</span>
          <span>Clear Cart</span>
        </button>
      </div>
      {cartItems?.map((item) => {
        return (
          <div className='cart-item' key={item.id}>
            <div className='cart-item-image'>
              <div className='food-image-placeholder'>🍕</div>
            </div>

            <div className='cart-item-content'>
              <div className='cart-item-header'>
                <div>
                  <span className='item-category'>
                    {item.cuisines.join(", ")}
                  </span>
                  <h3>{item.name}</h3>
                </div>

                <button
                  className='remove-btn'
                  onClick={() => handleRemoveItem(item.id)}
                >
                  ✕
                </button>
              </div>

              <p className='item-description'>{item.totalRatingsString}</p>

              <div className='cart-item-footer'>
                <div className='quantity-control'>
                  <button className='quantity-btn'>−</button>

                  <span className='quantity'>1</span>

                  <button className='quantity-btn'>+</button>
                </div>

                <div className='item-price'>
                  <strong>{item.costForTwo}</strong>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

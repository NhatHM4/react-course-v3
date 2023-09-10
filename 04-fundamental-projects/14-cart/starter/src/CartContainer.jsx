import { useEffect } from 'react';
import CartItem from './CartItem';
import { CALCULATE, CLEAR, DECREASE, INCREASE, REMOVE_ITEM } from './reducer';
import { useContextGlobal } from './useContextGlobal';
const CartContainer = () => {
  const { stateValue, dispatch } = useContextGlobal()
  const cartArray = [...stateValue.productShop];

  const handleClear = () =>{
    dispatch({type: CLEAR })
  }

  const removeItem = (id) =>{
    dispatch({type: REMOVE_ITEM, id : id})
  }

  const increase = (id) => {
    dispatch({type: INCREASE, id : id})
  }

  const decrease = (id) => {
    dispatch({type: DECREASE, id : id})
  }

  useEffect(()=>{
    dispatch({type : CALCULATE})
  },[stateValue.productShop])

  // console.log(cartArray)
  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} removeItem = {removeItem} increase={increase} decrease={decrease}/>;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>{stateValue.total}</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={handleClear}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;

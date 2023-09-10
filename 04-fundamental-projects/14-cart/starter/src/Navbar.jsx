import { FaCartPlus } from 'react-icons/fa';
import { useContextGlobal } from './useContextGlobal';
import { useEffect, useState } from 'react';
const Navbar = () => {
  const { stateValue, dispatch } = useContextGlobal()
  const [countBag, setCountBag] = useState(0)
  useEffect(()=>{
  let count = 0;
  stateValue.productShop.forEach(element => {
    if (+element.amount > 0 ){
      count = count + element.amount
    }
  });
  setCountBag(count)
  },[stateValue.productShop])
  return (
    <nav>
      <div className='nav-center'>
        <h4>useReducer</h4>
        <div className='nav-container'>
          <FaCartPlus className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{countBag}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

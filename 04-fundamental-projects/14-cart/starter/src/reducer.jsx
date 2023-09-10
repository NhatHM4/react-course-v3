import cartItems from "./data";

const ADD = "add";
const CLEAR = "clear";
const REMOVE_ITEM = "remove_item";
const INCREASE = "increase";
const DECREASE = "decrease";
const CALCULATE = "calculate";

const initValue = {
  yourBag: [],
  productShop: cartItems,
  total: 0,
};
const reducer = (state, action) => {
  let value;
  switch (action.type) {
    case ADD:
      value = action.payload;
      break;
    case CLEAR:
      value = {
        ...state,
        productShop: [],
      };
      break;
    case REMOVE_ITEM:
      let arrClone = [...state.productShop];
      arrClone = arrClone.filter((item) => {
        return item.id != action.id;
      });
      value = {
        ...state,
        productShop: arrClone,
      };
      break;
    case INCREASE:
      let newArr = state.productShop.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }

        return item;
      });
      value = {
        ...state,
        productShop: newArr,
      };
      break;
    case DECREASE:
      let newArr1 = state.productShop.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            amount: +item.amount == 0 ? 0 : item.amount - 1,
          };
        }

        return item;
      });
      value = {
        ...state,
        productShop: newArr1,
      };
      break;

    case CALCULATE:
      let total = 0;
      state.productShop.forEach((element) => {
        total = total + (+element.amount) * parseFloat(element.price);
      });
      value = {
        ...state,
        total: total,
      };
      break;
    default:
      throw new Error("Invalid value !!!!");
  }

  return value;
};

export { reducer, ADD, initValue, CLEAR, REMOVE_ITEM, INCREASE, DECREASE, CALCULATE };

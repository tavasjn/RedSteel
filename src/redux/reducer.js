//  Reducer for redux //
import axios from "axios";

const initialState = {
  email: "",
  user: {},
  loggedIn: false,
  cart: []
};

const UPDATE_EMAIL = "UPDATE_EMAIL";
const GET_USER = "GET_USER";
const LOGOUT = "LOGOUT";
const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const GET_CART = "GET_CART";
const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
const CLEAR_CART = "CLEAR_CART";

// This is the AUTH0 Functions //
export function updateEmail(emailObj) {
  return {
    type: UPDATE_EMAIL,
    payload: emailObj
  };
}

export const getUser = () => {
  return {
    type: GET_USER,
    payload: axios.get("/api/getUser").then(res => res.data)
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: axios
      .get(`/api/logout`)
      .then(res => console.log("delete", res))
      .catch(err => console.log(err))
  };
};

// AUTH0 above here //

// CART Functions Below //

export function addItemToCart(size, productName, amount) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: {
      size,
      productName,
      amount
    }
  };
}

export function removeItemFromCart(productId) {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: productId
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
    payload: []
  };
}

export const getCart = user_id => {
  let data = axios
    .get(`/api/cart/`)
    .then(res => res.data)
    .then(res => {
      return res;
    });
  console.log(data);

  return {
    type: GET_CART,
    payload: data
  };
};

// CART Function Above here //

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER + "_PENDING":
      return { ...state };
    case GET_USER + "_FULFILLED":
      return { ...state, user: payload, loggedIn: true };
    case LOGOUT + "_FULFILLED":
      return { user: {}, users: {}, loggedIn: false };
    case UPDATE_EMAIL:
      let email = payload;
      return { ...state, email };
    case ADD_ITEM_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    case REMOVE_ITEM_FROM_CART:
      state.cart.splice(payload, 1);
      return { ...state };
    case CLEAR_CART:
      return { ...state, cart: payload };
    default:
      return state;
  }
}

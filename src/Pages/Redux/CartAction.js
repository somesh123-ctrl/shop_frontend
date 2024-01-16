export const addToCart = (item) => (dispatch, getState) => {
  var cartItem = {
    name: item.name,
    _id: item._id,
    image: item.image,
    amount: item.amount,
    price: item.price,
  };

  if (cartItem.quantity < 1) {
    dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  } else {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cartReducer.cartItems)
    );
  }
};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  const cartItems = getState().cartReducer.cartitems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

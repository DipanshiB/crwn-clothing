export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItem.cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
        //cartItems.map returns a new array which is required so that new versions of our state are returned so react re renders it. 
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};
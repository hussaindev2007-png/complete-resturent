


// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product, quantity = 1, gift) => {
//     const existing = cartItems.find(
//       (item) => item.id === product.id && item.CardGifts === gift
//     );

//     if (existing) {
      
//       const updatedCart = cartItems.map((item) =>
//         item.id === product.id && item.CardGifts === gift
//           ? { ...item, quantity: Math.min(5, item.quantity + quantity) }
//           : item
//       );
//       setCartItems(updatedCart);
//     } else {
//       setCartItems([
//         ...cartItems,
//         { ...product, quantity, CardGifts: gift },
//       ]);
//     }
//   };

//   const updateCartQty = (item, change) => {
//     const updated = cartItems.map((p) =>
//       p.id === item.id && p.CardGifts === item.CardGifts
//         ? { ...p, quantity: Math.max(1, Math.min(5, p.quantity + change)) }
//         : p
//     );
//     setCartItems(updated);
//   };

//   const removeCartItem = (item) => {
//     setCartItems(
//       cartItems.filter(
//         (p) => !(p.id === item.id && p.CardGifts === item.CardGifts)
//       )
//     );
//   };

//   const totalCartPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   const totalCartItems = cartItems.reduce(
//     (acc, item) => acc + item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         updateCartQty,
//         removeCartItem,
//         totalCartPrice,
//         totalCartItems, 
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => useContext(CartContext);




















import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1, gift) => {
    const existing = cartItems.find(
      (item) => item.id === product.id && item.CardGifts === gift
    );

    if (existing) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id && item.CardGifts === gift
          ? { ...item, quantity: Math.min(5, item.quantity + quantity) }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity, CardGifts: gift },
      ]);
    }
  };

  const updateCartQty = (item, change) => {
    const updated = cartItems.map((p) =>
      p.id === item.id && p.CardGifts === item.CardGifts
        ? { ...p, quantity: Math.max(1, Math.min(5, p.quantity + change)) }
        : p
    );
    setCartItems(updated);
  };

  const removeCartItem = (item) => {
    setCartItems(
      cartItems.filter(
        (p) => !(p.id === item.id && p.CardGifts === item.CardGifts)
      )
    );
  };

  // ✅ ADD THIS (IMPORTANT)
  const clearCart = () => {
    setCartItems([]);
  };

  const totalCartPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalCartItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartQty,
        removeCartItem,
        clearCart,            
        totalCartPrice,
        totalCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

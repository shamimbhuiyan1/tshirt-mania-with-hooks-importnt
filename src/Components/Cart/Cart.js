import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  // conditional rendering ooptions:
  // 1.element variable
  let command;
  if (cart.length === 0) {
    command = <p>Please at least one items</p>;
  } else if (cart.length === 1) {
    command = <p>Please add more items...</p>;
  } else {
    command = (
      <p>
        <small>Thanks for adding items</small>
      </p>
    );
  }

  return (
    <div>
      <h2>Items Selected: {cart.length} </h2>

      {cart.map((tShirt) => (
        <p>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
        </p>
      ))}
      {/* 4. or(||)  operator shorthand*/}
      {cart.length === 0 || (
        <p
          style={{ backgroundColor: "indigo", color: "white", padding: "5px" }}
        >
          You bought this
        </p>
      )}

      {/* 3. and(&&)  operator shorthand*/}

      {cart.length === 3 && (
        <div style={{ backgroundColor: "yellow", padding: "5px" }}>
          <h3>Trigonal</h3>
        </div>
      )}
      {command}

      {/* 2.ternary operator */}

      {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove all</button>}
      {cart.length === 4 && (
        <button
          style={{
            backgroundColor: "yellow",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Review Order
        </button>
      )}
    </div>
  );
};

export default Cart;

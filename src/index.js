import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "30px",
  // };
  const style = {};
  return (
    <>
      <header className="header">
        <h1 style={style}>FAST REACT PIZZA CO.</h1>
      </header>
    </>
  );
}
function Menu() {
  const pizza = pizzaData;
  // const pizza = [];
  const pizzaLength = pizza.length;
  return (
    <>
      <main className="menu">
        <h2>OUR MENU</h2>
        {pizzaLength > 0 ? (
          <>
            <p>Authentic italian cuisine. 6 creative dishes to choose form</p>
            <ul className="pizzas">
              {pizza.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : (
          <p>WE DO NOT HAVE ANYTHING TO SERVE</p>
        )}
      </main>
    </>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  // if (pizzaObj.soldOut) return null;
  return (
    <>
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt="" />
        <div>
          <h2>{pizzaObj.name}</h2>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 3}</span>
        </div>
      </li>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 1;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("WE ARE CURRENTLY OPEN");
  // else alert("WE ARE CURRENTLY CLOSED");
  return (
    <>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          WE ARE HAPPY TO WELOME YOU BETWEEN {openHour}:00 and {closeHour}:00
        </p>
      )}
    </>
  );
}

function Order(props) {
  return (
    <>
      <p>We are open until {props.closeHour}:00 . Come visit us </p>
      <button className="btn">Order</button>
    </>
  );
}

/**REACT V18 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

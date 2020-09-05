const pizza = {
  name: "Pepperoni",
  toppings: ["pepperoni"],
};

function order({ name: pizzaName, toppings: pizzaToppings }) {
  console.log(pizzaName, pizzaToppings);
}

order(pizza);

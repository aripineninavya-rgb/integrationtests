function createDrink(type) {
  const menu = {
    latte: 45,
    espresso: 30,
    cappuccino: 50,
  };

  return {
    type,
    price: menu[type] || 0,
  };
}

function prepareOrder(drink) {
  console.log(`Preparing ${drink.type}...`);
  return Math.floor(Math.random() * 1000);
}

function processPayment(ticketNumber, amount) {
  if (!ticketNumber && ticketNumber !== 0) {
    throw new Error("Invalid ticket number");
  }

  console.log(`Payment of ${amount} received`);
  return true;
}

function orderDrink(type) {
  const drink = createDrink(type);
  const ticket = prepareOrder(drink);
  return processPayment(ticket, drink.price);
}

module.exports = { createDrink, prepareOrder, processPayment, orderDrink };

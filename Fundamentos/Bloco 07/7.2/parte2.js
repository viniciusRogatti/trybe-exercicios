// [1].Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701

// [2].Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
}



const customerInfo = (order) => {
  const message = [];
  message.push(`Olá ${order.order.delivery.deliveryPerson}`);
  message.push(` entrega para: ${order.name}`);
  message.push(` Telefone: ${order.phoneNumber}`);
  message.push(` ${order.address.street}`);
  message.push(` Nº: ${order.address.number}`);
  message.push(` AP ${order.address.apartment}`);

  console.log(message.toString());
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP ${order.address.apartment}`);
}

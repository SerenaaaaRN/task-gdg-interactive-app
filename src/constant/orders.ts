import { dummyBooks } from "./books.js";

export const dummyOrders = [
  {
    _id: "66i7guy876h756gwgreghc56456v5tc",
    userId: "68591d36daf423db94fa8f4f",
    items: [
      {
        book: dummyBooks[0],
        quantity: 2,
        size: "M",
      },
      {
        book: dummyBooks[11],
        quantity: 2,
        size: "XL",
      },
    ],
    address: {
      firstName: "John",
      lastName: "Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      country: "USA",
      zipcode: "10001",
      phone: "+1 123 456 7890",
    },
    amount: 40,
    paymentMethod: "stripe",
    isPaid: true,
    status: "Delivered",
    createdAt: "2024-06-10T10:00:00.000Z",
  },
  {
    _id: "45dfdfy76789012cv45t45c45cct",
    userId: "68591d36daf423db94fa8f4f",
    items: [
      {
        book: dummyBooks[34],
        quantity: 2,
        size: "S",
      },
      {
        book: dummyBooks[8],
        quantity: 2,
        size: "XXL",
      },
    ],
    address: {
      firstName: "Jane",
      lastName: "Smith",
      street: "456 Elm Street",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      zipcode: "90001",
      phone: "+1 987 654 3210",
    },
    amount: 999,
    paymentMethod: "COD",
    isPaid: true,
    status: "Shipped",
    createdAt: "2024-06-08T15:30:00.000Z",
  },
];

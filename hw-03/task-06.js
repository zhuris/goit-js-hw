// Задание 6

// Напиши функцию calculateTotalPrice(arr, productName),
// которая получает массив объектов и имя продукта (значение свойства name).
// Возвращает общую стоимость продукта (цена * количество).
// Вызовы функции для проверки работоспособности твоей реализации.

const calculateTotalPrice = function(arr, productName) {
  for (let result of arr) {
    if (result.name === productName) {
      return result.price * result.quantity;
    }
  }
};

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

console.log(calculateTotalPrice(products, "Радар"));

console.log(calculateTotalPrice(products, "Дроид"));

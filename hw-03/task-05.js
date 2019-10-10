// Задание 5
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя ключа.
// Возвращает массив значений определенного поля prop из каждого объекта в массиве.
// Вызовы функции для проверки работоспособности твоей реализации.

const getAllPropValues = (arr, prop) => {
  let editArr = [];

  for (let value of arr) {
    if (prop in value) {
      editArr.push(value[prop]);
    }
  }

  return editArr;
};
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

console.log(getAllPropValues(products, "name"));

console.log(getAllPropValues(products, "quantity"));

console.log(getAllPropValues(products, "category"));

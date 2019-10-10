// Задание 4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
// Вызовы функции для проверки работоспособности твоей реализации.

const countTotalSalary = function(employees) {
  let total = 0;
  let keys = Object.keys(employees);

  for (let key of keys) {
    total += employees[key];
  }
  return total;
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
);

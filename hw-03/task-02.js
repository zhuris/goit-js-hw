// Задание 2

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
// Функция возвращает число - количество свойств.
// Вызовы функции для проверки работоспособности твоей реализации.

const countProps = function(obj) {
  let total = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    total++;
  }
  return total;
};

console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

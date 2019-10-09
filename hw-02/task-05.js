// Задание 5

// Напиши функцию checkForSpam(str), принимающую 1 параметр string - строку.
//  Функция проверяет ее на содержание слов spam и sale.
//  Если нашли зарещенное слово то функция возвращает true,
//  если запрещенных слов нет функция возвращает false.
//  Слова в строке могут быть в произвольном регистре.
// Вызовы функции для проверки работоспособности твоей реализации.

const checkForSpam = function(str) {
  str = str.toLowerCase();
  if (str.includes("spam") || str.includes("sale")) {
    return true;
  } else {
    return false;
  }
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));

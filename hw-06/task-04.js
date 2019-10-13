import users from "./users.js";

// Задание 4

// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users =>
  users.filter(user => !user.isActive).map(user => user);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

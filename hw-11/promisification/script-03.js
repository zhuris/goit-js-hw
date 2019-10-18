// Задание 3

// Перепиши функцию makeTransaction() так,
// чтобы она не использовала callback-функции onSuccess и onError,
// а принимала всего один параметр transaction и возвращала промис.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  const delay = randomIntegerFromInterval(200, 500);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve({ id: transaction.id, time: delay });
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
};

const onSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time} ms`);
};

const onError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};
/*
 * Должно работать так
 */
makeTransaction({ id: 70, amount: 150 })
  .then(onSuccess)
  .catch(onError);

makeTransaction({ id: 71, amount: 230 })
  .then(onSuccess)
  .catch(onError);

makeTransaction({ id: 72, amount: 75 })
  .then(onSuccess)
  .catch(onError);

makeTransaction({ id: 73, amount: 100 })
  .then(onSuccess)
  .catch(onError);

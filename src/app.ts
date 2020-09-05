function sumAll(message: string, ...arr: any[]) {
  console.log(message);

  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll("Message", 1, 2, 3, 4, 5, 6, 7, 9, 10);

console.log(sum);


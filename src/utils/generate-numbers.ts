function generateRandomNumber(digits: number) {
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function generateRandomNumberArray(
  digits: number,
  amount: number
) {
  let array: number[] = [];

  for (let i = 0; i < amount; i++) {
    let numeroAleatorio;
    do {
      numeroAleatorio = generateRandomNumber(digits);
    } while (i > 0 && array[i - 1] === numeroAleatorio);

    array.push(numeroAleatorio);
  }

  return array;
}

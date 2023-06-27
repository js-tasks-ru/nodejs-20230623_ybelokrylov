function sum(a, b) {
  if ([a, b].some((value) => typeof value !== 'number')) {
    throw new TypeError(
        'Аргументы функции должны иметь числовой тип данных.',
    );
  }

  return a + b;
}

module.exports = sum;

const penjumlahan = (val1, val2, callback) => {
  setTimeout(() => {
    const result = val1 + val2;
    callback(result);
  }, 2000);
};

const perkalian = (val1, val2, callback) => {
  setTimeout(() => {
    const result = val1 * val2;
    callback(result);
  }, 2000);
};

const myFun = (hasil) => {
    const hasilPenjumlan = hasil;
    perkalian(hasilPenjumlan, 3, (result) => {
      console.log(`total dari hasil perkalian dan penjumlahan adalah ${result}`);
    });
  }
penjumlahan(10, 20, myFun);

// const pengabunganNama = (firstName, lastName, callback) =>{
//     if(typeof(firstName) !== 'string' || typeof(lastName) !== 'string'){
//         return callback('firstName atau latname harus string', null)
//     }
//     setTimeout(()=>{
//         const result = firstName + ' ' + lastName
//         callback(null, result)
//     },2000)
// }

const pengabunganNama = (firstName, lastName) => {
  return new Promise((resolve, reject) => {
    if (typeof firstName !== "string" || typeof lastName !== "string") {
      return reject("firstName atau latname harus string");
    }
    setTimeout(() => {
      const result = firstName + " " + lastName;
      resolve(result);
    }, 2000);
  });
};

const penjumlahan = (val1, val2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = val1 + val2;
      resolve(result);
    }, 2000);
  });
};

pengabunganNama("risano", "akbar")
  .then((res) => {
    const nama = res;
    penjumlahan(20, 30)
    .then((res) => {
      console.log(
        `nama saya adalah ${nama} dan hasil penjumlahan adalah ${res}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

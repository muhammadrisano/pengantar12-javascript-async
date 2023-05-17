// const penjumlahan = (val1, val2, callback) => {
//     setTimeout(() => {
//       const result = val1 + val2;
//       callback(result);
//     }, 2000);
//   };

const penjumlahan = (val1, val2) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const result = val1 + val2;
            resolve(result)
          }, 2000);
    })
};

penjumlahan(20, 30)
.then((res)=>{
    console.log(res)
})